import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Operators } from "./Operators";

@Index("pk_country", ["idCountry"], { unique: true })
@Entity("countries", { schema: "public" })
export class Countries {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_country" })
  idCountry: string;

  @Column("text", { name: "name_country" })
  nameCountry: string;

  @Column("character varying", { name: "alpha_code_2", length: 3 })
  alphaCode_2: string;

  @Column("character varying", { name: "alpha_code_3", length: 4 })
  alphaCode_3: string;

  @Column("timestamp without time zone", { name: "register_date" })
  registerDate: Date;

  @Column("boolean", { name: "state" })
  state: boolean;

  @OneToMany(() => Operators, (operators) => operators.idCountry2)
  operators: Operators[];
}
