import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonRoutineController } from './commonRoutine.controller';
import { CommonRoutineService } from './commonRoutine.service';
import { CommonRoutineRepository } from './commonRoutine.repository';
import { AuthRepository } from 'src/auth/auth.repository';

import 'dotenv/config';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([CommonRoutineRepository, 
    AuthRepository]),
    AuthModule,
  ],
  controllers: [CommonRoutineController],
  providers: [CommonRoutineService],
})
export class CommonRoutineModule {}
