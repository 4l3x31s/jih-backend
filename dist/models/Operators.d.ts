import { Countries } from "./Countries";
import { SupportLanguages } from "./SupportLanguages";
import { UsersOperators } from "./UsersOperators";
export declare class Operators {
    idOperator: string;
    idCountry: string;
    name: string;
    pass: string;
    phoneNumber: string;
    email: string;
    date: Date;
    state: number;
    idCountry2: Countries;
    supportLanguages: SupportLanguages[];
    usersOperators: UsersOperators[];
}
