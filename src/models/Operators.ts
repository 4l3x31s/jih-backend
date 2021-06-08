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

@Index("UK_operator_email", ["email"], { unique: true })
@Index("UK_operator_phone_number", ["phoneNumber"], { unique: true })
@Index("IXFK_operator_country", ["idCountry"], {})
@Entity("operators", { schema: "jih" })
export class Operators {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_operator" })
  idOperator: string;

  @Column("bigint", { name: "id_country" })
  idCountry: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("varchar", { name: "pass", length: 50 })
  pass: string;

  @Column("varchar", { name: "phone_number", unique: true, length: 150 })
  phoneNumber: string;

  @Column("varchar", { name: "email", unique: true, length: 300 })
  email: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("int", { name: "state" })
  state: number;

  @ManyToOne(() => Countries, (countries) => countries.operators, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
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
