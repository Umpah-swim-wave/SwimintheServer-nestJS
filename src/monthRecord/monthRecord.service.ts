import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import dateUtils from "src/common/util/dateUtils";
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
    const labs: Array<MonthRecord> =
      await this.MonthRecordRepository.findByUserIdAndDate(userId, date);

    // stroke를 통해 어떠한
    let result: RecordMonthlyListResponseDto;
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
}
