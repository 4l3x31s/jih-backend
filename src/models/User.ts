import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PayOption } from "./PayOption";
import { UserOperator } from "./UserOperator";

@Index("ixfk_user_pay_option", ["idPayOption"], {})
@Index("pk_usuarios", ["idUser"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_user" })
  idUser: string;

  @Column("bigint", { name: "id_pay_option" })
  idPayOption: string;

  @Column("bigint", { name: "id_language" })
  idLanguage: string;

  @Column("text", { name: "user" })
  user: string;

  @Column("text", { name: "pass" })
  pass: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("timestamp without time zone", { name: "registration_date" })
  registrationDate: Date;

  @Column("boolean", { name: "state" })
  state: boolean;

  @ManyToOne(() => PayOption, (payOption) => payOption.users)
  @JoinColumn([{ name: "id_pay_option", referencedColumnName: "idPayOption" }])
  idPayOption2: PayOption;

  @OneToMany(() => UserOperator, (userOperator) => userOperator.idUser2)
  userOperators: UserOperator[];
}
