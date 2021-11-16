import { ApiProperty } from "@nestjs/swagger";
import { RecordDailyLabsDto } from "./dayRecord.labs.dto";

export class RecordDailyListDto {
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
  @ApiProperty({ description: "자유형 일간 거리" })
  readonly freestyleTotalDistance: number;
  @ApiProperty({ description: "자유형 일간 속도" })
  readonly freestyleTotalSpeed: number;
  @ApiProperty({ description: "평영 일간 거리" })
  readonly breastTotalDistance: number;
  @ApiProperty({ description: "평영 일간 속도" })
  readonly breastTotalSpeed: number;
  @ApiProperty({ description: "배영 일간 거리" })
  readonly backTotalDistance: number;
  @ApiProperty({ description: "배영 일간 속도" })
  readonly backTotalSpeed: number;
  @ApiProperty({ description: "접영 일간 거리" })
  readonly butterflyTotalDistance: number;
  @ApiProperty({ description: "접영 일간 속도" })
  readonly butterflyTotalSpeed: number;
  @ApiProperty({ description: "혼영 일간 거리" })
  readonly imTotalDistance: number;
  @ApiProperty({ description: "혼영 일간 속도" })
  readonly imTotalSpeed: number;
  @ApiProperty({ description: "랩스 기록" })
  readonly recordLabsList: RecordDailyLabsDto[];

  constructor(date, overview, recordLabsList) {
    this.date = date;
    this.totalDistance = overview.totalDistance;
    this.totalTime = overview.totalTime;
    this.totalCalorie = overview.totalCalorie;
    this.totalBpm = overview.beatPerMinute;
    this.freestyleTotalDistance = overview.freestyleDistance;
    this.freestyleTotalSpeed = overview.freestyleSpeed;
    this.breastTotalDistance = overview.breastDistance;
    this.breastTotalSpeed = overview.breastSpeed;
    this.backTotalDistance = overview.backDistance;
    this.backTotalSpeed = overview.backSpeed;
    this.butterflyTotalDistance = overview.butterflyDistance;
    this.butterflyTotalSpeed = overview.butterflySpeed;
    this.imTotalDistance = overview.imDistance;
    this.imTotalSpeed = overview.imSpeed;
    this.recordLabsList = recordLabsList;
  }
}
