import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SupportLanguages } from "./SupportLanguages";
import { Users } from "./Users";

@Entity("languages", { schema: "jih" })
export class Languages {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_language" })
  idLanguage: string;

  @Column("varchar", { name: "abreviation", length: 3 })
  abreviation: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("tinyint", { name: "state", width: 1 })
  state: boolean;

  @OneToMany(
    () => SupportLanguages,
    (supportLanguages) => supportLanguages.idLanguage2
  )
  supportLanguages: SupportLanguages[];

  @OneToMany(() => Users, (users) => users.idLanguage2)
  users: Users[];
}
