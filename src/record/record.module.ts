import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecordController } from "./record.controller";
import { RecordService } from "./record.service";
import { DayRecordRepository } from "../dayRecord/dayRecord.repository";

import "dotenv/config";
import { WeekRecordRepository } from "src/weekRecord/weekRecord.repository";
@Module({
  imports: [
    TypeOrmModule.forFeature([DayRecordRepository, WeekRecordRepository]),
  ],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
