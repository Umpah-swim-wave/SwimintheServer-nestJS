import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommonRoutineRepository } from "./commonRoutine.repository";
import { CommonRoutineListResponseDto } from "./dto/commonRoutine.response.dto"
import { CommonRoutineListDto } from "./dto/commonRoutine.data.dto";
import { CommonRoutineFilterDto } from "./dto/commonRoutine.request.dto";
import utilResponse from "src/common/response/util.response";
import messageResponse from "../common/response/message.response";

@Injectable()
export class CommonRoutineService {
  constructor(
    @InjectRepository(CommonRoutineRepository)
    private readonly CommonRoutineRepository: CommonRoutineRepository
  ) {}

  async getAllRoutine(
    commonRoutineListDto: CommonRoutineListDto
  ): Promise<CommonRoutineListResponseDto> {
    const result = await this.CommonRoutineRepository.find({
      select:['id', 'title', 'level', 'distanceSum', 'timeSum', 'description']
    });
    return utilResponse.success(messageResponse.GET_COMMON_ROUTINE_SUCCESS, result);
  }

  async getRoutineDetail(
    commonRoutineDetailDto: CommonRoutineListDto
  ): Promise<CommonRoutineListResponseDto> {
    const result = await this.CommonRoutineRepository.find();
    return utilResponse.success(messageResponse.GET_COMMON_ROUTINE_DETAIL_SUCCESS, result);
  }
}
