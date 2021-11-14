import { createQueryBuilder, EntityRepository, Repository } from "typeorm";
import { DayRecord } from "./dayRecord.entity";
import { RecordDailyFilterDto } from "./dto/dayRecord.request.dto";

@EntityRepository(DayRecord)
export class DayRecordRepository extends Repository<DayRecord> {
  async findLabsByUserIdAndSearchFilter(param: RecordDailyFilterDto) {
    const queryBuilder = createQueryBuilder()
      .select([
        "day_records.id",
        "day_records.stroke",
        "day_records.distance",
        "day_records.time",
      ])
      .from(DayRecord, "day_records")
      .andWhere("day_records.userId = :userId", { userId: param.userId });
    let date = param.date;
    if (date === null) {
      date = await this.findRecentlyDateByUserId(param.userId);
    }
    queryBuilder.andWhere("day_records.date = :date", { date });

    if (param.stroke != null) {
      queryBuilder.andWhere("day_records.stroke = :stroke", {
        stroke: param.stroke,
      });
    }

    return queryBuilder.getRawMany();
  }

  async findRecentlyDateByUserId(userId: number): Promise<string> {
    return createQueryBuilder()
      .select(["day_records.date"])
      .from(DayRecord, "day_records")
      .andWhere("day_records.userId = :userId", { userId })
      .orderBy("day_records.date", "DESC")
      .getRawOne();
  }
}
