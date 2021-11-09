import { ApiProperty } from "@nestjs/swagger";
import { Level } from "src/common/enum/Enum";

export class CommonRoutineFilterDto {
  @ApiProperty({ description: "루틴 id" })
  readonly id: number;

  @ApiProperty({ description: "루틴 제목" })
  readonly title: string;

  @ApiProperty({ description: "난이도" })
  readonly level: Level;

  @ApiProperty({ description: "루틴 총 거리" })
  readonly distanceSum: number;

  @ApiProperty({ description: "루틴 총 시간" })
  readonly timeSum: number;
  
  @ApiProperty({ description: "루틴 설명" })
  readonly description: string;
}
