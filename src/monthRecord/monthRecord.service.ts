import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordMonthlyFilterDto } from "./dto/monthRecord.request.dto";
import { RecordMonthlyListResponseDto } from "./dto/monthRecord.response.dto";
import { MonthRecordRepository } from "./monthRecord.repository";

@Injectable()
export class MonthRecordService {
  constructor(
    @InjectRepository(MonthRecordRepository)
    private readonly MonthRecordRepository: MonthRecordRepository
  ) {}
  async findMonthlyRecordList(
    recordMonthlyFilterDto: RecordMonthlyFilterDto
  ): Promise<RecordMonthlyListResponseDto> {
    let result: RecordMonthlyListResponseDto;
    return result;
  }
}
