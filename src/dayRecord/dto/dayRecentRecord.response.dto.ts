import { ApiProperty } from '@nestjs/swagger';

export class RecentRecordDateDto {
  @ApiProperty({ description: '수영한 날짜' })
  readonly date: string;
}
