import { SupportLanguages } from './../models/SupportLanguages';
import { Operators } from '../models/Operators';
export interface ReqOperatorsDto {
    operator: Operators;
    languages: Array<SupportLanguages>
}