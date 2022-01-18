import { ApiProperty } from "@nestjs/swagger";

export class RecordWeeklyFilterDto {
  @ApiProperty({
    description: "날짜(YYYY-MM), 빈값이면 가장 최근 날짜로",
  })
  readonly date?: string;

  @ApiProperty({
    description: "주, 빈값이면 가장 최근 날짜로",
  })
  readonly week?: number;

  @ApiProperty({
    description:
      "영법 필터 (자유형(freestyle) / 평영(breast) / 배영(back) / 접영(butterfly)), 빈값이면 전체",
  })
  readonly stroke?: string;
}
