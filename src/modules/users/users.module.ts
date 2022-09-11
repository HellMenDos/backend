import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersServices } from '../../services/users/users.services';
import { AuthServices } from '../../services/auth/auth.services';
import { JwtServices } from '../../services/auth/jwt.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/Users.entity';
import { QuestionsEntity } from '../../entity/Questions.entity';
import { FavouriteEntity } from '../../entity/Favourite.entity';
import { CommentsEntity } from '../../entity/Comments.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            QuestionsEntity,
            FavouriteEntity,
            CommentsEntity,
    ])],
    providers: [
        UsersServices,
        AuthServices,
        JwtServices,
    ],
    controllers:[UsersController]
})
export class UsersModule {
}
