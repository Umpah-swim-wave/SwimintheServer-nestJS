import { Active } from "../common/enum/Enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "users",
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    name: "nickname",
    comment: "유저 닉네임",
    length: 16,
  })
  nickname: string;

  @Column({
    type: "varchar",
    name: "phone_number",
    comment: "유저 휴대폰 번호",
    length: 20,
  })
  phone: string;

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
