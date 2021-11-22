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
exports.PayOptions = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
const swagger_1 = require("@nestjs/swagger");
let PayOptions = class PayOptions {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Pay identificator' }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "id_pay_option" }),
    __metadata("design:type", String)
], PayOptions.prototype, "idPayOption", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 9.99, description: 'amount' }),
    typeorm_1.Column("decimal", { name: "amount", precision: 10, scale: 2 }),
    __metadata("design:type", String)
], PayOptions.prototype, "amount", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '$9.99 - 10 assisted calls...', description: 'Desription for the pay' }),
    typeorm_1.Column("text", { name: "description" }),
    __metadata("design:type", String)
], PayOptions.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'Active or inactive' }),
    typeorm_1.Column("tinyint", { name: "state", width: 1 }),
    __metadata("design:type", Boolean)
], PayOptions.prototype, "state", void 0);
__decorate([
    typeorm_1.OneToMany(() => Users_1.Users, (users) => users.idPayOption2),
    __metadata("design:type", Array)
], PayOptions.prototype, "users", void 0);
PayOptions = __decorate([
    typeorm_1.Entity("pay_options", { schema: "jih" })
], PayOptions);
exports.PayOptions = PayOptions;
//# sourceMappingURL=PayOptions.js.map