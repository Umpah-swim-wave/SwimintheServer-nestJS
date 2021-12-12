import {
  createQueryBuilder,
  EntityRepository,
  getRepository,
  Repository,
} from "typeorm";
import { DayRecord } from "./dayRecord.entity";
import { RecentRecordDateDto } from "./dto/dayRecentRecord.response.dto";

@EntityRepository(DayRecord)
export class DayRecordRepository extends Repository<DayRecord> {
  async findLabsByUserIdAndSearchFilter(
    userId: number,
    date: string,
    stroke?: string
  ) {
    const queryBuilder = await createQueryBuilder()
      .select("id", "recordId")
      .addSelect(["stroke", "distance", "time"])
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

    return await queryBuilder.getRawMany();
  }

  async findRecentlyDateByUserId(userId: number): Promise<string> {
    const result = await getRepository(DayRecord).findOne({
      where: { userId },
      select: ["date"],
    });
    return result.date;
  }

  async findRecentRecordDateListByUserId(
    userId: number
  ): Promise<RecentRecordDateDto[]> {
    const result = createQueryBuilder()
      .select(["date"])
      .distinct(true)
      .from(DayRecord, "day_records")
      .where("user_id = :userId", { userId: userId })
      .andWhere("active = 'Y'")
      .orderBy("date", "DESC")
      .getRawMany();

    return result;
  }
}
