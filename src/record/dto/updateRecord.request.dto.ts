import { ApiProperty } from '@nestjs/swagger';
import { UpdateRecordLabsDto } from './updateRecord.labs.dto';

export class UpdateRecordDto {
  @ApiProperty({ description: '변경할 기록의 날짜' })
  readonly date: string;

  @ApiProperty({ description: '기록을 변경할 리스트' })
  readonly labs: UpdateRecordLabsDto[];
}
