import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WeekRecordRepository } from "./weekRecord.repository";

@Injectable()
export class WeekRecordService {
  constructor(
    @InjectRepository(WeekRecordRepository)
    private readonly WeekRecordRepository: WeekRecordRepository
  ) {}
}
