import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersServices } from '../users/users.services';
import { UsersDto } from '../users/users.dto';
import { JwtServices } from './jwt.services';
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcryptjs';

@Injectable()
export  class AuthServices {
    constructor(
        private user: UsersServices,
        private jwt: JwtServices,
        private mail: MailerService) {}

    public async verify(token: string): Promise<boolean> {
        const user = await this.user.getByToken(token)
        if(user) {
            user.verify = true
            user.verifyToken = ''
            user.save()
            return true
        }else {
            return false
        } 
    }


    public async forget(email: string) {
        const new_password = Math.random().toString(36).slice(2)
        const user = await this.user.getByEmail(email)
        if(user) {
            user.password = bcrypt.hashSync(new_password, 8)
            user.save()

            this.mail.sendMail({
                to: user.email, 
                from: 'poznkirill3@mail.ru',
                subject: 'Ваш новый пароль', 
                text: 'Ваш новый пароль', 
                html: `Пароль ${new_password}`, 
            }).then((data) => console.log(data))
            return { send: true }
        }else {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Пользователь не найден',
            }, 400);
        }

    }

    public async login(email: string, password: string) {
        const user = await this.user.get({ email, password })
        if(user) {
            if(user.verify) {
                return this.jwt.signData(user.id)
            }else {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Пользователь не подтвержден, проверьте почту',
                }, 400);
            }
        }else {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Пользователь не найден',
            }, 400);
        }
    }

    public async registration({email, password, name, phone}: UsersDto) {
        const userData = await this.user.create({email, password, name, phone})
        this.mail.sendMail({
            to: userData.email, 
            from: 'poznkirill3@mail.ru',
            subject: 'Подтвердите ваш аккаунт', 
            text: 'Подтвердите ваш аккаунт по ссылке', 
            html: `<a href="http://localhost:4000/users/verify/${userData.verifyToken}">Подтвердить</a>`, 
        })
        return { create: true }
    }

    
    public async refreshTokens(id: number) {
        const user = await this.user.getById(id)
        
        if(user) {
            return this.jwt.signData(user.id)
        }else {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'User not founded',
            }, 404);
        }
    }
}