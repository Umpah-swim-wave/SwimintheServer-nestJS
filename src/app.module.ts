import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";

import "dotenv/config";
import { RecordModule } from "./record/record.module";
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, RecordModule],
})
export class AppModule {}
