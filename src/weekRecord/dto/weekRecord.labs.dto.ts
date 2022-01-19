import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek, Stroke } from "../../common/enum/Enum";

export class RecordWeeklyLabsDto {
  @ApiProperty({ description: "요일" })
  dayOfWeek: DayOfWeek;
  @ApiProperty({ description: "랩스 영법" })
  stroke: Stroke;
  @ApiProperty({ description: "랩스 거리" })
  distance: number;
  @ApiProperty({ description: "랩스 속도" })
  speed: string;
  @ApiProperty({ description: "랩스 시간" })
  time: number;
}
