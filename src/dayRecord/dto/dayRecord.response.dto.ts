import { ApiProperty } from "@nestjs/swagger";
import mathUtils from "../../common/util/mathUtils";
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
  readonly freestyleTotalSpeed: string;
  @ApiProperty({ description: "평영 일간 거리" })
  readonly breastTotalDistance: number;
  @ApiProperty({ description: "평영 일간 속도" })
  readonly breastTotalSpeed: string;
  @ApiProperty({ description: "배영 일간 거리" })
  readonly backTotalDistance: number;
  @ApiProperty({ description: "배영 일간 속도" })
  readonly backTotalSpeed: string;
  @ApiProperty({ description: "접영 일간 거리" })
  readonly butterflyTotalDistance: number;
  @ApiProperty({ description: "접영 일간 속도" })
  readonly butterflyTotalSpeed: string;
  @ApiProperty({ description: "혼영 일간 거리" })
  readonly imTotalDistance: number;
  @ApiProperty({ description: "혼영 일간 속도" })
  readonly imTotalSpeed: string;
  @ApiProperty({ description: "랩스 기록" })
  readonly recordLabsList: RecordDailyLabsDto[];

  constructor(date, overview, recordLabsList) {
    this.date = date;
    this.totalDistance = overview.total_distance;
    this.totalTime = overview.total_time;
    this.totalCalorie = overview.calorie;
    this.totalBpm = overview.beat_per_minute;
    this.freestyleTotalDistance = overview.freestyle_distance;
    this.freestyleTotalSpeed = mathUtils.getSpeed(
      overview.freestyle_distance,
      overview.freestyle_time
    );
    this.breastTotalDistance = overview.breast_distance;
    this.breastTotalSpeed = mathUtils.getSpeed(
      overview.breast_distance,
      overview.breast_time
    );
    this.backTotalDistance = overview.back_distance;
    this.backTotalSpeed = mathUtils.getSpeed(
      overview.back_distance,
      overview.back_time
    );
    this.butterflyTotalDistance = overview.butterfly_distance;
    this.butterflyTotalSpeed = mathUtils.getSpeed(
      overview.butterfly_distance,
      overview.butterfly_time
    );
    this.imTotalDistance = overview.imDistance;
    this.imTotalSpeed = mathUtils.getSpeed(
      overview.im_distance,
      overview.im_time
    );
    this.recordLabsList = recordLabsList;
  }
}
