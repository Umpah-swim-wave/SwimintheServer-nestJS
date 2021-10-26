import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordDailyFilterDto } from "./dto/dayRecord.request.dto";
import { RecordDailyListResponseDto } from "./dto/dayRecord.response.dto";
import { DayRecordRepository } from "./dayRecord.repository";

@Injectable()
export class DayRecordService {
  constructor(
    @InjectRepository(DayRecordRepository)
    private readonly DayRecordRepository: DayRecordRepository
  ) {}

  async findDailyRecordList(
    recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<RecordDailyListResponseDto> {
    let result: RecordDailyListResponseDto;
    return result;
  }
}
