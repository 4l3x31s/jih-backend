import { Operators } from "./Operators";
export declare class Countries {
    idCountry: string;
    nameCountry: string;
    callingCode: string | null;
    alphaCode_2: string;
    alphaCode_3: string;
    registerDate: Date;
    state: boolean;
    operators: Operators[];
}
