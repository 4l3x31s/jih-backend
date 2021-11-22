"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportLanguages = void 0;
const typeorm_1 = require("typeorm");
const Languages_1 = require("./Languages");
const Operators_1 = require("./Operators");
const swagger_1 = require("@nestjs/swagger");
let SupportLanguages = class SupportLanguages {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Support language identificator' }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "id_support_language" }),
    __metadata("design:type", String)
], SupportLanguages.prototype, "idSupportLanguage", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Operator identifucator' }),
    typeorm_1.Column("bigint", { name: "id_operator", nullable: true }),
    __metadata("design:type", String)
], SupportLanguages.prototype, "idOperator", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Language identificator' }),
    typeorm_1.Column("bigint", { name: "id_language" }),
    __metadata("design:type", String)
], SupportLanguages.prototype, "idLanguage", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '2021-01-01 00:00:00', description: 'Register Date' }),
    typeorm_1.Column("datetime", { name: "register_date" }),
    __metadata("design:type", Date)
], SupportLanguages.prototype, "registerDate", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'Active or inactive' }),
    typeorm_1.Column("tinyint", { name: "state", width: 1 }),
    __metadata("design:type", Boolean)
], SupportLanguages.prototype, "state", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Languages_1.Languages, (languages) => languages.supportLanguages, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "id_language", referencedColumnName: "idLanguage" }]),
    __metadata("design:type", Languages_1.Languages)
], SupportLanguages.prototype, "idLanguage2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Operators_1.Operators, (operators) => operators.supportLanguages, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "id_operator", referencedColumnName: "idOperator" }]),
    __metadata("design:type", Operators_1.Operators)
], SupportLanguages.prototype, "idOperator2", void 0);
SupportLanguages = __decorate([
    typeorm_1.Index("IXFK_support_languages_languages", ["idLanguage"], {}),
    typeorm_1.Index("IXFK_support_languages_operator", ["idOperator"], {}),
    typeorm_1.Entity("support_languages", { schema: "jih" })
], SupportLanguages);
exports.SupportLanguages = SupportLanguages;
//# sourceMappingURL=SupportLanguages.js.map