import { Active, SwimSet, Stroke } from "../common/enum/Enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "user_routine",
})
export class userRoutine extends BaseEntity {
  @PrimaryGeneratedColumn() // 열 자동 생성 위해 쓰이는 데코레이터
  id: number;

  @Column({
    type: "int",
    name: "user_id",
    comment: "유저 Table PK (FK)",
  })
  userId: number;

  @Column({
    type: "varchar", // 제목 길이는 다양하므로 varchar로 설정
    name: "title",
    comment: "루틴의 제목",
  })
  title: string;

  @Column({
    type: "char", // level 사이즈는 고정되어 있으므로 char로 설정 -> 얘도 enum으로 설정할 수 있나? enum 한글 가능?
    name: "level",
    comment: "루틴의 레벨",
  })
  level: string;

  @Column({
    type: "decimal",
    name: "distance_sum",
    comment: "수영한 총 거리 (단위 : m)",
  })
  distanceSum: number;

  @Column({
    type: "int",
    name: "time_sum",
    comment: "수영한 총 시간 (단위 : m)", // 앞에 클라에서 초 단위 잘려서 넘어오기 때문에 분 단위의 int로 설정
  })
  timeSum: number;

  @Column({
    type: "varchar",
    name: "description",
    comment: "루틴에 대한 설명", // text는 disk에 저장되어 자주 불리는 query에서는 performance 차이가 크다고 해 varchar로 설정
  })
  description: string;

  @Column({
    type: "enum",
    name: "swim_set",
    enumName: "swim_set",
    enum: SwimSet,
    comment: "수영 세트 구분", // set 이름도 enum으로 설정
  })
  setName: SwimSet;

  @Column({
    type: "enum",
    name: "stroke",
    enumName: "stroke",
    enum: Stroke,
    comment: "영법",
  })
  stroke: Stroke;

  @Column({
    type: "int",
    name: "distance",
    comment: "수영한 거리 (단위 : m)",
  })
  distance: number;

  @Column({
    type: "int",
    name: "time",
    comment: "수영한 시간 (단위 : s)",
  })
  time: number;

  @Column({
    type: "enum",
    name: "active",
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
