import { createQueryBuilder, EntityRepository, Repository } from "typeorm";
import { DayRecord } from "./dayRecord.entity";
import { RecordDailyFilterDto } from "./dto/dayRecord.request.dto";

@EntityRepository(DayRecord)
export class DayRecordRepository extends Repository<DayRecord> {
  async findLabsByUserIdAndSearchFilter(
    userId: number,
    date: string,
    stroke?: string
  ) {
    const queryBuilder = createQueryBuilder()
      .select(["id", "stroke", "distance", "time"])
      .addSelect("distance/time", "speed")
      .from(DayRecord, "day_records")
      .where("user_id = :userId", { userId: userId })
      .andWhere("active = 'Y'");

    queryBuilder.andWhere("date = :date", { date });

    if (stroke != undefined) {
      queryBuilder.andWhere("stroke = :stroke", {
        stroke: stroke,
      });
    }

    return queryBuilder.getRawMany();
  }

  async findRecentlyDateByUserId(userId: number): Promise<string> {
    return createQueryBuilder()
      .select(["date"])
      .from(DayRecord, "day_records")
      .where("day_records.user_id = :userId", { userId })
      .orderBy("date", "DESC")
      .getRawOne();
  }
}
