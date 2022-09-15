import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entity/Users.entity";
import { Repository } from "typeorm";
import { UsersDto } from './users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export  class UsersServices {
    constructor(
        @InjectRepository(UserEntity) 
        private user: Repository<UserEntity>
    ) {}

    public getAll(): Promise<UsersDto[]> {
        
        return this.user.find()
    }

    public async get(params: Partial<UserEntity>): Promise<UserEntity | undefined> {
        const password = params.password
        delete params.password
        const data = await this.user.findOne({ where: params })

        if(data) {
            if(bcrypt.compareSync(password, data.password)) {
                return data
            }else {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Неверный пароль',
                }, 400);
            }
        }
        
        return;
    }

    public async getById(id: number): Promise<UserEntity | undefined> {
        return await this.user.findOne({ where: { id: id } })
    }

    public async getByToken(token: string): Promise<UserEntity | undefined> {
        return await this.user.findOne({ where: { verifyToken: token } })
    }

    public async getByEmail(email: string): Promise<UserEntity | undefined> {
        return await this.user.findOne({ where: { email: email } })
    }

    public async create(user: UsersDto): Promise<UserEntity> {
        const ifUserExist = await this.getByEmail(user.email)
        if(ifUserExist) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Такой пользователь уже существует',
            }, 400);
        }

        const password = bcrypt.hashSync(user.password, 8)
        return this.user.save({
            ...user,
            password: password,
            verifyToken: Math.random().toString(36).slice(2),
        })
    }

    public async update(user: UsersDto & { id: number }): Promise<UserEntity> {
        const usData = await this.get({ id: user.id, password: user.password })
        if(usData) {
            usData.email = user.email
            usData.phone = user.phone
            usData.name = user.name
            return usData.save()
        }
    }
}