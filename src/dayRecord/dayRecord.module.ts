import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DayRecordController } from "./dayRecord.controller";
import { DayRecordService } from "./dayRecord.service";
import { DayRecordRepository } from "./dayRecord.repository";
import { WeekRecordRepository } from "../weekRecord/weekRecord.repository";
import "dotenv/config";
import { CalenderRepository } from "../calender/calender.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DayRecordRepository,
      WeekRecordRepository,
      CalenderRepository,
    ]),
  ],
  controllers: [DayRecordController],
  providers: [DayRecordService],
})
export class DayRecordModule {}
