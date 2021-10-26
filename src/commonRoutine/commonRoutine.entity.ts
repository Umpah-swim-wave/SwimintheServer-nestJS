import { SwimSet, Stroke, Level } from "../common/enum/Enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "routine",
})
export class Routine extends BaseEntity {
  @PrimaryGeneratedColumn() // 열 자동 생성 위해 쓰이는 데코레이터
  id: number;

  @Column({
    type: "varchar",
    name: "title",
    comment: "루틴의 제목",
  })
  title: string;

  @Column({
    type: "enum",
    name: "level",
    enumName: "swim_level",
    enum: Level,
    comment: "어푸가 추천하는 루틴의 난이도",
  })
  level: Level;

  @Column({
    type: "decimal",
    name: "distance_sum",
    comment: "수영한 총 거리 (단위 : m)",
  })
  distanceSum: number;

  @Column({
    type: "int",
    name: "time_sum",
    comment: "수영한 총 시간 (단위 : m)", // 초 단위 잘려서 넘어오기 때문에 분 단위의 int로 설정
  })
  timeSum: number;

  @Column({
    type: "varchar",
    name: "description",
    comment: "루틴에 대한 설명",
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
