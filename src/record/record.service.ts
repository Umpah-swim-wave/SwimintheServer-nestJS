import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordDailyFilterDto } from "./dto/recordFilter.request.dto";
import { RecordDailyResponseDto } from "./dto/recordList.response.dto";
import { RecordRepository } from "./record.repository";

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(RecordRepository)
    private readonly RecordRepository: RecordRepository
  ) {}

  async findRecordDailyListByDateAnd(
    recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<RecordDailyResponseDto> {
    return null;
  }
}
