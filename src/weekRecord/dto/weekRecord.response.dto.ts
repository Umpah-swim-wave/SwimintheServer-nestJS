import { ApiProperty } from "@nestjs/swagger";
import { RecordWeeklyLabsDto } from "./weekRecord.labs.dto";

export class RecordWeeklyListDto {
  @ApiProperty({ description: "수영한 날짜 YYYY/MM/DD 형태" })
  date: string;
  @ApiProperty({ description: "일간 거리" })
  totalDistance: number;
  @ApiProperty({ description: "일간 시간" })
  totalTime: number;
  @ApiProperty({ description: "일간 칼로리" })
  totalCalorie: number;
  @ApiProperty({ description: "일간 bpm" })
  totalBpm: number;
  @ApiProperty({ description: "랩스 기록" })
  recordLabsList: RecordWeeklyLabsDto[];
}
