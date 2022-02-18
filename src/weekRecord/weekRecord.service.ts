import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stroke } from '../common/enum/Enum';
import mathUtils from '../common/util/mathUtils';
import { User } from '../auth/auth.entity';
import { CalenderRepository } from '../calender/calender.repository';
import dateUtils from '../common/util/dateUtils';
import { MonthRecordRepository } from '../monthRecord/monthRecord.repository';
import { RecentRecordDateDto } from './dto/weekRecentRecord.response.dto';
import { RecordWeeklyLabsDto } from './dto/weekRecord.labs.dto';
import { RecordWeeklyFilterDto } from './dto/weekRecord.request.dto';
import { RecordWeeklyListDto } from './dto/weekRecord.response.dto';
import { WeekRecord } from './weekRecord.entity';
import { WeekRecordRepository } from './weekRecord.repository';

@Injectable()
export class WeekRecordService {
  constructor(
    @InjectRepository(WeekRecordRepository)
    private readonly WeekRecordRepository: WeekRecordRepository,
    @InjectRepository(MonthRecordRepository)
    private readonly MonthRecordRepository: MonthRecordRepository,
    @InjectRepository(CalenderRepository)
    private readonly CalenderRepository: CalenderRepository,
  ) {}
  async findWeeklyRecordList(
    dto: RecordWeeklyFilterDto,
    user: User,
  ): Promise<RecordWeeklyListDto> {
    const userId = user.id;
    const stroke = dto.stroke;
    const date = dto.date;
    const week = dto.week;
    const records: Array<WeekRecord> =
      await this.WeekRecordRepository.findByUserIdAndDate(userId, date, week);
    if (!records || records.length == 0) {
      return new RecordWeeklyListDto();
    }
    const result: RecordWeeklyListDto =
      await this.MonthRecordRepository.findRecordDateByUserId(
        userId,
        date,
        week,
      );
    result.recordLabsList = this.getLabsByStroke(records, Stroke[stroke]);
    return result;
  }

  async findRecentRecordDateList(user: User): Promise<RecentRecordDateDto[]> {
    const userId = user.id;
    const queryResult =
      await this.MonthRecordRepository.findRecentRecordDateListByUserId(userId);
    const result: RecentRecordDateDto[] = [];

    // await을 위한 모던 for문
    for (let i = 0; i < queryResult.length; i++) {
      const yearMonthDate = queryResult[i]['date'];
      const week = queryResult[i]['week'];
      const dates: string[] =
        await this.CalenderRepository.findDateByWeekAndYearMonthDate(
          yearMonthDate,
          week,
        );
      const startDate = dateUtils.getDayFormat(dates[0]['date']);
      const endDate = dateUtils.getDayFormat(dates[dates.length - 1]['date']);
      result.push(
        new RecentRecordDateDto(startDate, endDate, yearMonthDate, week),
      );
    }

    return result;
  }

  private getLabsByStroke(
    records: WeekRecord[],
    stroke: Stroke,
  ): RecordWeeklyLabsDto[] {
    const labs: RecordWeeklyLabsDto[] = [];
    switch (stroke) {
      case Stroke.FREESTYLE:
        records.forEach((record) => {
          const lab: RecordWeeklyLabsDto = new RecordWeeklyLabsDto();
          lab.dayOfWeek = record['day_of_week'];
          lab.distance = record['freestyle_distance'];
          lab.time = record['freestyle_time'];
          lab.speed = mathUtils.getSpeed(lab.distance, lab.time);
          labs.push(lab);
        });
        break;
      case Stroke.BUTTERFLY:
        records.forEach((record) => {
          const lab: RecordWeeklyLabsDto = new RecordWeeklyLabsDto();
          lab.dayOfWeek = record['day_of_week'];
          lab.distance = record['butterfly_distance'];
          lab.time = record['butterfly_time'];
          lab.speed = mathUtils.getSpeed(lab.distance, lab.time);
          labs.push(lab);
        });
        break;
      case Stroke.BACK:
        records.forEach((record) => {
          const lab: RecordWeeklyLabsDto = new RecordWeeklyLabsDto();
          lab.dayOfWeek = record['day_of_week'];
          lab.distance = record['back_distance'];
          lab.time = record['back_time'];
          lab.speed = mathUtils.getSpeed(lab.distance, lab.time);
          labs.push(lab);
        });
        break;
      case Stroke.BREAST:
        records.forEach((record) => {
          const lab: RecordWeeklyLabsDto = new RecordWeeklyLabsDto();
          lab.dayOfWeek = record['day_of_week'];
          lab.distance = record['breast_distance'];
          lab.time = record['breast_time'];
          lab.speed = mathUtils.getSpeed(lab.distance, lab.time);
          labs.push(lab);
        });
        break;
      case Stroke.IM:
        records.forEach((record) => {
          const lab: RecordWeeklyLabsDto = new RecordWeeklyLabsDto();
          lab.dayOfWeek = record['day_of_week'];
          lab.distance = record['im_distance'];
          lab.time = record['im_time'];
          lab.speed = mathUtils.getSpeed(lab.distance, lab.time);
          labs.push(lab);
        });
        break;
      default:
        records.forEach((record) => {
          const lab: RecordWeeklyLabsDto = new RecordWeeklyLabsDto();
          lab.dayOfWeek = record['day_of_week'];
          lab.distance = record['total_distance'];
          lab.time = record['total_time'];
          lab.speed = mathUtils.getSpeed(lab.distance, lab.time);
          labs.push(lab);
        });
        break;
    }

    return labs;
  }
}
