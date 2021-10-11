import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WeekRecordController } from "./weekRecord.controller";
import { WeekRecordService } from "./weekRecord.service";
import { WeekRecordRepository } from "./weekRecord.repository";

import "dotenv/config";
@Module({
  imports: [TypeOrmModule.forFeature([WeekRecordRepository])],
  controllers: [WeekRecordController],
  providers: [WeekRecordService],
})
export class DayRecordModule {}
