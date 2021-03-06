import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "calender",
})
export class Calender extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "date",
    name: "date",
    comment: "날짜(YYYY-MM-DD)",
  })
  date: string;

  @Column({
    type: "int",
    name: "week",
    comment: "해당 달의 주차",
  })
  week: number;

  @Column({
    type: "timestamp",
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: string;
}
