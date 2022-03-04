import { ApiProperty } from '@nestjs/swagger';
import { Stroke } from 'src/common/enum/Enum';

export class UpdateRecordLabsDto {
  @ApiProperty({ description: '변경할 랩스 id' })
  readonly recordId: number;
  @ApiProperty({
    description:
      '변경할 랩스 영법 (자유형(freestyle) / 평영(breast) / 배영(back) / 접영(butterfly)), 빈값이면 전체',
  })
  readonly stroke: Stroke;
  @ApiProperty({ description: '변경할 랩스 거리' })
  readonly distance: number;
  @ApiProperty({ description: '변경할 랩스 시간' })
  readonly time: number;
}
