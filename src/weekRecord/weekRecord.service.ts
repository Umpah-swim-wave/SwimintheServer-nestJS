import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CalenderRepository } from "src/calender/calender.repository";
import dateUtils from "src/common/util/dateUtils";
import { MonthRecordRepository } from "src/monthRecord/monthRecord.repository";
import { RecentRecordDateRequestDto } from "./dto/weekRecentRecord.request.dto";
import { RecentRecordDateDto } from "./dto/weekRecentRecord.response.dto";
import { RecordWeeklyFilterDto } from "./dto/weekRecord.request.dto";
import { RecordWeeklyListDto } from "./dto/weekRecord.response.dto";
import { WeekRecordRepository } from "./weekRecord.repository";

@Injectable()
export class WeekRecordService {
  constructor(
    @InjectRepository(WeekRecordRepository)
    private readonly WeekRecordRepository: WeekRecordRepository,
    @InjectRepository(MonthRecordRepository)
    private readonly MonthRecordRepository: MonthRecordRepository,
    @InjectRepository(CalenderRepository)
    private readonly CalenderRepository: CalenderRepository
  ) {}
  async findWeeklyRecordList(
    recordWeeklyFilterDto: RecordWeeklyFilterDto
  ): Promise<RecordWeeklyListDto> {
    let result: RecordWeeklyListDto;
    return result;
  }

  async findRecentRecordDateList(
    dto: RecentRecordDateRequestDto
  ): Promise<RecentRecordDateDto[]> {
    const userId = dto.userId;
    const queryResult =
      await this.MonthRecordRepository.findRecentRecordDateListByUserId(userId);
    const result: RecentRecordDateDto[] = [];

    // await을 위한 모던 for문
    for (let i = 0; i < queryResult.length; i++) {
      const yearMonthDate = queryResult[i]["date"];
      const week = queryResult[i]["week"];
      const dates: string[] =
        await this.CalenderRepository.findDateByWeekAndYearMonthDate(
          yearMonthDate,
          week
        );
      const startDate = dateUtils.getDayFormat(dates[0]["date"]);
      const endDate = dateUtils.getDayFormat(dates[dates.length - 1]["date"]);
      result.push(new RecentRecordDateDto(startDate, endDate));
    }

    return result;
  }
}
