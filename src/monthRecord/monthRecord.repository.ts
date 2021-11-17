import { UniqueColumsDao } from "../common/dao/UniqueColumns.dao";
import { EntityRepository, Repository } from "typeorm";
import { MonthRecord } from "./monthRecord.entity";

@EntityRepository(MonthRecord)
export class MonthRecordRepository extends Repository<MonthRecord> {
  async findByUniqueColumns(params: UniqueColumsDao): Promise<MonthRecord> {
    return await this.findOne({
      userId: params.userId,
      yearMonth: params.yearMonth,
      week: params.week,
    });
  }
}
