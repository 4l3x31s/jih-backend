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
exports.OperatorService = void 0;
const SupportLanguages_1 = require("./../../../models/SupportLanguages");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Operators_1 = require("../../../models/Operators");
const UsersOperators_1 = require("../../../models/UsersOperators");
const moment = require("moment");
const Languages_1 = require("../../../models/Languages");
const Countries_1 = require("../../../models/Countries");
const PayOptions_1 = require("../../../models/PayOptions");
const Repository_1 = require("typeorm/repository/Repository");
let OperatorService = class OperatorService {
    constructor(_operatorRepository, _userOperatorRepository, _supportLanguagesRepository, _languagesRepository, _countriesRepository, _payOptionsRepository) {
        this._operatorRepository = _operatorRepository;
        this._userOperatorRepository = _userOperatorRepository;
        this._supportLanguagesRepository = _supportLanguagesRepository;
        this._languagesRepository = _languagesRepository;
        this._countriesRepository = _countriesRepository;
        this._payOptionsRepository = _payOptionsRepository;
    }
    listOperator() {
        return this._operatorRepository.find();
    }
    createOperator(req) {
        req.date = new Date();
        if (req.state === undefined) {
            req.state = 1;
        }
        return this._operatorRepository.save(req);
    }
    createSupportLanguages(req) {
        for (let index = 0; index < req.length; index++) {
            req[index].registerDate = new Date();
            if (req[index].state === undefined) {
                req[index].state = true;
            }
        }
        return this._supportLanguagesRepository.save(req);
    }
    listSupportLanguagesByOperator(idOperator) {
        return this._supportLanguagesRepository.find({
            idOperator: idOperator,
            state: true,
        });
    }
    createSupportLanguagesOne(req) {
        if (req.state === undefined) {
            req.state = true;
        }
        req.registerDate = new Date();
        return this._supportLanguagesRepository.save(req);
    }
    createPayOptions(req) {
        if (req.state === undefined) {
            req.state = true;
        }
        return this._payOptionsRepository.save(req);
    }
    listPayOptions() {
        return this._payOptionsRepository.find({ state: true });
    }
    createLanguages(req) {
        if (req.state === undefined) {
            req.state = true;
        }
        return this._languagesRepository.save(req);
    }
    listLanguages() {
        return this._languagesRepository.find({ state: true });
    }
    createCountries(req) {
        if (req.state === undefined) {
            req.state = true;
        }
        req.registerDate = new Date();
        return this._countriesRepository.save(req);
    }
    listCountries() {
        return this._countriesRepository.find({ state: true });
    }
    async enableOperator(id) {
        let operator = await this.findById(id);
        if (operator.state === 3) {
            operator.state = 1;
            return this._operatorRepository.save(operator);
        }
        return this.findById(id);
    }
    async agregarNuevoOperador(req) {
        const res = {};
        const connection = typeorm_2.getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const operatorsRepository = queryRunner.manager.getRepository(Operators_1.Operators);
        const supportLanguagesRepository = queryRunner.manager.getRepository(SupportLanguages_1.SupportLanguages);
        try {
            const fechaActual = new Date(moment(new Date(), 'YYYY-MM-DD HH:mm').toDate());
            req.operator.state = 1;
            req.operator.date = new Date();
            const newOperator = await operatorsRepository.save(req.operator);
            res.operator = newOperator;
            for (let index = 0; index < req.languages.length; index++) {
                req.languages[index].idOperator = newOperator.idOperator;
                req.languages[index].registerDate = new Date();
                req.languages[index].state = true;
            }
            await supportLanguagesRepository.save(req.languages);
            await queryRunner.commitTransaction();
            res.message = '';
            res.state = true;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            console.log('error BD: al registrar en la base de datos, ' + err);
            res.message = 'error BD: al registrar en la base de datos';
            res.state = false;
        }
        return res;
    }
    findById(id) {
        return this._operatorRepository.findOne({ idOperator: id });
    }
    findByUserAndPass(user, pass) {
        return this._operatorRepository.findOne({ email: user, pass: pass });
    }
    findUserOperatorByOperator(id) {
        return this._userOperatorRepository.find({ idOperator: id, state: true });
    }
    async registerUserOperator(userOperator) {
        userOperator.state = true;
        userOperator.qualification = 5;
        userOperator.comments = 'Client call to operator.';
        userOperator.registrationDate = new Date();
        return await this._userOperatorRepository.save(userOperator);
    }
    async findByLanguage(idLanguage) {
        const resp = {};
        try {
            const lstOperator = await this._operatorRepository
                .createQueryBuilder('operators')
                .leftJoin('operators.supportLanguages', 'supportLanguages')
                .leftJoin('supportLanguages.idLanguage2', 'languages')
                .where('languages.idLanguage = ' + idLanguage)
                .andWhere('operators.state = 1')
                .getOne();
            resp.operator = lstOperator;
            resp.state = true;
            resp.message = '';
            lstOperator.state = 3;
            this._operatorRepository.save(lstOperator);
        }
        catch (ex) {
            resp.state = false;
            resp.message = 'Error contact to Operator';
        }
        return resp;
    }
    async changeStateById(idOperator) {
        const res = {};
        try {
            const operator = await this._operatorRepository.findOneOrFail({
                idOperator: idOperator,
                state: 0,
            });
            if (operator.state === 1) {
                res.state = true;
                res.message = '';
            }
            else {
                operator.state = 1;
                this._operatorRepository.save(operator);
                res.state = true;
                res.message = '';
            }
        }
        catch (err) {
            res.state = false;
            res.message = '';
        }
        return res;
    }
    async ejemplo(idLanguage) {
        return this._operatorRepository
            .createQueryBuilder('operators')
            .leftJoin('operators.supportLanguages', 'supportLanguages')
            .leftJoin('supportLanguages.idLanguage2', 'languages')
            .where('languages.idLanguage = ' + idLanguage)
            .andWhere('operators.state = 1')
            .getMany();
    }
    async findUserByIdAndEmail(request) {
        let response = {};
        try {
            const userResponse = await this._operatorRepository.findOne({
                idOperator: request.idUser,
                email: request.user,
                state: 1,
            });
            if (userResponse) {
                response.message = '';
                response.state = true;
            }
            else {
                response.message = 'El usuario no se encuentra disponible.';
                response.state = false;
            }
        }
        catch (ex) {
            response.message = 'El usuario no se encuentra disponible.';
            response.state = false;
        }
        return response;
    }
    async validateEmail(email) {
        let response = {};
        try {
            const responseEmail = await this._operatorRepository.find({
                email: email,
                state: 1,
            });
            if (responseEmail) {
                response.message = 'El correo ya está registrado intenta con otro.';
                response.state = false;
            }
            else {
                response.message = '';
                response.state = true;
            }
        }
        catch (ex) {
            response.message = '';
            response.state = true;
        }
        return response;
    }
};
OperatorService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Operators_1.Operators)),
    __param(1, typeorm_1.InjectRepository(UsersOperators_1.UsersOperators)),
    __param(2, typeorm_1.InjectRepository(SupportLanguages_1.SupportLanguages)),
    __param(3, typeorm_1.InjectRepository(Languages_1.Languages)),
    __param(4, typeorm_1.InjectRepository(Countries_1.Countries)),
    __param(5, typeorm_1.InjectRepository(PayOptions_1.PayOptions)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository])
], OperatorService);
exports.OperatorService = OperatorService;
//# sourceMappingURL=operator.service.js.map