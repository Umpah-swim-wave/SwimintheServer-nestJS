import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  RecordDailyDto,
  RecordDailyFilterDto,
} from "./dto/recordFilter.request.dto";
import {
  RecordDailyListResponseDto,
  RecordDailyOverViewResponseDto,
} from "./dto/record.response.dto";
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
    let result: RecordDailyOverViewResponseDto;
    return result;
  }

  async findDailyRecordList(
    recordDailyDto: RecordDailyDto
  ): Promise<RecordDailyListResponseDto> {
    let result: RecordDailyListResponseDto;
    return result;
  }
}
