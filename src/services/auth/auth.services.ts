import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersServices } from '../users/users.services';
import { UsersDto } from '../users/users.dto';
import { JwtServices } from './jwt.services';

@Injectable()
export  class AuthServices {
    constructor(
        private user: UsersServices,
        private jwt: JwtServices) {}

    public login(email: string, password: string) {
        const user = this.user.find(email,password)

        if(user) {
            return this.jwt.signData(email)
        }else {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
            }, 403);
        }
    }

    public registration({email, password, name}: UsersDto) {
        this.user.push({email, password, name})
        return this.jwt.signData(email)
    }

    public refreshTokens(email: string) {
        const user = this.user.findByEmail(email)
        
        if(user) {
            return this.jwt.signData(email)
        }else {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
            }, 403);
        }
    }
}