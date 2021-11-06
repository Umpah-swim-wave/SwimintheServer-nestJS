import { Injectable, Inject } from "@nestjs/common";
import { CommonRoutine } from "./commonRoutine.entity"
import { Repository } from "typeorm"
import { CommonRoutineListResponseDto } from "./dto/commonRoutine.response.dto"
import { CommonRoutineListDto } from "./dto/commonRoutine.data.dto";

@Injectable()
export class CommonRoutineService {
  constructor(
    @Inject('COMMON_ROUTINE_REPOSITORY')
    private readonly CommonRoutineRepository: Repository<CommonRoutine>
  ) {}

  async getAllRoutine(
    commonRoutineListDto: CommonRoutineListDto
  ): Promise<CommonRoutineListResponseDto> {
    let result: CommonRoutineListResponseDto;
    return result;
    // const routineId = commonRoutineListDto.routineId;
    // console.log(routineId);
  }
}
