import { ApiProperty } from "@nestjs/swagger";
import { RecordWorkoutDto } from "./record.workout.dto";

export class RecordRequestDto {
  @ApiProperty({ description: "유저 ID" })
  readonly userId: number;

  @ApiProperty({ description: "workout 정보" })
  readonly workoutList: RecordWorkoutDto[];
}
