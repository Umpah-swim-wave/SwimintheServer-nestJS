import { UniqueColumsDao } from "../common/dao/UniqueColumns.dao";
import {
  createQueryBuilder,
  EntityRepository,
  getRepository,
  Repository,
} from "typeorm";
import { MonthRecord } from "./monthRecord.entity";
import { Stroke } from "src/common/enum/Enum";

@EntityRepository(MonthRecord)
export class MonthRecordRepository extends Repository<MonthRecord> {
  async findByUniqueColumns(params: UniqueColumsDao): Promise<MonthRecord> {
    return await this.findOne({
      userId: params.userId,
      yearMonth: params.yearMonth,
      week: params.week,
    });
  }

  async findByUserIdAndDate(userId: number, yearMonth: string) {
    const queryBuilder = await createQueryBuilder()
      .select("*")
      .from(MonthRecord, "month_records")
      .where("user_id = :userId", { userId })
      .andWhere("`year_month` = :yearMonth", { yearMonth })
      .andWhere("active = 'Y'");

    return await queryBuilder.getRawMany();
  }

  async findRecentlyDateByUserId(userId: number): Promise<string> {
    const result = await getRepository(MonthRecord).findOne({
      where: { userId },
      select: ["yearMonth"],
    });
    return result.yearMonth;
  }
}
