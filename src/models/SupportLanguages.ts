import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Languages } from "./Languages";
import { Operators } from "./Operators";

@Index("IXFK_support_languages_languages", ["idLanguage"], {})
@Index("IXFK_support_languages_operator", ["idOperator"], {})
@Entity("support_languages", { schema: "jih" })
export class SupportLanguages {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_support_language" })
  idSupportLanguage: string;

  @Column("bigint", { name: "id_operator", nullable: true })
  idOperator: string | null;

  @Column("bigint", { name: "id_language" })
  idLanguage: string;

  @Column("datetime", { name: "register_date" })
  registerDate: Date;

  @Column("tinyint", { name: "state", width: 1 })
  state: boolean;

  @ManyToOne(() => Languages, (languages) => languages.supportLanguages, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_language", referencedColumnName: "idLanguage" }])
  idLanguage2: Languages;

  @ManyToOne(() => Operators, (operators) => operators.supportLanguages, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_operator", referencedColumnName: "idOperator" }])
  idOperator2: Operators;
}
