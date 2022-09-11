import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersServices } from '../users/users.services';
import { UsersDto } from '../users/users.dto';
import { JwtServices } from './jwt.services';

@Injectable()
export  class AuthServices {
    constructor(
        private user: UsersServices,
        private jwt: JwtServices) {}

    public async login(email: string, password: string) {
        const user = await this.user.get({ email, password })
        if(user) {
            return this.jwt.signData(user.id)
        }else {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
            }, 403);
        }
    }

    public async registration({email, password, name, phone}: UsersDto) {
        const userData = await this.user.create({email, password, name, phone})
        return this.jwt.signData(userData.id)
    }

    public async refreshTokens(id: number) {
        const user = await this.user.getById(id)
        
        if(user) {
            return this.jwt.signData(user.id)
        }else {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
            }, 403);
        }
    }
}