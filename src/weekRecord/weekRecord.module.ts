import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WeekRecordController } from "./weekRecord.controller";
import { WeekRecordService } from "./weekRecord.service";
import { WeekRecordRepository } from "./weekRecord.repository";
import { MonthRecordRepository } from "../monthRecord/monthRecord.repository";

import "dotenv/config";
import { CalenderRepository } from "../calender/calender.repository";
@Module({
  imports: [
    TypeOrmModule.forFeature([
      WeekRecordRepository,
      MonthRecordRepository,
      CalenderRepository,
    ]),
  ],
  controllers: [WeekRecordController],
  providers: [WeekRecordService],
})
export class WeekRecordModule {}
