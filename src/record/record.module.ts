import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecordController } from "./record.controller";
import { RecordService } from "./record.service";
import { RecordRepository } from "./record.repository";

import "dotenv/config";
@Module({
  imports: [TypeOrmModule.forFeature([RecordRepository])],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
