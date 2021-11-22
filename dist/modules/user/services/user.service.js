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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const Users_1 = require("../../../models/Users");
const UsersOperators_1 = require("../../../models/UsersOperators");
const Countries_1 = require("../../../models/Countries");
let UserService = class UserService {
    constructor(_usersRepository, _usersOperatorsRepository, _countriesRepository) {
        this._usersRepository = _usersRepository;
        this._usersOperatorsRepository = _usersOperatorsRepository;
        this._countriesRepository = _countriesRepository;
    }
    async createUser(user) {
        try {
            user.registrationDate = new Date();
            if (user.state === undefined) {
                user.state = true;
            }
            let country = await this._countriesRepository.findOne({ idCountry: user.idCountry });
            let newPhone = country.callingCode + user.phone;
            user.phone = newPhone;
            return this._usersRepository.save(user);
        }
        catch (ex) {
        }
    }
    findUserByUserPass(user, pass) {
        console.log(user);
        console.log(pass);
        return this._usersRepository.findOneOrFail({ email: user, pass: pass, state: true });
    }
    findUserOperatorByUser(idUser) {
        return this._usersOperatorsRepository.find({ idUser: idUser });
    }
    createUserOperators(userOperator) {
        return this._usersOperatorsRepository.save(userOperator);
    }
    async findUserByIdAndEmail(request) {
        let response = {};
        const userResponse = await this._usersRepository.findOne({ idUser: request.idUser, email: request.user, state: true });
        if (userResponse) {
            response.message = "";
            response.state = true;
        }
        else {
            response.message = "El usuario no se encuentra disponible.";
            response.state = false;
        }
        return response;
    }
    async validateEmail(email) {
        let response = {};
        console.log(email);
        const responseEmail = await this._usersRepository.findOne({ email: email, state: true });
        console.log(responseEmail);
        if (responseEmail) {
            response.message = "El correo ya está registrado intenta con otro.";
            response.state = false;
        }
        else {
            response.message = "";
            response.state = true;
        }
        console.log(response);
        return response;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Users_1.Users)),
    __param(1, typeorm_1.InjectRepository(UsersOperators_1.UsersOperators)),
    __param(2, typeorm_1.InjectRepository(Countries_1.Countries)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map