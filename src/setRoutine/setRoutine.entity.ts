import { SwimSet } from "../common/enum/Enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "set_routine",
})
export class SetRoutine extends BaseEntity {
  @PrimaryGeneratedColumn() // 열 자동 생성 위해 쓰이는 데코레이터
  id: number;

  @Column({
    type: "enum",
    name: "swim_set",
    enumName: "swim_set",
    enum: SwimSet,
    comment: "수영 세트 구분", // set 이름 enum으로 설정
  })
  swimSet: SwimSet;

  @Column({
    type: "varchar",
    name: "stroke",
    comment: "영법 이름",
  })
  stroke: string;

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
}
