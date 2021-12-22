import { ApiProperty } from "@nestjs/swagger";

export class RecentRecordDateDto {
  @ApiProperty({ description: "주의 시작 날짜" })
  readonly startDate: string;

  @ApiProperty({ description: "주의 마지막 날짜" })
  readonly endDate: string;

  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
