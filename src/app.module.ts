import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import 'dotenv/config';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, AuthModule],
})
export class AppModule {}
