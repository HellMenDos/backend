import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersServices } from '../../services/users/users.services';
import { AuthServices } from '../../services/auth/auth.services';
import { JwtServices } from '../../services/auth/jwt.services';
import { SupportsServices } from '../../services/support/supports.services';

import { UsersController } from './users.controller';
import { SupportsController } from './supports.controller';

import { UserEntity } from '../../entity/Users.entity';
import { QuestionsEntity } from '../../entity/Questions.entity';
import { FavouriteEntity } from '../../entity/Favourite.entity';
import { CommentsEntity } from '../../entity/Comments.entity';
import { SupportsEntity } from '../../entity/Support.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            QuestionsEntity,
            FavouriteEntity,
            CommentsEntity,
            SupportsEntity
    ])],
    providers: [
        UsersServices,
        AuthServices,
        JwtServices,
        SupportsServices
    ],
    controllers:[
        UsersController,
        SupportsController
    ]
})
export class UsersModule {
}
