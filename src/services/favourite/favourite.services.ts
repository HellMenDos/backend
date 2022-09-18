import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsersServices } from '../users/users.services';
import { QuestionsServices } from "../questions/questions.services";
import { FavouriteEntity } from '../../entity/Favourite.entity';
import { FavouriteDto } from "./favourite.dto";


@Injectable()
export class FavouritesServices {
    constructor(
        @InjectRepository(FavouriteEntity) 
        private favourite: Repository<FavouriteEntity>,
        private user: UsersServices,
        private question: QuestionsServices
    ) {}

    public getAll(): Promise<FavouriteEntity[] | []> {
        return this.favourite.find({ relations: ['user'] })
    }

    public async get(params: Partial<FavouriteEntity>): Promise<FavouriteEntity[] | undefined> {
        return await this.favourite.find({ where: params, relations: ['user'] })
    }

    public async getById(id: number): Promise<FavouriteEntity | undefined> {
        return await this.favourite.findOne({ where: { id: id } })
    }

    
    public async create(data: FavouriteDto): Promise<FavouriteEntity> {
        const user = await this.user.getById(data.user)
        
        return this.favourite.save({
            ...data,
            user: user,
        })
    }

    public async delete(id: number) {
        return await this.favourite.delete({ id })
    }

}