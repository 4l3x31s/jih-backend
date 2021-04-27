import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Operators } from "./Operators";

@Entity("countries", { schema: "jih" })
export class Countries {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_country" })
  idCountry: string;

  @Column("text", { name: "name_country" })
  nameCountry: string;

  @Column("varchar", { name: "calling_code", nullable: true, length: 50 })
  callingCode: string | null;

  @Column("varchar", { name: "alpha_code_2", length: 3 })
  alphaCode_2: string;

  @Column("varchar", { name: "alpha_code_3", length: 4 })
  alphaCode_3: string;

  @Column("datetime", { name: "register_date" })
  registerDate: Date;

  @Column("tinyint", { name: "state", width: 1 })
  state: boolean;

  @OneToMany(() => Operators, (operators) => operators.idCountry2)
  operators: Operators[];
}
