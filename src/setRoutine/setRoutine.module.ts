import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SetRoutineController } from "./setRoutine.controller";
import { SetRoutineService } from "./setRoutine.service";
import { SetRoutineRepository } from "./setRoutine.repository";

import "dotenv/config";
@Module({
  imports: [TypeOrmModule.forFeature([SetRoutineRepository])],
  controllers: [SetRoutineController],
  providers: [SetRoutineService],
})
export class SetRoutineModule {}
