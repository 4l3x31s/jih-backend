import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";
import { SupportLanguages } from "./SupportLanguages";
import { UserOperator } from "./UserOperator";

@Index("ixfk_operator_country", ["idCountry"], {})
@Index("pk_operator", ["idOperator"], { unique: true })
@Entity("operator", { schema: "public" })
export class Operator {
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

  @ManyToOne(() => Country, (country) => country.operators)
  @JoinColumn([{ name: "id_country", referencedColumnName: "idCountry" }])
  idCountry2: Country;

  @OneToMany(
    () => SupportLanguages,
    (supportLanguages) => supportLanguages.idOperator2
  )
  supportLanguages: SupportLanguages[];

  @OneToMany(() => UserOperator, (userOperator) => userOperator.idOperator2)
  userOperators: UserOperator[];
}
