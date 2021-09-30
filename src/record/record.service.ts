import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordDailyFilterDto } from "./dto/recordFilter.request.dto";
import { RecordDailyOverViewResponseDto } from "./dto/record.response.dto";
import { RecordRepository } from "./record.repository";

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(RecordRepository)
    private readonly RecordRepository: RecordRepository
  ) {}

  async findDailyRecordOverviewByDateAndStroke(
    recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<RecordDailyOverViewResponseDto> {
    return null;
  }

  async findDailyRecordList(
    recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<RecordDailyOverViewResponseDto> {
    return null;
  }
}
