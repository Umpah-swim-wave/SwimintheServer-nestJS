import { UniqueColumsDao } from '../common/dao/UniqueColumns.dao';
import {
  createQueryBuilder,
  EntityRepository,
  getRepository,
  Repository,
} from 'typeorm';
import { MonthRecord, RecentRecordDateDao } from './monthRecord.entity';
import { RecordWeeklyListDto } from '../weekRecord/dto/weekRecord.response.dto';

@EntityRepository(MonthRecord)
export class MonthRecordRepository extends Repository<MonthRecord> {
  async findByUniqueColumns(params: UniqueColumsDao): Promise<MonthRecord> {
    return await this.findOne({
      userId: params.userId,
      yearMonthDate: params.yearMonthDate,
      week: params.week,
    });
  }

  async findByUserIdAndDate(
    userId: number,
    yearMonthDate: string,
  ): Promise<Array<MonthRecord>> {
    const queryBuilder = await createQueryBuilder()
      .select('*')
      .from(MonthRecord, 'month_records')
      .where('user_id = :userId', { userId })
      .andWhere('`year_month_date` = :yearMonthDate', { yearMonthDate })
      .andWhere("active = 'Y'");

    return await queryBuilder.getRawMany();
  }

  async findRecentlyDateByUserId(userId: number): Promise<string> {
    const result = await getRepository(MonthRecord).findOne({
      where: { userId },
      select: ['yearMonthDate'],
    });
    return result.yearMonthDate;
  }

  async findRecentRecordDateListByUserId(
    userId: number,
  ): Promise<RecentRecordDateDao[]> {
    const result = createQueryBuilder()
      .select('year_month_date', 'date')
      .addSelect('week')
      .distinct(true)
      .from(MonthRecord, 'month_records')
      .where('user_id = :userId', { userId: userId })
      .andWhere("active = 'Y'")
      .orderBy('year_month_date', 'DESC')
      .orderBy('week', 'DESC')
      .getRawMany();

    return result;
  }

  async findRecordDateByUserId(
    userId: number,
    yearMonthDate: string,
    week: number,
  ): Promise<RecordWeeklyListDto> {
    const result = createQueryBuilder()
      .select(['total_distance', 'total_time', 'beat_per_minute', 'calorie'])
      .addSelect('total_distance/total_time', 'speed')
      .from(MonthRecord, 'month_records')
      .where('user_id = :userId', { userId })
      .andWhere('`year_month_date` = :yearMonthDate', { yearMonthDate })
      .andWhere('`week` = :week', { week })
      .andWhere("active = 'Y'")
      .getRawOne();

    return result;
  }
}
