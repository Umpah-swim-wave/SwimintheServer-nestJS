import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordFilterDto } from "./dto/postRecordList/recordFilter.request.dto";
import { RecordRepository } from "./record.repository";

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(RecordRepository)
    private readonly RecordRepository: RecordRepository
  ) {}

  async postRecordList(recordFilterDto: RecordFilterDto): Promise<void> {}
}
