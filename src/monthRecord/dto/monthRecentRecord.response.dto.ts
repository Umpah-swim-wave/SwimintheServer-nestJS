import { ApiProperty } from "@nestjs/swagger";

export class RecentRecordDateDto {
  @ApiProperty({ description: "수영한 날짜(년)" })
  readonly year: string;

  @ApiProperty({ description: "수영한 날짜(월)" })
  readonly month: number;

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }
}
