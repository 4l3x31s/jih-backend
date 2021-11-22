import { Languages } from "./Languages";
import { PayOptions } from "./PayOptions";
import { UsersOperators } from "./UsersOperators";
export declare class Users {
    idUser: string;
    idPayOption: string;
    idLanguage: string;
    idCountry: string | null;
    name: string;
    phone: string;
    email: string;
    pass: string;
    registrationDate: Date;
    state: boolean;
    idLanguage2: Languages;
    idPayOption2: PayOptions;
    usersOperators: UsersOperators[];
}
