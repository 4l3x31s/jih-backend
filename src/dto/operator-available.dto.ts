import { GlobalDto } from './global.dto';

import { Operators } from '../models/Operators';
export interface OperatorAvailableDto extends GlobalDto {
    operator: Operators
}