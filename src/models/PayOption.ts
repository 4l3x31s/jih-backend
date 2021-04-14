import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("pk_pay_option", ["idPayOption"], { unique: true })
@Entity("pay_option", { schema: "public" })
export class PayOption {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_pay_option" })
  idPayOption: string;

  @Column("numeric", { name: "amount", precision: 10, scale: 2 })
  amount: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("boolean", { name: "state" })
  state: boolean;

  @OneToMany(() => User, (user) => user.idPayOption2)
  users: User[];
}
