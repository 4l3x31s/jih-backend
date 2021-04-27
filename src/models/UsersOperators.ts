import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Operators } from "./Operators";
import { Users } from "./Users";

@Index("IXFK_user_operator_operator", ["idOperator"], {})
@Index("IXFK_user_operator_user", ["idUser"], {})
@Entity("users_operators", { schema: "jih" })
export class UsersOperators {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_user_operator" })
  idUserOperator: string;

  @Column("bigint", { name: "id_user" })
  idUser: string;

  @Column("bigint", { name: "id_operator" })
  idOperator: string;

  @Column("text", { name: "comments", nullable: true })
  comments: string | null;

  @Column("int", { name: "qualification", nullable: true })
  qualification: number | null;

  @Column("datetime", { name: "registration_date" })
  registrationDate: Date;

  @Column("tinyint", { name: "state", width: 1 })
  state: boolean;

  @ManyToOne(() => Operators, (operators) => operators.usersOperators, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_operator", referencedColumnName: "idOperator" }])
  idOperator2: Operators;

  @ManyToOne(() => Users, (users) => users.usersOperators, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  idUser2: Users;
}
