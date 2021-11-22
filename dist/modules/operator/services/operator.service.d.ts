import { GlobalDto } from './../../../dto/global.dto';
import { ResOperadorDto } from './../../../dto/res-operador.dto';
import { SupportLanguages } from './../../../models/SupportLanguages';
import { Operators } from '../../../models/Operators';
import { UsersOperators } from '../../../models/UsersOperators';
import { ReqOperatorsDto } from '../../../dto/req-operators.dto';
import { Languages } from '../../../models/Languages';
import { Countries } from '../../../models/Countries';
import { PayOptions } from '../../../models/PayOptions';
import { Repository } from 'typeorm/repository/Repository';
import { OperatorAvailableDto } from '../../../dto/operator-available.dto';
import { UserValidator } from '../../../dto/user-validator.dto';
export declare class OperatorService {
    private readonly _operatorRepository;
    private readonly _userOperatorRepository;
    private readonly _supportLanguagesRepository;
    private readonly _languagesRepository;
    private readonly _countriesRepository;
    private readonly _payOptionsRepository;
    constructor(_operatorRepository: Repository<Operators>, _userOperatorRepository: Repository<UsersOperators>, _supportLanguagesRepository: Repository<SupportLanguages>, _languagesRepository: Repository<Languages>, _countriesRepository: Repository<Countries>, _payOptionsRepository: Repository<PayOptions>);
    listOperator(): Promise<Array<Operators>>;
    createOperator(req: Operators): Promise<Operators>;
    createSupportLanguages(req: SupportLanguages[]): Promise<SupportLanguages[]>;
    listSupportLanguagesByOperator(idOperator: string): Promise<SupportLanguages[]>;
    createSupportLanguagesOne(req: SupportLanguages): Promise<SupportLanguages>;
    createPayOptions(req: PayOptions): Promise<PayOptions>;
    listPayOptions(): Promise<PayOptions[]>;
    createLanguages(req: Languages): Promise<Languages>;
    listLanguages(): Promise<Languages[]>;
    createCountries(req: Countries): Promise<Countries>;
    listCountries(): Promise<Countries[]>;
    enableOperator(id: string): Promise<Operators>;
    agregarNuevoOperador(req: ReqOperatorsDto): Promise<ResOperadorDto>;
    findById(id: string): Promise<Operators>;
    findByUserAndPass(user: string, pass: string): Promise<Operators>;
    findUserOperatorByOperator(id: string): Promise<Array<UsersOperators>>;
    registerUserOperator(userOperator: UsersOperators): Promise<UsersOperators>;
    findByLanguage(idLanguage: string): Promise<OperatorAvailableDto>;
    changeStateById(idOperator: string): Promise<GlobalDto>;
    ejemplo(idLanguage: string): Promise<Operators[]>;
    findUserByIdAndEmail(request: UserValidator): Promise<GlobalDto>;
    validateEmail(email: string): Promise<GlobalDto>;
}