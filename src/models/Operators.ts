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

  @Column("text", { name: "phone_number" })
  phoneNumber: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("tinyint", { name: "state", width: 1 })
  state: boolean;

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
