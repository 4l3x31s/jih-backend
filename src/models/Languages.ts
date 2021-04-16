import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SupportLanguages } from "./SupportLanguages";
import { Users } from "./Users";

@Index("pk_languages", ["idLanguage"], { unique: true })
@Entity("languages", { schema: "public" })
export class Languages {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_language" })
  idLanguage: string;

  @Column("character varying", { name: "abreviation", length: 3 })
  abreviation: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("boolean", { name: "state" })
  state: boolean;

  @OneToMany(
    () => SupportLanguages,
    (supportLanguages) => supportLanguages.idLanguage2
  )
  supportLanguages: SupportLanguages[];

  @OneToMany(() => Users, (users) => users.idLanguage2)
  users: Users[];
}
