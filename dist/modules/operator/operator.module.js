"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorModule = void 0;
const UsersOperators_1 = require("./../../models/UsersOperators");
const SupportLanguages_1 = require("./../../models/SupportLanguages");
const common_1 = require("@nestjs/common");
const operator_service_1 = require("./services/operator.service");
const operator_controller_1 = require("./controllers/operator.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Countries_1 = require("../../models/Countries");
const Languages_1 = require("../../models/Languages");
const Operators_1 = require("../../models/Operators");
const PayOptions_1 = require("../../models/PayOptions");
const Users_1 = require("../../models/Users");
let OperatorModule = class OperatorModule {
};
OperatorModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Countries_1.Countries,
                Languages_1.Languages,
                Operators_1.Operators,
                PayOptions_1.PayOptions,
                SupportLanguages_1.SupportLanguages,
                Users_1.Users,
                UsersOperators_1.UsersOperators
            ]),
        ],
        providers: [operator_service_1.OperatorService],
        controllers: [operator_controller_1.OperatorController]
    })
], OperatorModule);
exports.OperatorModule = OperatorModule;
//# sourceMappingURL=operator.module.js.map