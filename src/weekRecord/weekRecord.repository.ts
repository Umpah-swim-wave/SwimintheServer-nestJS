import { UniqueColumsDao } from "../common/dao/UniqueColumns.dao";
import { createQueryBuilder, EntityRepository, Repository } from "typeorm";
import { WeekRecord } from "./weekRecord.entity";
import { DayOfWeek } from "src/common/enum/Enum";

@EntityRepository(WeekRecord)
export class WeekRecordRepository extends Repository<WeekRecord> {
  async findByUniqueColumns(params: UniqueColumsDao): Promise<WeekRecord> {
    return await this.findOne({
      userId: params.userId,
      yearMonth: params.yearMonth,
      week: params.week,
      dayOfWeek: params.dayOfWeek,
    });
  }

  async findByUserIdAndDate(
    userId: number,
    yearMonth: string,
    dayOfWeek: DayOfWeek,
    week: number
  ) {
    const queryBuilder = createQueryBuilder()
      .select("week_records")
      .from(WeekRecord, "week_records")
      .where("user_id = :userId", { userId })
      .andWhere("`year_month` = :yearMonth", { yearMonth })
      .andWhere("day_of_week = :dayOfWeek", { dayOfWeek })
      .andWhere("week = :week", { week })
      .andWhere("active = 'Y'");

    // queryBuilder.andWhere("date = :date", { date });

    return queryBuilder.getOne();
  }
}
