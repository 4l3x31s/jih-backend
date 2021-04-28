import { GlobalDto } from './global.dto';

import { Operators } from '../models/Operators';
export interface ResOperadorDto extends GlobalDto{
    operator: Operators;
}