import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek, Stroke } from "../../common/enum/Enum";

export class RecordDataDto {
  @ApiProperty({ description: "날짜" })
  readonly date: string;
  @ApiProperty({ description: "거리" })
  readonly distance: number;
  @ApiProperty({ description: "속력" })
  readonly speed: number;
  @ApiProperty({ description: "걸린 시간" })
  readonly time: number;
  @ApiProperty({ description: "영법" })
  readonly stroke: Stroke;
  @ApiProperty({ description: "칼로리" })
  readonly calorie: number;
  @ApiProperty({ description: "bpm" })
  readonly beatPerMinute: number;
}
