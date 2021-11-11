import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MonthRecordRepository } from "./monthRecord.repository";

@Injectable()
export class MonthRecordService {
  constructor(
    @InjectRepository(MonthRecordRepository)
    private readonly MonthRecordRepository: MonthRecordRepository
  ) {}
}
