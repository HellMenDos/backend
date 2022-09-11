import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { QuestionsEntity } from '../../entity/Questions.entity';
import { QuestionsDto } from './questions.dto';
import { UsersServices } from '../users/users.services';

@Injectable()
export  class QuestionsServices {
    constructor(
        @InjectRepository(QuestionsEntity) 
        private question: Repository<QuestionsEntity>,
        private user: UsersServices
    ) {}

    public getAll(): Promise<QuestionsEntity[] | []> {
        return this.question.find({ relations: ['user'] })
    }

    public async get(params: Partial<QuestionsEntity>): Promise<QuestionsEntity | undefined> {
        return await this.question.findOne({ where: params, relations: ['user'] })
    }

    public async getById(id: number): Promise<QuestionsEntity | undefined> {
        return await this.question.findOne({ where: { id: id } })
    }
    
    public async create(data: QuestionsDto): Promise<QuestionsEntity> {
        const user = await this.user.getById(data.user)
        return this.question.save({
            ...data,
            user: user
        })
    }

    public async update(data: QuestionsDto & { id: number }): Promise<QuestionsEntity> {
        const user = await this.user.getById(data.user)
        return this.question.save({
            ...data,
            user: user
        })
    }
}