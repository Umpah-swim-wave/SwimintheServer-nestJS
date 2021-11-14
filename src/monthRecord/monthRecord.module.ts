import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MonthRecordController } from "./monthRecord.controller";
import { MonthRecordService } from "./monthRecord.service";
import { MonthRecordRepository } from "./monthRecord.repository";

import "dotenv/config";
@Module({
  imports: [TypeOrmModule.forFeature([MonthRecordRepository])],
  controllers: [MonthRecordController],
  providers: [MonthRecordService],
})
export class MonthRecordModule {}
