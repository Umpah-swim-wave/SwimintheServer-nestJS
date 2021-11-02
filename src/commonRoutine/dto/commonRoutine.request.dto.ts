import { ApiProperty } from "@nestjs/swagger";
import { CommonRoutineDetailDataDto } from "./commonRoutine.sets.dto";

export class CommonRoutineFilterDto {
  @ApiProperty({ description: "루틴 id" })
  readonly routineId: number;

  @ApiProperty({ description: "set 정보" })
  readonly setList: CommonRoutineDetailDataDto[];
}
