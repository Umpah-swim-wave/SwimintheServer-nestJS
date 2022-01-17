import { ApiProperty } from "@nestjs/swagger";
import { RecordMonthlyLabsDto } from "./monthRecord.labs.dto";

export class RecordMonthlyListResponseDto {
  @ApiProperty({ description: "수영한 날짜 YYYY-MM 형태" })
  date: string;
  @ApiProperty({ description: "총 거리" })
  totalDistance: number;
  @ApiProperty({ description: "총 시간" })
  totalTime: number;
  @ApiProperty({ description: "총 칼로리" })
  totalCalorie: number;
  @ApiProperty({ description: "총 bpm" })
  totalBpm: number;
  @ApiProperty({ description: "그 달에 해당하는 주의 수영 기록" })
  recordLabsList: RecordMonthlyLabsDto[];

  constructor(date: string) {
    this.date = date;
    this.totalDistance = 0;
    this.totalTime = 0;
    this.totalBpm = 0;
    this.recordLabsList = [];
  }
}
