import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";

import "dotenv/config";
import { DayRecordModule } from "./dayRecord/dayRecord.module";
import { WeekRecordModule } from "./weekRecord/weekRecord.module";
import { RecordModule } from "./record/record.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    DayRecordModule,
    WeekRecordModule,
    RecordModule,
  ],
})
export class AppModule {}
