/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm/repository/Repository';
import { Users } from '../../../models/Users';
import { UsersOperators } from '../../../models/UsersOperators';
import { GlobalDto } from '../../../dto/global.dto';
import { UserValidator } from '../../../dto/user-validator.dto';

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
    async findUserByIdAndEmail(request: UserValidator):Promise<GlobalDto> {
        let response: GlobalDto = <GlobalDto>{};
        const userResponse = await this._usersRepository.findOne({idUser: request.idUser, email: request.user, state: true});
        if(userResponse){
            response.message = "";
            response.state = true;
        } else {
            response.message = "El usuario no se encuentra disponible.";
            response.state = false;
        }
        return response;
    }
    async validateEmail(email: string): Promise<GlobalDto>{
        let response: GlobalDto = <GlobalDto>{};
        const responseEmail = await this._usersRepository.find({email: email, state: true});
        if(responseEmail){
            response.message = "El correo ya está registrado intenta con otro.";
            response.state = false;
        } else {
            response.message = "";
            response.state = true;
        }

        return response;
    }
}
