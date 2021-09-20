import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordRepository } from "./record.repository";

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(RecordRepository)
    private readonly RecordRepository: RecordRepository
  ) {}
}
