import { Entity, EntityRepository, Repository } from "typeorm";
import { SetRoutine } from "./setRoutine.entity";
import { SetRoutineListDto } from "./dto/setRoutine.request.dto";
import { SetRoutineListResponseDto } from "./dto/setRoutine.response.dto";

@EntityRepository(SetRoutine)
export class SetRoutineRepository extends Repository<SetRoutine> {
}
