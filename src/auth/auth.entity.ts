import { Active } from "src/common/enum/Active";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 16,
  })
  nickname: string;

  @Column({
    type: "varchar",
    length: 20,
  })
  phone: string;

  @Column({
    type: "text",
    default: "Y",
  })
  active: Active;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: string;

  @Column({ type: "timestamp" })
  updated_at: string;
}
