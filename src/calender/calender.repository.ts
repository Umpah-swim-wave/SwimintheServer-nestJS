import { EntityRepository, getRepository, Repository } from "typeorm";
import { Calender } from "./calender.entity";

@EntityRepository(Calender)
export class CalenderRepository extends Repository<Calender> {
  async findByDate(date: string): Promise<number> {
    const result = await getRepository(Calender).findOne({
      where: { date },
      select: ["week"],
    });
    return result.week;
  }
}
