import { ApiProperty } from "@nestjs/swagger";

export class RecordMonthlyLabsDto {
  @ApiProperty({ description: "랩스 id" })
  readonly recordId: number;
  @ApiProperty({ description: "랩스 영법" })
  readonly stroke: string;
  @ApiProperty({ description: "랩스 거리" })
  readonly distance: number;
  @ApiProperty({ description: "랩스 속도" })
  readonly speed: number;
  @ApiProperty({ description: "랩스 시간" })
  readonly time: number;
}
