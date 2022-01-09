import { ApiProperty } from "@nestjs/swagger";
import { Level, SwimSet } from "src/common/enum/Enum";

export class CommonRoutineListDto {
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

  @ApiProperty({ description: "수영 세트 구분" })
  readonly swimSet: SwimSet;

  @ApiProperty({ description: "수영한 거리" })
  readonly distance: number;

  @ApiProperty({ description: "수영한 시간" })
  readonly time: number;
}
