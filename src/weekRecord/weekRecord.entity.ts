import { Active, DayOfWeek, Stroke } from "../common/enum/Enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "week_records",
})
export class WeekRecord extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int",
    name: "user_id",
    comment: "유저 Table PK (FK)",
  })
  userId: number;

  @Column({
    type: "int",
    name: "labs_count",
    comment: "dayRecord의 row 개수",
  })
  labsCount: number;

  @Column({
    type: "int",
    name: "stroke_count",
    comment: "스트로크 개수",
  })
  strokeCount: number;

  @Column({
    type: "varchar",
    name: "year_month_date",
    comment: "수영한 년월 yyyy-mm 형식",
  })
  yearMonth: string;

  @Column({
    type: "int",
    name: "week",
    comment: "수영한 주",
  })
  week: number;

  @Column({
    type: "enum",
    name: "day_of_week",
    enumName: "day_of_week",
    enum: DayOfWeek,
    comment: "수영한 요일",
  })
  dayOfWeek: DayOfWeek;

  @Column({
    type: "int",
    name: "total_distance",
    comment: "총 수영한 거리 (단위 : m)",
  })
  totalDistance: number;

  @Column({
    type: "int",
    name: "total_time",
    comment: "총 수영한 시간 (단위 : s)",
  })
  totalTime: number;

  @Column({
    type: "int",
    name: "freestyle_count",
    comment: "자유형 labs 개수",
  })
  freestyleCount: number;

  @Column({
    type: "int",
    name: "freestyle_distance",
    comment: "자유형 수영한 거리 (단위 : m)",
  })
  freestyleDistance: number;

  @Column({
    type: "decimal",
    name: "freestyle_time",
    comment: "자유형 수영한 시간 (단위 : s)",
  })
  freestyleTime: number;

  @Column({
    type: "int",
    name: "back_count",
    comment: "배영 labs 개수",
  })
  backCount: number;

  @Column({
    type: "int",
    name: "back_distance",
    comment: "배영 수영한 거리 (단위 : m)",
  })
  backDistance: number;

  @Column({
    type: "decimal",
    name: "back_time",
    comment: "배영 수영한 시간 (단위 : s)",
  })
  backTime: number;

  @Column({
    type: "int",
    name: "breast_count",
    comment: "평영 labs 개수",
  })
  breastCount: number;

  @Column({
    type: "int",
    name: "breast_distance",
    comment: "평영 수영한 거리 (단위 : m)",
  })
  breastDistance: number;

  @Column({
    type: "decimal",
    name: "breast_time",
    comment: "평영 수영한 시간 (단위 : s)",
  })
  breastTime: number;

  @Column({
    type: "int",
    name: "butterfly_count",
    comment: "접영 labs 개수",
  })
  butterflyCount: number;

  @Column({
    type: "int",
    name: "butterfly_distance",
    comment: "접영 수영한 거리 (단위 : m)",
  })
  butterflyDistance: number;

  @Column({
    type: "decimal",
    name: "butterfly_time",
    comment: "접영 수영한 시간 (단위 : s)",
  })
  butterflyTime: number;

  @Column({
    type: "int",
    name: "im_count",
    comment: "혼영 labs 개수",
  })
  imCount: number;

  @Column({
    type: "int",
    name: "im_distance",
    comment: "혼영 수영한 거리 (단위 : m)",
  })
  imDistance: number;

  @Column({
    type: "decimal",
    name: "im_time",
    comment: "혼영 수영한 시간 (단위 : s)",
  })
  imTime: number;

  @Column({
    type: "int",
    name: "calorie",
    comment: "칼로리 (단위 : kcal)",
  })
  calorie: number;

  @Column({
    type: "int",
    name: "beat_per_minute",
    comment: "BPM",
  })
  beatPerMinute: number;

  @Column({
    type: "enum",
    enumName: "active",
    enum: Active,
    default: Active.Y,
  })
  active: Active;

  @Column({
    type: "timestamp",
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: string;

  @Column({
    type: "timestamp",
    name: "updated_at",
  })
  updatedAt: string;

  constructor() {
    super();
    this.calorie = 0;
    this.strokeCount = 0;
    this.beatPerMinute = 0;

    this.labsCount = 0;
    this.totalTime = 0;
    this.totalDistance = 0;

    this.imCount = 0;
    this.imDistance = 0;
    this.imTime = 0;

    this.freestyleCount = 0;
    this.freestyleDistance = 0;
    this.freestyleTime = 0;

    this.backCount = 0;
    this.backDistance = 0;
    this.backTime = 0;

    this.breastCount = 0;
    this.breastDistance = 0;
    this.breastTime = 0;

    this.butterflyCount = 0;
    this.butterflyDistance = 0;
    this.butterflyTime = 0;
  }
}
