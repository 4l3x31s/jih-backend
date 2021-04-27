import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity("pay_options", { schema: "jih" })
export class PayOptions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_pay_option" })
  idPayOption: string;

  @Column("decimal", { name: "amount", precision: 10, scale: 2 })
  amount: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("tinyint", { name: "state", width: 1 })
  state: boolean;

  @OneToMany(() => Users, (users) => users.idPayOption2)
  users: Users[];
}
