import { ApiProperty } from '@nestjs/swagger';

export class RecordLabsDto {
  @ApiProperty({ description: 'labs 시작날짜' })
  readonly date: string;
  @ApiProperty({ description: 'labs 당 걸린 시간' })
  readonly time: number;
  @ApiProperty({ description: '영법' })
  readonly strokeType: number;
}
