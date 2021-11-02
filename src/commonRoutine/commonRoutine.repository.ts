import { EntityRepository, Repository } from "typeorm";
import { CommonRoutine } from "./commonRoutine.entity";
import { CommonRoutineListResponseDto } from "./dto/commonRoutine.response.dto";

@EntityRepository(CommonRoutine)
export class CommonRoutineRepository extends Repository<CommonRoutine> {
  // async commonRoutine(commonRoutineListResponseDto: CommonRoutineListResponseDto):
}
