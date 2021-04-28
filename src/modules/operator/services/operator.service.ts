import { ResOperadorDto } from './../../../dto/res-operador.dto';
import { SupportLanguages } from './../../../models/SupportLanguages';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Operators } from '../../../models/Operators';
import { UsersOperators } from '../../../models/UsersOperators';
import * as moment from 'moment';
import { ReqOperatorsDto } from '../../../dto/req-operators.dto';
import { GlobalDto } from '../../../dto/global.dto';
import { Languages } from '../../../models/Languages';
import { Countries } from '../../../models/Countries';
import { PayOptions } from '../../../models/PayOptions';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class OperatorService {
    constructor(
        @InjectRepository(Operators)
        private readonly _operatorRepository: Repository<Operators>,
        @InjectRepository(UsersOperators)
        private readonly _userOperatorRepository: Repository<UsersOperators>,
        @InjectRepository(SupportLanguages)
        private readonly _supportLanguagesRepository: Repository<SupportLanguages>,
        @InjectRepository(Languages)
        private readonly _languagesRepository: Repository<Languages>,
        @InjectRepository(Countries)
        private readonly _countriesRepository: Repository<Countries>,
        @InjectRepository(PayOptions)
        private readonly _payOptionsRepository: Repository<PayOptions>,
    ){}
    listOperator(): Promise<Array<Operators>> {
        return this._operatorRepository.find();
    }
    createOperator(req: Operators): Promise<Operators>{
        req.date = new Date();
        if(req.state === undefined){
            req.state = true;
        }
        return this._operatorRepository.save(req);
    }
    createSupportLanguages(req: SupportLanguages[]): Promise<SupportLanguages[]> {
        for (let index = 0; index < req.length; index++) {
            req[index].registerDate = new Date();
            if(req[index].state === undefined){
                req[index].state = true;
            }
            
        }
        return this._supportLanguagesRepository.save(req);
    }
    listSupportLanguagesByOperator(idOperator: string): Promise<SupportLanguages[]> {
        return this._supportLanguagesRepository.find({idOperator: idOperator, state: true});
    }
    createSupportLanguagesOne(req: SupportLanguages): Promise<SupportLanguages> {
        if(req.state=== undefined){
            req.state = true;
        }
        req.registerDate = new Date();
        return this._supportLanguagesRepository.save(req);
    }
    createPayOptions(req: PayOptions): Promise<PayOptions> {
        if(req.state=== undefined){
            req.state = true;
        }
        return this._payOptionsRepository.save(req);
    }
    listPayOptions(): Promise<PayOptions[]> {
        return this._payOptionsRepository.find({state: true});
    }
    createLanguages(req: Languages): Promise<Languages> {
        if(req.state === undefined){
            req.state = true;
        }
        return this._languagesRepository.save(req);
    }
    listLanguages():Promise<Languages[]>{
        return this._languagesRepository.find({state: true});
    }
    createCountries(req: Countries):Promise<Countries> {
        if(req.state === undefined){
            req.state = true;
        }
        req.registerDate = new Date();
        return this._countriesRepository.save(req);
    }
    listCountries():Promise<Countries[]>{
        return this._countriesRepository.find({state: true});
    }
    async agregarNuevoOperador(req: ReqOperatorsDto): Promise<ResOperadorDto> {
        const res: ResOperadorDto = <ResOperadorDto>{};
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const operatorsRepository = queryRunner.manager.getRepository(Operators);
        const supportLanguagesRepository = queryRunner.manager.getRepository(SupportLanguages);
        try {
            
            const fechaActual = new Date(moment(new Date(), 'YYYY-MM-DD HH:mm').toDate());
            req.operator.state = true;
            req.operator.date = new Date();
            const newOperator: Operators = await operatorsRepository.save(req.operator);
            /*for (const iterator of req.languages) {
                iterator.idOperator = newOperator.idOperator;
            }*/
            res.operator = newOperator;
            for (let index = 0; index < req.languages.length; index++) {
                req.languages[index].idOperator= newOperator.idOperator;
                req.languages[index].registerDate = new Date();
                req.languages[index].state = true;
            }
            await supportLanguagesRepository.save(req.languages);
            await queryRunner.commitTransaction();
            res.message = '';
            res.state = true;
        }catch(err) {
            await queryRunner.rollbackTransaction();
            console.log('error BD: al registrar en la base de datos, ' + err);
            res.message = 'error BD: al registrar en la base de datos';
            res.state = false;
        }
        return res;
    }
    findById(id: string): Promise<Operators> {
        return this._operatorRepository.findOne({idOperator: id});
    }
    findByUserAndPass(user: string, pass: string): Promise<Operators> {
        return this._operatorRepository.findOne({email: user, pass: pass});
    }
    findUserOperatorByOperator(id: string): Promise<Array<UsersOperators>> {
        return this._userOperatorRepository.find({idOperator: id, state: true});
    }
    async registerUserOperator(userOperator: UsersOperators): Promise<UsersOperators>{
        userOperator.state = true;
        userOperator.qualification = 5;
        userOperator.comments = "Client call to operator.";
        userOperator.registrationDate = new Date();
        return await this._userOperatorRepository.save(userOperator);
    }
    async findByLanguage(idLanguage: string): Promise<Array<Operators>> {
        return await this._operatorRepository.query(`
                SELECT o.* FROM operators o, support_languages sl, languages lan
                where lan.id_language = sl.id_language
                and sl.id_operator = o.id_operator
                and lan.id_language = `+ idLanguage+`
                and o.state= true;`);
    }
}
