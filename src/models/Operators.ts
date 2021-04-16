import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Countries } from "./Countries";
import { SupportLanguages } from "./SupportLanguages";
import { UsersOperators } from "./UsersOperators";

@Index("ixfk_operator_country", ["idCountry"], {})
@Index("pk_operator", ["idOperator"], { unique: true })
@Entity("operators", { schema: "public" })
export class Operators {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_operator" })
  idOperator: string;

  @Column("bigint", { name: "id_country" })
  idCountry: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "user" })
  user: string;

  @Column("character varying", { name: "pass", length: 50 })
  pass: string;

  @Column("text", { name: "phone_number" })
  phoneNumber: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("timestamp without time zone", { name: "date" })
  date: Date;

  @Column("boolean", { name: "state" })
  state: boolean;

  @ManyToOne(() => Countries, (countries) => countries.operators)
  @JoinColumn([{ name: "id_country", referencedColumnName: "idCountry" }])
  idCountry2: Countries;

  @OneToMany(
    () => SupportLanguages,
    (supportLanguages) => supportLanguages.idOperator2
  )
  supportLanguages: SupportLanguages[];

  @OneToMany(
    () => UsersOperators,
    (usersOperators) => usersOperators.idOperator2
  )
  usersOperators: UsersOperators[];
}
