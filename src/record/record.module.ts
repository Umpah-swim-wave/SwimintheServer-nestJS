import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecordController } from "./record.controller";
import { RecordService } from "./record.service";
import { DayRecordRepository } from "../dayRecord/dayRecord.repository";

import "dotenv/config";
import { WeekRecordRepository } from "../weekRecord/weekRecord.repository";
import { CalenderRepository } from "../calender/calender.repository";
import { MonthRecordRepository } from "../monthRecord/monthRecord.repository";
import { AuthModule } from "src/auth/auth.module";
@Module({
  imports: [
    TypeOrmModule.forFeature([
      DayRecordRepository,
      MonthRecordRepository,
      WeekRecordRepository,
      CalenderRepository,
    ]),
    AuthModule,
  ],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
