import { ApiProperty } from '@nestjs/swagger';
import mathUtils from '../../common/util/mathUtils';

export class RecordMonthlyLabsDto {
  @ApiProperty({ description: '랩스 주차' })
  readonly week: number;
  @ApiProperty({ description: '주차별 거리' })
  readonly distance: number;
  @ApiProperty({ description: '주차별 시간' })
  readonly time: number;
  @ApiProperty({ description: '주차별 속도' })
  readonly speed: string;
  @ApiProperty({ description: '주차별 칼로리' })
  readonly calorie: number;

  constructor(week: number, distance: number, time: number, calorie: number) {
    this.week = week;
    this.distance = distance;
    this.time = time;
    this.speed = mathUtils.getSpeed(distance, time);
    this.calorie = calorie;
  }
}
