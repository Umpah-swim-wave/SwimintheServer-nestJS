import { ApiProperty } from "@nestjs/swagger";

export class RecentRecordDateDto {
  @ApiProperty({ description: "주의 시작 날짜" })
  readonly startDate: string;

  @ApiProperty({ description: "주의 마지막 날짜" })
  readonly endDate: string;

  @ApiProperty({ description: "년월 날짜(YYYY-MM)" })
  readonly yearMonthDate: string;
  @ApiProperty({ description: "주" })
  readonly week: number;

  constructor(startDate, endDate, yearMonthDate, week) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.yearMonthDate = yearMonthDate;
    this.week = week;
  }
}
