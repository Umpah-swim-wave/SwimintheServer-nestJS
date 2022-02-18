import { ApiProperty } from '@nestjs/swagger';
import { Stroke } from '../../common/enum/Enum';

export class RecordDailyLabsDto {
  @ApiProperty({ description: '랩스 id' })
  readonly recordId: number;
  @ApiProperty({ description: '랩스 영법' })
  readonly stroke: Stroke;
  @ApiProperty({ description: '랩스 거리' })
  readonly distance: number;
  @ApiProperty({ description: '랩스 속도' })
  readonly speed: number;
  @ApiProperty({ description: '랩스 시간' })
  readonly time: number;
}
