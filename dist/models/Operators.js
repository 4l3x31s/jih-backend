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
exports.Operators = void 0;
const typeorm_1 = require("typeorm");
const Countries_1 = require("./Countries");
const SupportLanguages_1 = require("./SupportLanguages");
const UsersOperators_1 = require("./UsersOperators");
const swagger_1 = require("@nestjs/swagger");
let Operators = class Operators {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Identificator for the operator' }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "id_operator" }),
    __metadata("design:type", String)
], Operators.prototype, "idOperator", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Countrie identificator' }),
    typeorm_1.Column("bigint", { name: "id_country" }),
    __metadata("design:type", String)
], Operators.prototype, "idCountry", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Juan Perez Morales', description: 'Full name' }),
    typeorm_1.Column("text", { name: "name" }),
    __metadata("design:type", String)
], Operators.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '********', description: 'The passs' }),
    typeorm_1.Column("varchar", { name: "pass", length: 50 }),
    __metadata("design:type", String)
], Operators.prototype, "pass", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 59175145987, description: 'The number operator' }),
    typeorm_1.Column("varchar", { name: "phone_number", unique: true, length: 150 }),
    __metadata("design:type", String)
], Operators.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'example@example.com', description: 'Email' }),
    typeorm_1.Column("varchar", { name: "email", unique: true, length: 300 }),
    __metadata("design:type", String)
], Operators.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '2021-01-01 00:00:00', description: 'Date register' }),
    typeorm_1.Column("datetime", { name: "date" }),
    __metadata("design:type", Date)
], Operators.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'Active or inactive' }),
    typeorm_1.Column("int", { name: "state" }),
    __metadata("design:type", Number)
], Operators.prototype, "state", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Countries_1.Countries, (countries) => countries.operators, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "id_country", referencedColumnName: "idCountry" }]),
    __metadata("design:type", Countries_1.Countries)
], Operators.prototype, "idCountry2", void 0);
__decorate([
    typeorm_1.OneToMany(() => SupportLanguages_1.SupportLanguages, (supportLanguages) => supportLanguages.idOperator2),
    __metadata("design:type", Array)
], Operators.prototype, "supportLanguages", void 0);
__decorate([
    typeorm_1.OneToMany(() => UsersOperators_1.UsersOperators, (usersOperators) => usersOperators.idOperator2),
    __metadata("design:type", Array)
], Operators.prototype, "usersOperators", void 0);
Operators = __decorate([
    typeorm_1.Index("UK_operator_email", ["email"], { unique: true }),
    typeorm_1.Index("UK_operator_phone_number", ["phoneNumber"], { unique: true }),
    typeorm_1.Index("IXFK_operator_country", ["idCountry"], {}),
    typeorm_1.Entity("operators", { schema: "jih" })
], Operators);
exports.Operators = Operators;
//# sourceMappingURL=Operators.js.map