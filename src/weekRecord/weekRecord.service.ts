import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../auth/auth.entity";
import { CalenderRepository } from "../calender/calender.repository";
import dateUtils from "../common/util/dateUtils";
import { MonthRecordRepository } from "../monthRecord/monthRecord.repository";
import { RecentRecordDateDto } from "./dto/weekRecentRecord.response.dto";
import { RecordWeeklyFilterDto } from "./dto/weekRecord.request.dto";
import { RecordWeeklyListDto } from "./dto/weekRecord.response.dto";
import { WeekRecord } from "./weekRecord.entity";
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
    dto: RecordWeeklyFilterDto,
    user: User
  ): Promise<RecordWeeklyListDto> {
    const userId = user.id;
    const stroke = dto.stroke;
    const date = dto.date;
    const week = dto.week;
    const records: Array<WeekRecord> =
      await this.WeekRecordRepository.findByUserIdAndDate(userId, date, week);
    let result: RecordWeeklyListDto =
      await this.MonthRecordRepository.findRecordDateByUserId(
        userId,
        date,
        week
      );
    // TODO result.recordLabsList 코드 추가
    return result;
  }

  async findRecentRecordDateList(user: User): Promise<RecentRecordDateDto[]> {
    const userId = user.id;
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
