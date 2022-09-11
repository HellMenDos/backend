import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtServices } from '../../services/auth/jwt.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsEntity } from '../../entity/Questions.entity';
import { UsersServices } from '../../services/users/users.services';
import { UserEntity } from '../../entity/Users.entity';
import { CommentsServices } from 'src/services/comments/comments.services';
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
