import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonRoutineController } from './commonRoutine.controller';
import { CommonRoutineService } from './commonRoutine.service';
import { CommonRoutineRepository } from './commonRoutine.repository';

import 'dotenv/config';
@Module({
  imports: [TypeOrmModule.forFeature([CommonRoutineRepository])],
  controllers: [CommonRoutineController],
  providers: [CommonRoutineService],
})
export class CommonRoutineModule {}
