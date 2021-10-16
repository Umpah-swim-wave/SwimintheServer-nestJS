import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  RecordDailyDto,
  RecordDailyFilterDto,
} from "./dto/dayRecordFilter.request.dto";
import {
  RecordDailyListResponseDto,
  RecordDailyOverViewResponseDto,
} from "./dto/dayRecord.response.dto";
import { DayRecordRepository } from "./dayRecord.repository";

@Injectable()
export class DayRecordService {
  constructor(
    @InjectRepository(DayRecordRepository)
    private readonly DayRecordRepository: DayRecordRepository
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
