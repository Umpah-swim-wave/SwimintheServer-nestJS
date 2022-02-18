import {
  createQueryBuilder,
  EntityRepository,
  getRepository,
  Repository,
} from 'typeorm';
import { Calender } from './calender.entity';

@EntityRepository(Calender)
export class CalenderRepository extends Repository<Calender> {
  async findByDate(date: string): Promise<number> {
    const result = await getRepository(Calender).findOne({
      where: { date },
      select: ['week'],
    });
    return result.week;
  }

  async findDateByWeekAndYearMonthDate(
    yearMonthDate: string,
    week: number,
  ): Promise<string[]> {
    const result = createQueryBuilder()
      .select('date', 'date')
      .from(Calender, 'calender')
      .where('year_month_date = :yearMonthDate', { yearMonthDate })
      .andWhere('week = :week', { week })
      .orderBy('year_month_date', 'DESC')
      .orderBy('week', 'DESC')
      .getRawMany();

    return result;
  }
}
