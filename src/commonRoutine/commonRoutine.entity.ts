import { Level } from "../common/enum/Enum";
import { 
  BaseEntity, 
  BeforeUpdate,
  Column, 
  Entity, 
  PrimaryGeneratedColumn 
} from "typeorm";

@Entity({
  name: "uhpuh_routine",
})
export class CommonRoutine extends BaseEntity {
  @PrimaryGeneratedColumn() // 열 자동 생성 위해 쓰이는 데코레이터
  id: number;

  @Column({
    type: 'varchar',
    name: 'title',
    comment: '루틴의 제목',
  })
  title: string;

  @Column({
    type: 'enum',
    name: 'level',
    enumName: 'swim_level',
    enum: Level,
    comment: '루틴의 난이도',
  })
  level: Level;

  @Column({
    type: 'decimal',
    name: 'distance_sum',
    comment: '수영한 총 거리 (단위 : m)',
  })
  distanceSum: number;

  @Column({
    type: 'int',
    name: 'time_sum',
    comment: '수영한 총 시간 (단위 : s)', // 초 단위 잘려서 넘어오기 때문에 분 단위의 int로 설정
  })
  timeSum: number;

  @Column({
    type: 'varchar',
    name: 'description',
    comment: '루틴에 대한 설명',
  })
  description: string;

  @Column({
    type: 'boolean',
    name: 'uhp_routine',
    comment: '어푸 추천 루틴',
  })
  uhp_routine: Boolean;

  @Column({
    type: 'datetime',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'datetime',
    name: 'updated_at',
  })
  updatedAt: Date;

  @BeforeUpdate()
  updateDates() {
    this.updatedAt = new Date();
  }
}
