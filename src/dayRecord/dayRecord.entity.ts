import { Active, DayOfWeek, Stroke } from "../common/enum/Enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "day_records",
})
export class DayRecord extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int",
    name: "user_id",
    comment: "유저 Table PK (FK)",
  })
  userId: number;

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
    name: "week",
    comment: "수영한 주",
  })
  week: number;

  @Column({
    type: "varchar",
    name: "year_month",
    comment: "수영한 년월 yyyy-mm 형식",
  })
  yearMonth: string;

  @Column({
    type: "int",
    name: "distance",
    comment: "수영한 거리 (단위 : m)",
  })
  distance: number;

  @Column({
    type: "decimal",
    name: "speed",
    comment: "수영한 속력 (단위 : m/s)",
  })
  speed: number;

  @Column({
    type: "int",
    name: "time",
    comment: "수영한 시간 (단위 : s)",
  })
  time: number;

  @Column({
    type: "enum",
    enumName: "stroke",
    enum: Stroke,
    comment: "영법",
  })
  stroke: Stroke;

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
}
