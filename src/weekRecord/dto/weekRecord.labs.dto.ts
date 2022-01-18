import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek } from "../../common/enum/Enum";

export class RecordWeeklyLabsDto {
  @ApiProperty({ description: "랩스 id" })
  readonly recordId: DayOfWeek;
  @ApiProperty({ description: "랩스 영법" })
  readonly stroke: string;
  @ApiProperty({ description: "랩스 거리" })
  readonly distance: number;
  @ApiProperty({ description: "랩스 속도" })
  readonly speed: number;
  @ApiProperty({ description: "랩스 시간" })
  readonly time: number;
}
