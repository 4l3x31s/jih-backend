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
exports.ResOperadorDto = void 0;
const global_dto_1 = require("./global.dto");
const Operators_1 = require("../models/Operators");
const swagger_1 = require("@nestjs/swagger");
class ResOperadorDto extends global_dto_1.GlobalDto {
}
__decorate([
    swagger_1.ApiProperty({ example: 'Operators...', description: 'Operators object' }),
    __metadata("design:type", Operators_1.Operators)
], ResOperadorDto.prototype, "operator", void 0);
exports.ResOperadorDto = ResOperadorDto;
//# sourceMappingURL=res-operador.dto.js.map