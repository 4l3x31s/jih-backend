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
exports.UserController = void 0;
const user_validator_dto_1 = require("../../../dto/user-validator.dto");
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const Users_1 = require("../../../models/Users");
const login_dto_1 = require("../../../dto/login.dto");
const UsersOperators_1 = require("../../../models/UsersOperators");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(user) {
        console.log(user);
        return this.userService.createUser(user);
    }
    findUserByUserPass(login) {
        return this.userService.findUserByUserPass(login.user, login.pass);
    }
    findUserOperatorByUser(idUser) {
        return this.userService.findUserOperatorByUser(idUser);
    }
    createUserOperators(userOperator) {
        return this.userService.createUserOperators(userOperator);
    }
    findUserByIdAndEmail(request) {
        return this.userService.findUserByIdAndEmail(request);
    }
    validateEmail(email) {
        return this.userService.validateEmail(email);
    }
};
__decorate([
    common_1.Post('create-user'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Users_1.Users]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    common_1.Post('login-user'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserByUserPass", null);
__decorate([
    common_1.Get('operator-by-user/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserOperatorByUser", null);
__decorate([
    common_1.Get('create-user-operators'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsersOperators_1.UsersOperators]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUserOperators", null);
__decorate([
    common_1.Post('user-validate'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_validator_dto_1.UserValidator]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserByIdAndEmail", null);
__decorate([
    common_1.Get('email-validate/:email'),
    __param(0, common_1.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "validateEmail", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map