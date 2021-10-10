import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";

import "dotenv/config";
import { DayRecordModule } from "./dayRecord/dayRecord.module";
import { RecordModule } from "./record/Record.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    DayRecordModule,
    RecordModule,
  ],
})
export class AppModule {}
