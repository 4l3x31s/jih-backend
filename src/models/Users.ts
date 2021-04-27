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

@Index("IXFK_user_languages", ["idLanguage"], {})
@Index("IXFK_user_pay_option", ["idPayOption"], {})
@Entity("users", { schema: "jih" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_user" })
  idUser: string;

  @Column("bigint", { name: "id_pay_option" })
  idPayOption: string;

  @Column("bigint", { name: "id_language" })
  idLanguage: string;

  @Column("bigint", { name: "id_country", nullable: true })
  idCountry: string | null;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "phone" })
  phone: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("text", { name: "pass" })
  pass: string;

  @Column("datetime", { name: "registration_date" })
  registrationDate: Date;

  @Column("tinyint", { name: "state", width: 1 })
  state: boolean;

  @ManyToOne(() => Languages, (languages) => languages.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_language", referencedColumnName: "idLanguage" }])
  idLanguage2: Languages;

  @ManyToOne(() => PayOptions, (payOptions) => payOptions.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pay_option", referencedColumnName: "idPayOption" }])
  idPayOption2: PayOptions;

  @OneToMany(() => UsersOperators, (usersOperators) => usersOperators.idUser2)
  usersOperators: UsersOperators[];
}
