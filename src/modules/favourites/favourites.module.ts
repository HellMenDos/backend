import { Module } from '@nestjs/common';
import { JwtServices } from '../../services/auth/jwt.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsEntity } from '../../entity/Questions.entity';
import { UsersServices } from '../../services/users/users.services';
import { UserEntity } from '../../entity/Users.entity';
import { CommentsServices } from 'src/services/comments/comments.services';
import { FavouriteEntity } from '../../entity/Favourite.entity';
import { FavouritesServices } from '../../services/favourite/favourite.services';
import { FavouritesController } from './favourites.controller';
import { QuestionsServices } from '../../services/questions/questions.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuestionsEntity,
      UserEntity,
      FavouriteEntity
    ])
  ],
  providers: [
    JwtServices, 
    UsersServices,
    FavouritesServices,
    QuestionsServices
  ],
  controllers: [FavouritesController]
})
export class FavouritesModule {}
