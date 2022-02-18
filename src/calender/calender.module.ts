import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalenderRepository } from './calender.repository';

import 'dotenv/config';
@Module({
  imports: [TypeOrmModule.forFeature([CalenderRepository])],
})
export class CalenderModule {}
