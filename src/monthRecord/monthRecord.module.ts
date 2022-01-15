import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MonthRecordController } from "./monthRecord.controller";
import { MonthRecordService } from "./monthRecord.service";
import { MonthRecordRepository } from "./monthRecord.repository";
import { AuthModule } from "../auth/auth.module";

import "dotenv/config";
import { WeekRecordRepository } from "src/weekRecord/weekRecord.repository";
@Module({
  imports: [
    TypeOrmModule.forFeature([MonthRecordRepository, WeekRecordRepository]),
    AuthModule,
  ],
  controllers: [MonthRecordController],
  providers: [MonthRecordService],
})
export class MonthRecordModule {}
