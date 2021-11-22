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
exports.UsersOperators = void 0;
const typeorm_1 = require("typeorm");
const Operators_1 = require("./Operators");
const Users_1 = require("./Users");
const swagger_1 = require("@nestjs/swagger");
let UsersOperators = class UsersOperators {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'User operator identificator' }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "id_user_operator" }),
    __metadata("design:type", String)
], UsersOperators.prototype, "idUserOperator", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'User identificator' }),
    typeorm_1.Column("bigint", { name: "id_user" }),
    __metadata("design:type", String)
], UsersOperators.prototype, "idUser", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Operator identificator' }),
    typeorm_1.Column("bigint", { name: "id_operator" }),
    __metadata("design:type", String)
], UsersOperators.prototype, "idOperator", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Lorem ipsum.....', description: 'User comments' }),
    typeorm_1.Column("text", { name: "comments", nullable: true }),
    __metadata("design:type", String)
], UsersOperators.prototype, "comments", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 5, description: 'call calification' }),
    typeorm_1.Column("int", { name: "qualification", nullable: true }),
    __metadata("design:type", Number)
], UsersOperators.prototype, "qualification", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '2021-01-01 00:00:00', description: 'Register date' }),
    typeorm_1.Column("datetime", { name: "registration_date" }),
    __metadata("design:type", Date)
], UsersOperators.prototype, "registrationDate", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'Active or inactive' }),
    typeorm_1.Column("tinyint", { name: "state", width: 1 }),
    __metadata("design:type", Boolean)
], UsersOperators.prototype, "state", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Operators_1.Operators, (operators) => operators.usersOperators, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "id_operator", referencedColumnName: "idOperator" }]),
    __metadata("design:type", Operators_1.Operators)
], UsersOperators.prototype, "idOperator2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.usersOperators, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }]),
    __metadata("design:type", Users_1.Users)
], UsersOperators.prototype, "idUser2", void 0);
UsersOperators = __decorate([
    typeorm_1.Index("IXFK_user_operator_operator", ["idOperator"], {}),
    typeorm_1.Index("IXFK_user_operator_user", ["idUser"], {}),
    typeorm_1.Entity("users_operators", { schema: "jih" })
], UsersOperators);
exports.UsersOperators = UsersOperators;
//# sourceMappingURL=UsersOperators.js.map