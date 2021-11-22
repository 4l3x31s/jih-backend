import { UserValidator } from '../../../dto/user-validator.dto';
import { UserService } from '../services/user.service';
import { Users } from '../../../models/Users';
import { LoginDto } from '../../../dto/login.dto';
import { UsersOperators } from '../../../models/UsersOperators';
import { GlobalDto } from '../../../dto/global.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(user: Users): Promise<Users>;
    findUserByUserPass(login: LoginDto): Promise<Users>;
    findUserOperatorByUser(idUser: string): Promise<UsersOperators[]>;
    createUserOperators(userOperator: UsersOperators): Promise<UsersOperators>;
    findUserByIdAndEmail(request: UserValidator): Promise<GlobalDto>;
    validateEmail(email: string): Promise<GlobalDto>;
}
