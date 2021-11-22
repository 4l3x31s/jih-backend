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
exports.Languages = void 0;
const typeorm_1 = require("typeorm");
const SupportLanguages_1 = require("./SupportLanguages");
const Users_1 = require("./Users");
const swagger_1 = require("@nestjs/swagger");
let Languages = class Languages {
};
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'Language identificator' }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "id_language" }),
    __metadata("design:type", String)
], Languages.prototype, "idLanguage", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'ES', description: 'Abreviation for de language' }),
    typeorm_1.Column("varchar", { name: "abreviation", length: 3 }),
    __metadata("design:type", String)
], Languages.prototype, "abreviation", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'SPANISH', description: 'Language Description' }),
    typeorm_1.Column("text", { name: "description" }),
    __metadata("design:type", String)
], Languages.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'Active or inactive' }),
    typeorm_1.Column("tinyint", { name: "state", width: 1 }),
    __metadata("design:type", Boolean)
], Languages.prototype, "state", void 0);
__decorate([
    typeorm_1.OneToMany(() => SupportLanguages_1.SupportLanguages, (supportLanguages) => supportLanguages.idLanguage2),
    __metadata("design:type", Array)
], Languages.prototype, "supportLanguages", void 0);
__decorate([
    typeorm_1.OneToMany(() => Users_1.Users, (users) => users.idLanguage2),
    __metadata("design:type", Array)
], Languages.prototype, "users", void 0);
Languages = __decorate([
    typeorm_1.Entity("languages", { schema: "jih" })
], Languages);
exports.Languages = Languages;
//# sourceMappingURL=Languages.js.map