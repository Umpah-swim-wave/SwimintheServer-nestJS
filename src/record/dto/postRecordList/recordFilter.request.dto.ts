import { ApiProperty } from "@nestjs/swagger";

export class RecordFilterDto {
  @ApiProperty({
    description: "기간 필터 (일간(day)/주간(week)/월간(month)), null 가능",
  })
  periodFilter: string | null;

  @ApiProperty({
    description:
      "영법 필터 (자유형(freestyle) / 평영(breast) / 배영(back) / 접영(butterfly)), null 가능",
  })
  strokeFilter: string | null;
}
