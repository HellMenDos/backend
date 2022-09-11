import { Injectable } from "@nestjs/common";
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

        if(data && bcrypt.compareSync(password, data.password)) {
            return data
        }
        
        return;
    }


    public async getById(id: number): Promise<UserEntity | undefined> {
        return await this.user.findOne({ where: { id: id } })
    }

    public create(user: UsersDto): Promise<UserEntity> {
        const password = bcrypt.hashSync(user.password, 8)
        return this.user.save({
            ...user,
            password: password
        })
    }

    public update(user: UsersDto & { id: number }): Promise<UserEntity> {
        const password = bcrypt.hashSync(user.password, 8)
        return this.user.save({
            ...user,
            password: password
        })
    }
}