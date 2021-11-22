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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorController = void 0;
const SupportLanguages_1 = require("./../../../models/SupportLanguages");
const common_1 = require("@nestjs/common");
const operator_service_1 = require("../services/operator.service");
const Operators_1 = require("../../../models/Operators");
const PayOptions_1 = require("../../../models/PayOptions");
const Languages_1 = require("../../../models/Languages");
const Countries_1 = require("../../../models/Countries");
const req_operators_dto_1 = require("../../../dto/req-operators.dto");
const UsersOperators_1 = require("../../../models/UsersOperators");
const login_dto_1 = require("../../../dto/login.dto");
const user_validator_dto_1 = require("../../../dto/user-validator.dto");
let OperatorController = class OperatorController {
    constructor(operatorService) {
        this.operatorService = operatorService;
    }
    listOperator() {
        return this.operatorService.listOperator();
    }
    createOperator(req) {
        return this.operatorService.createOperator(req);
    }
    createSupportLanguages(req) {
        return this.operatorService.createSupportLanguages(req);
    }
    listSupportLanguagesByOperator(idOperator) {
        return this.operatorService.listSupportLanguagesByOperator(idOperator);
    }
    createSupportLanguagesOne(req) {
        return this.operatorService.createSupportLanguagesOne(req);
    }
    createPayOptions(req) {
        return this.operatorService.createPayOptions(req);
    }
    listPayOptions() {
        return this.operatorService.listPayOptions();
    }
    createLanguages(req) {
        return this.operatorService.createLanguages(req);
    }
    listLanguages() {
        return this.operatorService.listLanguages();
    }
    createCountries(req) {
        return this.operatorService.createCountries(req);
    }
    listCountries() {
        return this.operatorService.listCountries();
    }
    async agregarNuevoOperador(req) {
        return this.operatorService.agregarNuevoOperador(req);
    }
    findById(id) {
        return this.operatorService.findById(id);
    }
    findByUserAndPass(login) {
        console.log(login);
        return this.operatorService.findByUserAndPass(login.user, login.pass);
    }
    findUserOperatorByOperator(id) {
        return this.operatorService.findUserOperatorByOperator(id);
    }
    async findByLanguage(idLanguage) {
        return await this.operatorService.findByLanguage(idLanguage);
    }
    async registerUserOperator(userOperator) {
        return await this.operatorService.registerUserOperator(userOperator);
    }
    async enableOperator(id) {
        console.log(id);
        return await this.operatorService.enableOperator(id);
    }
    async ejemplo(idLanguage) {
        return this.operatorService.ejemplo(idLanguage);
    }
    findUserByIdAndEmail(request) {
        return this.operatorService.findUserByIdAndEmail(request);
    }
    validateEmail(email) {
        return this.operatorService.validateEmail(email);
    }
};
__decorate([
    common_1.Get('list-operator'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "listOperator", null);
__decorate([
    common_1.Post('create-operator'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Operators_1.Operators]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "createOperator", null);
__decorate([
    common_1.Post('create-support-languages'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "createSupportLanguages", null);
__decorate([
    common_1.Get('list-support-languages-by-operator/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "listSupportLanguagesByOperator", null);
__decorate([
    common_1.Post('create-support-language-one'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SupportLanguages_1.SupportLanguages]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "createSupportLanguagesOne", null);
__decorate([
    common_1.Post('create-pay-options'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PayOptions_1.PayOptions]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "createPayOptions", null);
__decorate([
    common_1.Get('list-pay-options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "listPayOptions", null);
__decorate([
    common_1.Post('create-languages'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Languages_1.Languages]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "createLanguages", null);
__decorate([
    common_1.Get('list-languages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "listLanguages", null);
__decorate([
    common_1.Post('create-countries'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Countries_1.Countries]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "createCountries", null);
__decorate([
    common_1.Get('list-countries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "listCountries", null);
__decorate([
    common_1.Post('register-operator'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_operators_dto_1.ReqOperatorsDto]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "agregarNuevoOperador", null);
__decorate([
    common_1.Get('operator-by-id/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "findById", null);
__decorate([
    common_1.Post('login-operator'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "findByUserAndPass", null);
__decorate([
    common_1.Get('user-operator-by-operator/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "findUserOperatorByOperator", null);
__decorate([
    common_1.Get('operator-by-language/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "findByLanguage", null);
__decorate([
    common_1.Post('create-user-operator'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsersOperators_1.UsersOperators]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "registerUserOperator", null);
__decorate([
    common_1.Get('enable-operator/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "enableOperator", null);
__decorate([
    common_1.Get('ejemplo/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "ejemplo", null);
__decorate([
    common_1.Post('operator-validate'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_dto_1.UserValidator]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "findUserByIdAndEmail", null);
__decorate([
    common_1.Get('email-validate/:email'),
    __param(0, common_1.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "validateEmail", null);
OperatorController = __decorate([
    common_1.Controller('operator'),
    __metadata("design:paramtypes", [operator_service_1.OperatorService])
], OperatorController);
exports.OperatorController = OperatorController;
//# sourceMappingURL=operator.controller.js.map