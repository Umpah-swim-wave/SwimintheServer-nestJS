import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Stroke } from "../common/enum/Enum";
import dateUtils from "../common/util/dateUtils";
import { RecentRecordDateRequestDto } from "./dto/monthRecentRecord.request.dto";
import { RecentRecordDateDto } from "./dto/monthRecentRecord.response.dto";
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
    dto: RecordMonthlyFilterDto
  ): Promise<RecordMonthlyListResponseDto> {
    const userId = dto.userId;
    const stroke = dto.stroke;
    const date = !dto.date
      ? await this.MonthRecordRepository.findRecentlyDateByUserId(userId)
      : dto.date;
    const records: Array<MonthRecord> =
      await this.MonthRecordRepository.findByUserIdAndDate(userId, date);

    // stroke를 통해 어떠한 것을 보여줄지 정하기
    const result = this.sumRecorTotalInfo(records, date);
    records.forEach((value) => {});
    return result;
  }

  async findRecentRecordDateList(
    dto: RecentRecordDateRequestDto
  ): Promise<RecentRecordDateDto[]> {
    const userId = dto.userId;
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

  private sumRecorTotalInfo(
    records: Array<MonthRecord>,
    date: string
  ): RecordMonthlyListResponseDto {
    if (!records || records.length == 0) {
      throw new BadRequestException("유저의 기록이 없습니다.");
    }
    let result: RecordMonthlyListResponseDto = new RecordMonthlyListResponseDto(
      date
    );

    records.forEach((value: MonthRecord) => {
      console.log(value);
      result.totalBpm += value["beat_per_minute"];
      result.totalDistance += value["total_distance"];
      result.totalTime += value["total_time"];
    });
    result.totalBpm /= records.length;
    return result;
  }
}
