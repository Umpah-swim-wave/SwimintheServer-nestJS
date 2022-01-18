import { ApiProperty } from "@nestjs/swagger";
import { RecordWeeklyLabsDto } from "./weekRecord.labs.dto";

export class RecordWeeklyListDto {
  @ApiProperty({ description: "수영한 날짜 YYYY/MM/DD 형태" })
  readonly date: string;
  @ApiProperty({ description: "일간 거리" })
  readonly totalDistance: number;
  @ApiProperty({ description: "일간 시간" })
  readonly totalTime: number;
  @ApiProperty({ description: "일간 칼로리" })
  readonly totalCalorie: number;
  @ApiProperty({ description: "일간 bpm" })
  readonly totalBpm: number;
  @ApiProperty({ description: "랩스 기록" })
  readonly recordLabsList: RecordWeeklyLabsDto[];
}
