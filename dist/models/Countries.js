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
exports.Countries = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const Operators_1 = require("./Operators");
let Countries = class Countries {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Countrie identificator' }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "id_country" }),
    __metadata("design:type", String)
], Countries.prototype, "idCountry", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Bolivia', description: 'The name countrie' }),
    typeorm_1.Column("text", { name: "name_country" }),
    __metadata("design:type", String)
], Countries.prototype, "nameCountry", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 591, description: 'Calling code for the countrie' }),
    typeorm_1.Column("varchar", { name: "calling_code", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Countries.prototype, "callingCode", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'BO', description: 'Alpha code' }),
    typeorm_1.Column("varchar", { name: "alpha_code_2", length: 3 }),
    __metadata("design:type", String)
], Countries.prototype, "alphaCode_2", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'BOL', description: 'Alpha code 3 digits' }),
    typeorm_1.Column("varchar", { name: "alpha_code_3", length: 4 }),
    __metadata("design:type", String)
], Countries.prototype, "alphaCode_3", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '2021-05-01 00:11:22', description: 'Date register' }),
    typeorm_1.Column("datetime", { name: "register_date" }),
    __metadata("design:type", Date)
], Countries.prototype, "registerDate", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'State for identify to active or inactive' }),
    typeorm_1.Column("tinyint", { name: "state", width: 1 }),
    __metadata("design:type", Boolean)
], Countries.prototype, "state", void 0);
__decorate([
    typeorm_1.OneToMany(() => Operators_1.Operators, (operators) => operators.idCountry2),
    __metadata("design:type", Array)
], Countries.prototype, "operators", void 0);
Countries = __decorate([
    typeorm_1.Entity("countries", { schema: "jih" })
], Countries);
exports.Countries = Countries;
//# sourceMappingURL=Countries.js.map