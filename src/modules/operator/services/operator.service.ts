import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operator } from '../../../models/Operator';
import { UserOperator } from '../../../models/UserOperator';
import { SupportLanguages } from '../../../models/SupportLanguages';

@Injectable()
export class OperatorService {
    constructor(
        @InjectRepository(Operator)
        private readonly _operatorRepository: Repository<Operator>,
        @InjectRepository(UserOperator)
        private readonly _userOperatorRepository: Repository<UserOperator>,
        @InjectRepository(SupportLanguages)
        private readonly _supportLanguagesRepository: Repository<SupportLanguages>
    ){}
    listOperator(): Promise<Array<Operator>> {
        return this._operatorRepository.find();
    }
    createOperator(req: Operator): Promise<Operator>{
        return this._operatorRepository.save(req);
    }
    findById(id: string): Promise<Operator> {
        return this._operatorRepository.findOne({idOperator: id});
    }
    findByUserAndPass(user: string, pass: string): Promise<Operator> {
        return this._operatorRepository.findOne({user: user, pass: pass});
    }
    findHistoryByOperator(id: string): Promise<Array<UserOperator>> {
        return this._userOperatorRepository.find({idOperator: id, state: true});
    }
    async findByLanguage(idLanguage: string): Promise<Operator> {
        return await this._operatorRepository.query(`
                SELECT o.* FROM operator o, support_languages sl, languages lan
                where lan.id_language = sl.id_language
                and sl.id_operator = o.id_operator
                and lan.id_language = `+ idLanguage+`
                and o.state= true;`);
    }
}
