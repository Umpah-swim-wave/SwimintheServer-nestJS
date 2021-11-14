import { UniqueColumsDao } from "../common/dao/UniqueColumns.dao";
import { EntityRepository, Repository } from "typeorm";
import { WeekRecord } from "./weekRecord.entity";

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
}
