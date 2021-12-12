import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek } from "../enum/Enum";

export class UniqueColumsDao {
  @ApiProperty({ description: "유저 ID" })
  readonly userId: number;
  @ApiProperty({ description: "수영한 년월 (YYYY-MM)" })
  readonly yearMonthDate: string;
  @ApiProperty({ description: "수영한 주" })
  readonly week: number;
  @ApiProperty({ description: "수영한 요일" })
  readonly dayOfWeek?: DayOfWeek;
}
