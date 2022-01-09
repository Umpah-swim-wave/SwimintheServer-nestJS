import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordWeeklyFilterDto } from "./dto/weekRecord.request.dto";
import { RecordWeeklyListDto } from "./dto/weekRecord.response.dto";
import { WeekRecordRepository } from "./weekRecord.repository";

@Injectable()
export class WeekRecordService {
  constructor(
    @InjectRepository(WeekRecordRepository)
    private readonly WeekRecordRepository: WeekRecordRepository
  ) {}
  async findWeeklyRecordList(
    recordWeeklyFilterDto: RecordWeeklyFilterDto
  ): Promise<RecordWeeklyListDto> {
    let result: RecordWeeklyListDto;
    return result;
  }
}
