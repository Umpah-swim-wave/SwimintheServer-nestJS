import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";

export class RecordDailyOverViewResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  data?: RecordDailyOverviewDataDto;
}

export class RecordDailyOverviewDataDto {
  @ApiProperty({ description: "리턴 값" })
  readonly total_distance: number;
  readonly total_time: number;
  readonly total_alorie: number;
  readonly total_bpm: number;
  readonly freestyle_total_distance: number;
  readonly freestyle_total_speed: number;
  readonly breast_total_distance: number;
  readonly breast_total_speed: number;
  readonly back_total_distance: number;
  readonly back_total_speed: number;
  readonly butterfly_total_distance: number;
  readonly butterfly_total_speed: number;
  readonly medley_total_distance: number;
  readonly medley_total_speed: number;
}
