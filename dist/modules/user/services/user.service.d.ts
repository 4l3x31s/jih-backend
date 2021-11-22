import { Repository } from 'typeorm/repository/Repository';
import { Users } from '../../../models/Users';
import { UsersOperators } from '../../../models/UsersOperators';
import { GlobalDto } from '../../../dto/global.dto';
import { UserValidator } from '../../../dto/user-validator.dto';
import { Countries } from '../../../models/Countries';
export declare class UserService {
    private readonly _usersRepository;
    private readonly _usersOperatorsRepository;
    private readonly _countriesRepository;
    constructor(_usersRepository: Repository<Users>, _usersOperatorsRepository: Repository<UsersOperators>, _countriesRepository: Repository<Countries>);
    createUser(user: Users): Promise<Users>;
    findUserByUserPass(user: string, pass: string): Promise<Users>;
    findUserOperatorByUser(idUser: string): Promise<UsersOperators[]>;
    createUserOperators(userOperator: UsersOperators): Promise<UsersOperators>;
    findUserByIdAndEmail(request: UserValidator): Promise<GlobalDto>;
    validateEmail(email: string): Promise<GlobalDto>;
}
