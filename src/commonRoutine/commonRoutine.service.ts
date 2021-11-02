import { Injectable, Inject } from "@nestjs/common";
import { CommonRoutine } from "./commonRoutine.entity"
import { Repository } from "typeorm"
import { CommonRoutineRepository } from "./commonRoutine.repository"
import { CommonRoutineFilterDto } from "./dto/commonRoutine.request.dto"
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";

@Injectable()
export class CommonRoutineService {
  constructor(
    @Inject('COMMON_ROUTINE_REPOSITORY')
    private readonly CommonRoutineRepository: Repository<CommonRoutine>
  ) {}

  async findRoutine(
    commonRoutineFilterDto: CommonRoutineFilterDto
  ): Promise<CommonRoutineFilterDto> {
    await this.CommonRoutineRepository.find();
  }
  return utilResponse
  // Promise<CommonRoutine[]> {
  //   return await this.CommonRoutineRepository.find();
  // }
}
// db에 있는거 통채로 불러오기
