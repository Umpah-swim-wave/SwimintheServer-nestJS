import { ApiProperty } from "@nestjs/swagger";

export class SetRoutineListDto {
  @ApiProperty({ description: "세트 id" })
  readonly id: number;
  
  @ApiProperty({ description: "세트명" })
  readonly setName: string;

  @ApiProperty({ description: "영법명" })
  readonly stroke: string;

  @ApiProperty({ description: "영법 거리" })
  readonly distance: number;
  
  @ApiProperty({ description: "영법 시간" })
  readonly time: number;
}
