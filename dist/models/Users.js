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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Languages_1 = require("./Languages");
const PayOptions_1 = require("./PayOptions");
const UsersOperators_1 = require("./UsersOperators");
const swagger_1 = require("@nestjs/swagger");
let Users = class Users {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'User identificator' }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "id_user" }),
    __metadata("design:type", String)
], Users.prototype, "idUser", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Option pay selected' }),
    typeorm_1.Column("bigint", { name: "id_pay_option" }),
    __metadata("design:type", String)
], Users.prototype, "idPayOption", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Native language' }),
    typeorm_1.Column("bigint", { name: "id_language" }),
    __metadata("design:type", String)
], Users.prototype, "idLanguage", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Country identificator' }),
    typeorm_1.Column("bigint", { name: "id_country", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "idCountry", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Pepe Pedro Perez Peralta', description: 'Full Name' }),
    typeorm_1.Column("text", { name: "name" }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 59175145987, description: 'User phone' }),
    typeorm_1.Column("varchar", { name: "phone", unique: true, length: 150 }),
    __metadata("design:type", String)
], Users.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'example@example.com', description: 'email' }),
    typeorm_1.Column("varchar", { name: "email", unique: true, length: 300 }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '***********', description: 'Password' }),
    typeorm_1.Column("text", { name: "pass" }),
    __metadata("design:type", String)
], Users.prototype, "pass", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '2021-02-02 00:00:00', description: 'Register date' }),
    typeorm_1.Column("datetime", { name: "registration_date" }),
    __metadata("design:type", Date)
], Users.prototype, "registrationDate", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'Active or inactive user' }),
    typeorm_1.Column("tinyint", { name: "state", width: 1 }),
    __metadata("design:type", Boolean)
], Users.prototype, "state", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Languages_1.Languages, (languages) => languages.users, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "id_language", referencedColumnName: "idLanguage" }]),
    __metadata("design:type", Languages_1.Languages)
], Users.prototype, "idLanguage2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PayOptions_1.PayOptions, (payOptions) => payOptions.users, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "id_pay_option", referencedColumnName: "idPayOption" }]),
    __metadata("design:type", PayOptions_1.PayOptions)
], Users.prototype, "idPayOption2", void 0);
__decorate([
    typeorm_1.OneToMany(() => UsersOperators_1.UsersOperators, (usersOperators) => usersOperators.idUser2),
    __metadata("design:type", Array)
], Users.prototype, "usersOperators", void 0);
Users = __decorate([
    typeorm_1.Index("UK_user_email", ["email"], { unique: true }),
    typeorm_1.Index("UK_user_phone", ["phone"], { unique: true }),
    typeorm_1.Index("IXFK_user_languages", ["idLanguage"], {}),
    typeorm_1.Index("IXFK_user_pay_option", ["idPayOption"], {}),
    typeorm_1.Entity("users", { schema: "jih" })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map