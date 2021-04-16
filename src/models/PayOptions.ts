import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("pk_pay_option", ["idPayOption"], { unique: true })
@Entity("pay_options", { schema: "public" })
export class PayOptions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_pay_option" })
  idPayOption: string;

  @Column("numeric", { name: "amount", precision: 10, scale: 2 })
  amount: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("boolean", { name: "state" })
  state: boolean;

  @OneToMany(() => Users, (users) => users.idPayOption2)
  users: Users[];
}
