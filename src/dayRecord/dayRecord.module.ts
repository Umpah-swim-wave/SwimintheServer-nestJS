import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DayRecordController } from "./dayRecord.controller";
import { DayRecordService } from "./dayRecord.service";
import { DayRecordRepository } from "./dayRecord.repository";

import "dotenv/config";
@Module({
  imports: [TypeOrmModule.forFeature([DayRecordRepository])],
  controllers: [DayRecordController],
  providers: [DayRecordService],
})
export class DayRecordModule {}
