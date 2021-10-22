import { ApiProperty } from "@nestjs/swagger";
import { RecordLabsDto } from "./record.labs.dto";

export class RecordWorkoutDto {
  @ApiProperty({ description: "workout 시작날짜" })
  readonly startWorkoutDate: string;
  @ApiProperty({ description: "workout bpm" })
  readonly totalBeatPerMinute: number;
  @ApiProperty({ description: "workout 칼로리" })
  readonly totalEnergyBurned: number;
  @ApiProperty({ description: "labs 당 거리" })
  readonly distancePerLabs: number;
  @ApiProperty({ description: "workout stroke 수" })
  readonly totalSwimmingStrokeCount: number;
  @ApiProperty({ description: "lab 정보" })
  readonly recordLabsList: RecordLabsDto[];
}
