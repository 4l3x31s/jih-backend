import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Users } from '../../../models/Users';
import { UsersOperators } from '../../../models/UsersOperators';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private readonly _usersRepository: Repository<Users>,
        @InjectRepository(UsersOperators)
        private readonly _usersOperatorsRepository: Repository<UsersOperators>,
    ) { }

    createUser(user: Users): Promise<Users>{
        user.registrationDate = new Date();
        if(user.state === undefined) {
            user.state = true;
        }
        return this._usersRepository.save(user);
    }
    findUserByUserPass(user: string, pass: string):Promise<Users> {
        console.log(user)
        console.log(pass)
        return this._usersRepository.findOneOrFail({email: user, pass: pass, state: true});
    }
    findUserOperatorByUser(idUser: string): Promise<UsersOperators[]> {
        return this._usersOperatorsRepository.find({idUser: idUser});
    }
    createUserOperators(userOperator: UsersOperators): Promise<UsersOperators> {
        return this._usersOperatorsRepository.save(userOperator);
    }
}
