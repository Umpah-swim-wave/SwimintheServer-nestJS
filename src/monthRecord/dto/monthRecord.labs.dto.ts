import { ApiProperty } from "@nestjs/swagger";

export class RecordMonthlyLabsDto {
  @ApiProperty({ description: "랩스 id" })
  readonly recordId: number;
  @ApiProperty({ description: "랩스 주차" })
  readonly week: number;
  @ApiProperty({ description: "주차별 거리" })
  readonly distance: number;
  @ApiProperty({ description: "주차별 시간" })
  readonly time: number;
  @ApiProperty({ description: "주차별 속도" })
  readonly speed: number;
  @ApiProperty({ description: "주차별 칼로리" })
  readonly calroie: number;
}
