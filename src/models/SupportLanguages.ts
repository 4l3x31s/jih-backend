import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Languages } from "./Languages";
import { Operator } from "./Operator";

@Index("ixfk_support_languages_languages", ["idLanguage"], {})
@Index("ixfk_support_languages_operator", ["idOperator"], {})
@Index("pk_support_languages", ["idSupportLanguage"], { unique: true })
@Entity("support_languages", { schema: "public" })
export class SupportLanguages {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_support_language" })
  idSupportLanguage: string;

  @Column("bigint", { name: "id_operator", nullable: true })
  idOperator: string | null;

  @Column("bigint", { name: "id_language" })
  idLanguage: string;

  @Column("timestamp without time zone", { name: "register_date" })
  registerDate: Date;

  @Column("boolean", { name: "state" })
  state: boolean;

  @ManyToOne(() => Languages, (languages) => languages.supportLanguages)
  @JoinColumn([{ name: "id_language", referencedColumnName: "idLanguage" }])
  idLanguage2: Languages;

  @ManyToOne(() => Operator, (operator) => operator.supportLanguages)
  @JoinColumn([{ name: "id_operator", referencedColumnName: "idOperator" }])
  idOperator2: Operator;
}
