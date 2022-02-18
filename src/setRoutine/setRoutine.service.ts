import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SetRoutineRepository } from "./setRoutine.repository";
import { SetRoutineListResponseDto } from "./dto/setRoutine.response.dto";
import { SetRoutineListDto } from "./dto/setRoutine.request.dto";
import utilResponse from "src/common/response/util.response";
import messageResponse from "src/common/response/message.response";

@Injectable()
export class SetRoutineService {
  constructor(
    @InjectRepository(SetRoutineRepository)
    private readonly SetRoutineRepository: SetRoutineRepository
  ) {}

  async getAllSetRoutine(
    setRoutineListDto: SetRoutineListDto
  ): Promise<SetRoutineListResponseDto> {
    const result = await this.SetRoutineRepository.find();
    return utilResponse.success(messageResponse.GET_COMMON_ROUTINE_SET_SUCCESS, result);
  }
}
