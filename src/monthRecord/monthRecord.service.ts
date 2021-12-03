import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordMonthlyFilterDto } from "./dto/monthRecord.request.dto";
import { RecordMonthlyListResponseDto } from "./dto/monthRecord.response.dto";
import { MonthRecord } from "./monthRecord.entity";
import { MonthRecordRepository } from "./monthRecord.repository";

@Injectable()
export class MonthRecordService {
  constructor(
    @InjectRepository(MonthRecordRepository)
    private readonly MonthRecordRepository: MonthRecordRepository
  ) {}
  async findMonthlyRecordList(
    dto: RecordMonthlyFilterDto
  ): Promise<RecordMonthlyListResponseDto> {
    const userId = dto.userId;
    const stroke = dto.stroke;
    const date = !dto.date
      ? await this.MonthRecordRepository.findRecentlyDateByUserId(userId)
      : dto.date;
    const labs: Array<MonthRecord> =
      await this.MonthRecordRepository.findByUserIdAndDate(userId, date);

    // stroke를 통해 어떠한
    let result: RecordMonthlyListResponseDto;
    return result;
  }
}
