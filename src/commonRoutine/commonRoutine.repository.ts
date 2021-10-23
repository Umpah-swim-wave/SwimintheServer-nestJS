import { EntityRepository, Repository } from "typeorm";
import { CommonRoutine } from "./commonRoutine.entity";

@EntityRepository(CommonRoutine)
export class CommonRoutineRepository extends Repository<CommonRoutine> {}
