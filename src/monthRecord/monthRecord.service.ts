import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../auth/auth.entity";
import { Stroke } from "../common/enum/Enum";
import dateUtils from "../common/util/dateUtils";
import { RecentRecordDateRequestDto } from "./dto/monthRecentRecord.request.dto";
import { RecentRecordDateDto } from "./dto/monthRecentRecord.response.dto";
import { RecordMonthlyLabsDto } from "./dto/monthRecord.labs.dto";
import { RecordMonthlyFilterDto } from "./dto/monthRecord.request.dto";
import { RecordMonthlyListResponseDto } from "./dto/monthRecord.response.dto";
import { MonthRecord } from "./monthRecord.entity";
import { MonthRecordRepository } from "./monthRecord.repository";

@Injectable()
export class MonthRecordService {
  constructor(
    @InjectRepository(MonthRecordRepository)
    private readonly MonthRecordRepository: MonthRecordRepository
  ) {}

  async findMonthlyRecordList(
    dto: RecordMonthlyFilterDto,
    user: User
  ): Promise<RecordMonthlyListResponseDto> {
    const userId = user.id;
    const stroke = dto.stroke;
    const date = !dto.date
      ? await this.MonthRecordRepository.findRecentlyDateByUserId(userId)
      : dto.date;
    const records: Array<MonthRecord> =
      await this.MonthRecordRepository.findByUserIdAndDate(userId, date);

    const result = this.sumRecordTotalInfo(records, date, stroke);
    // TODO recordLabsList 추가
    result.recordLabsList = this.getRecordLabs(records);
    return result;
  }

  async findRecentRecordDateList(
    dto: RecentRecordDateRequestDto,
    user: User
  ): Promise<RecentRecordDateDto[]> {
    const userId = user.id;
    const queryResult =
      await this.MonthRecordRepository.findRecentRecordDateListByUserId(userId);
    const result: RecentRecordDateDto[] = [];
    queryResult.forEach((value) => {
      const year = dateUtils.getYear(value["date"]);
      const month = dateUtils.getMonth(value["date"]);
      result.push(new RecentRecordDateDto(year, month));
    });
    return result;
  }

  private sumRecordTotalInfo(
    records: Array<MonthRecord>,
    date: string,
    stroke: Stroke
  ): RecordMonthlyListResponseDto {
    let result: RecordMonthlyListResponseDto = new RecordMonthlyListResponseDto(
      date
    );

    if (!records || records.length == 0) {
      return result;
    }
    records.forEach((value: MonthRecord) => {
      result.totalBpm += value["beat_per_minute"];
      result.totalDistance += value["total_distance"];
      result.totalTime += value["total_time"];
      result.recordLabsList.push(this.getRecordInfoByStroke(value, stroke));
    });
    result.totalBpm /= records.length;
    return result;
  }

  private getRecordLabs(records: Array<MonthRecord>): RecordMonthlyLabsDto[] {
    let result: RecordMonthlyLabsDto[] = [];

    if (!records || records.length == 0) {
      return result;
    }
    records.forEach((value: MonthRecord) => {
      result.push(
        new RecordMonthlyLabsDto(
          value.week,
          value["total_distance"],
          value["total_time"]
        )
      );
    });
    return result;
  }

  private getRecordInfoByStroke(
    record: MonthRecord,
    stroke: Stroke
  ): RecordMonthlyLabsDto {
    if (stroke) {
      return record.recordTotalInfo;
    }
  }
}
