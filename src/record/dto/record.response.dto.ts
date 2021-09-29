import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";

export class RecordDailyOverViewResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  data?: RecordDailyOverviewDataDto;
}

export class RecordDailyOverviewDataDto {
  @ApiProperty({ description: "리턴 값" })
  total_distance: number;
  total_time: number;
  total_alorie: number;
  total_bpm: number;
  freestyle_total_distance: number;
  freestyle_total_speed: number;
  breast_total_distance: number;
  breast_total_speed: number;
  back_total_distance: number;
  back_total_speed: number;
  butterfly_total_distance: number;
  butterfly_total_speed: number;
  medley_total_distance: number;
  medley_total_speed: number;
}
