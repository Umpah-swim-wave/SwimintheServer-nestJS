import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// Dto import
import { CommonRoutineRepository } from "./commonRoutine.repository"

@Injectable()
export class CommonRoutineService {
  constructor(
    @InjectRepository(CommonRoutineRepository)
    private readonly CommonRoutineRepository: CommonRoutineRepository
  ) {}
}
// db에 있는거 통채로 불러오기
