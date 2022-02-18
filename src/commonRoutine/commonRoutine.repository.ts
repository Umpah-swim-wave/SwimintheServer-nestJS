import { EntityRepository, Repository } from "typeorm";
import { CommonRoutine } from "./commonRoutine.entity";

@EntityRepository(CommonRoutine)
export class CommonRoutineRepository extends Repository<CommonRoutine> {
  // async findAll(commonRoutineListDto: CommonRoutineListDto): Promise<CommonRoutine[]> {
  //   const { id, title, level, distanceSum, timeSum, description } = commonRoutineListDto;
  //   const result = await this.find({ id, title, level, distanceSum, timeSum, description });
  //   return result;
  // }
}
