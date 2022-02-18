import { UniqueColumsDao } from '../common/dao/UniqueColumns.dao';
import {
  createQueryBuilder,
  EntityRepository,
  getRepository,
  Repository,
} from 'typeorm';
import { WeekRecord } from './weekRecord.entity';
import { RecentRecordDateDao } from './dto/RecentRecordDate.dao';
import { DayOfWeek } from '../common/enum/Enum';

@EntityRepository(WeekRecord)
export class WeekRecordRepository extends Repository<WeekRecord> {
  async findByUniqueColumns(params: UniqueColumsDao): Promise<WeekRecord> {
    return await this.findOne({
      userId: params.userId,
      yearMonthDate: params.yearMonthDate,
      week: params.week,
      dayOfWeek: params.dayOfWeek,
    });
  }

  async findByUserIdAndDate(
    userId: number,
    yearMonthDate: string,
    week: number,
  ): Promise<WeekRecord[]> {
    const queryBuilder = await createQueryBuilder()
      .select('*')
      .from(WeekRecord, 'week_records')
      .where('user_id = :userId', { userId })
      .andWhere('`year_month_date` = :yearMonthDate', { yearMonthDate })
      .andWhere('week = :week', { week })
      .andWhere(`active = 'Y'`);
    return await queryBuilder.getRawMany();
  }

  async findOneByUserIdAndDate(
    userId: number,
    yearMonthDate: string,
    week: number,
    dayOfWeek: DayOfWeek,
  ): Promise<WeekRecord> {
    const queryBuilder = await createQueryBuilder()
      .select('*')
      .from(WeekRecord, 'week_records')
      .where('user_id = :userId', { userId })
      .andWhere('`year_month_date` = :yearMonthDate', { yearMonthDate })
      .andWhere('week = :week', { week })
      .andWhere('day_of_week = :dayOfWeek', { dayOfWeek })
      .andWhere(`active = 'Y'`);
    return await queryBuilder.getRawOne();
  }

  async findRecentlyDateByUserId(userId: number): Promise<RecentRecordDateDao> {
    const result = createQueryBuilder()
      .select('year_month_date', 'date')
      .addSelect('week')
      .distinct(true)
      .from(WeekRecord, 'week_record')
      .where('user_id = :userId', { userId: userId })
      .andWhere(`active = 'Y'`)
      .orderBy('year_month_date', 'DESC')
      .orderBy('week', 'DESC')
      .limit(1)
      .getRawOne();

    return result;
  }

  async findRecentRecordDateListByUserId(
    userId: number,
  ): Promise<RecentRecordDateDao[]> {
    const result = createQueryBuilder()
      .select('year_month_date', 'date')
      .addSelect('week')
      .distinct(true)
      .from(WeekRecord, 'week_record')
      .where('user_id = :userId', { userId: userId })
      .andWhere(`active = 'Y'`)
      .orderBy('year_month_date', 'DESC')
      .orderBy('week', 'DESC')
      .getRawMany();

    return result;
  }
}
