import { ApiProperty } from "@nestjs/swagger";

export class CommonRoutineListDto {
  @ApiProperty({ description: "루틴 제목" })
  readonly title: string;
  @ApiProperty({ description: "난이도" })
  readonly level: string;
  @ApiProperty({ description: "루틴 거리" })
  readonly distance: number;
  @ApiProperty({ description: "루틴 시간" })
  readonly time: number;
  @ApiProperty({ description: "루틴 설명" })
  readonly description: string;
}
