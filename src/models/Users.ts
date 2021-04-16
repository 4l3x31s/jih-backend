import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Languages } from "./Languages";
import { PayOptions } from "./PayOptions";
import { UsersOperators } from "./UsersOperators";

@Index("ixfk_user_languages", ["idLanguage"], {})
@Index("ixfk_user_pay_option", ["idPayOption"], {})
@Index("pk_usuarios", ["idUser"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
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

  @ManyToOne(() => Languages, (languages) => languages.users)
  @JoinColumn([{ name: "id_language", referencedColumnName: "idLanguage" }])
  idLanguage2: Languages;

  @ManyToOne(() => PayOptions, (payOptions) => payOptions.users)
  @JoinColumn([{ name: "id_pay_option", referencedColumnName: "idPayOption" }])
  idPayOption2: PayOptions;

  @OneToMany(() => UsersOperators, (usersOperators) => usersOperators.idUser2)
  usersOperators: UsersOperators[];
}
