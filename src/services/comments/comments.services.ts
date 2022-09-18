import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommentsDto } from './comments.dto';
import { UsersServices } from '../users/users.services';
import { CommentsEntity } from '../../entity/Comments.entity';
import { QuestionsServices } from "../questions/questions.services";


@Injectable()
export class CommentsServices {
    constructor(
        @InjectRepository(CommentsEntity) 
        private comment: Repository<CommentsEntity>,
        private user: UsersServices,
        private question: QuestionsServices
    ) {}

    public getAll(): Promise<CommentsEntity[] | []> {
        return this.comment.find({ relations: ['user'] })
    }

    public async get(params: Partial<CommentsEntity>): Promise<CommentsEntity[] | undefined> {
        return await this.comment.find({ where: params, relations: ['user'] })
    }

    public async getById(id: number): Promise<CommentsEntity | undefined> {
        return await this.comment.findOne({ where: { id: id } })
    }
    
    public async create(data: CommentsDto): Promise<CommentsEntity> {
        const user = await this.user.getById(data.user)

        return this.comment.save({
            ...data,
            user: user,
        })
    }

    public async update(data: CommentsDto & { id: number }): Promise<CommentsEntity> {
        const user = await this.user.getById(data.user)

        return this.comment.save({
            ...data,
            user: user,
        })
    }
}