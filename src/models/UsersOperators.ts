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

@Index("ixfk_user_operator_operator", ["idOperator"], {})
@Index("ixfk_user_operator_user", ["idUser"], {})
@Index("pk_user_operator", ["idUserOperator"], { unique: true })
@Entity("users_operators", { schema: "public" })
export class UsersOperators {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_user_operator" })
  idUserOperator: string;

  @Column("bigint", { name: "id_user" })
  idUser: string;

  @Column("bigint", { name: "id_operator" })
  idOperator: string;

  @Column("text", { name: "comments", nullable: true })
  comments: string | null;

  @Column("integer", { name: "qualification", nullable: true })
  qualification: number | null;

  @Column("timestamp without time zone", { name: "registration_date" })
  registrationDate: Date;

  @Column("boolean", { name: "state" })
  state: boolean;

  @ManyToOne(() => Operators, (operators) => operators.usersOperators)
  @JoinColumn([{ name: "id_operator", referencedColumnName: "idOperator" }])
  idOperator2: Operators;

  @ManyToOne(() => Users, (users) => users.usersOperators)
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  idUser2: Users;
}
