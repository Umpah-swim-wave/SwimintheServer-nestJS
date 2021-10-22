import { ApiProperty } from "@nestjs/swagger";
import { RecordDailyLabsDto } from "./dayRecord.labs.dto";

export class RecordDailyDataDto {
  @ApiProperty({ description: "일간 거리" })
  readonly total_distance: number;
  @ApiProperty({ description: "일간 시간" })
  readonly total_time: number;
  @ApiProperty({ description: "일간 칼로리" })
  readonly total_calorie: number;
  @ApiProperty({ description: "일간 bpm" })
  readonly total_bpm: number;
  @ApiProperty({ description: "자유형 일간 거리" })
  readonly freestyle_total_distance: number;
  @ApiProperty({ description: "자유형 일간 속도" })
  readonly freestyle_total_speed: number;
  @ApiProperty({ description: "평영 일간 거리" })
  readonly breast_total_distance: number;
  @ApiProperty({ description: "평영 일간 속도" })
  readonly breast_total_speed: number;
  @ApiProperty({ description: "배영 일간 거리" })
  readonly back_total_distance: number;
  @ApiProperty({ description: "배영 일간 속도" })
  readonly back_total_speed: number;
  @ApiProperty({ description: "접영 일간 거리" })
  readonly butterfly_total_distance: number;
  @ApiProperty({ description: "접영 일간 속도" })
  readonly butterfly_total_speed: number;
  @ApiProperty({ description: "혼영 일간 거리" })
  readonly im_total_distance: number;
  @ApiProperty({ description: "혼영 일간 속도" })
  readonly im_total_speed: number;
  @ApiProperty({ description: "랩스 기록" })
  readonly recordLabsList: RecordDailyLabsDto[];
}
