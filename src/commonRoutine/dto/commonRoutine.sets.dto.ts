import { ApiProperty } from "@nestjs/swagger";

export class CommonRoutineDetailDataDto {
  @ApiProperty({ description: "세트명" })
  readonly swimSet: string;

  @ApiProperty({ description: "세트 영법" })
  readonly stroke: string;

  @ApiProperty({ description: "세트 거리" })
  readonly distance: number;
  
  @ApiProperty({ description: "세트 시간" })
  readonly time: number;
}
