import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtServices } from '../../services/auth/jwt.services';
import { UsersServices } from '../../services/users/users.services';
import { CommentsServices } from 'src/services/comments/comments.services';

import { CommentsController } from './comments.controller';

import { QuestionsEntity } from '../../entity/Questions.entity';
import { UserEntity } from '../../entity/Users.entity';
import { CommentsEntity } from '../../entity/Comments.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuestionsEntity,
      UserEntity,
      CommentsEntity
    ])
  ],
  providers: [
    CommentsServices,
    JwtServices, 
    UsersServices,
    QuestionsServices
  ],
  controllers: [CommentsController]
})
export class CommentsModule {}
