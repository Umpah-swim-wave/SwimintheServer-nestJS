import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DayRecordController } from "./dayRecord.controller";
import { DayRecordService } from "./dayRecord.service";
import { DayRecordRepository } from "./dayRecord.repository";
import { WeekRecordRepository } from "../weekRecord/weekRecord.repository";
import "dotenv/config";
import { CalenderRepository } from "../calender/calender.repository";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DayRecordRepository,
      WeekRecordRepository,
      CalenderRepository,
    ]),
    AuthModule,
  ],
  controllers: [DayRecordController],
  providers: [DayRecordService],
})
export class DayRecordModule {}
