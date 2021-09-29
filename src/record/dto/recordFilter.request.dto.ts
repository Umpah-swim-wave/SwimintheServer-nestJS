import { ApiProperty } from "@nestjs/swagger";

export class RecordDailyFilterDto {
  @ApiProperty({
    description: "날짜(YYYY-MM-DD), 빈값이면 가장 최근 날짜로",
  })
  date: string;

  @ApiProperty({
    description:
      "영법 필터 (자유형(freestyle) / 평영(breast) / 배영(back) / 접영(butterfly)), 빈값이면 전체",
  })
  stroke: string;
}
