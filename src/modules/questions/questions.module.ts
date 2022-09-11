import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtServices } from '../../services/auth/jwt.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsEntity } from '../../entity/Questions.entity';
import { UsersServices } from '../../services/users/users.services';
import { UserEntity } from '../../entity/Users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuestionsEntity,
      UserEntity
    ])
  ],
  providers: [
    QuestionsServices,
    JwtServices, 
    UsersServices
  ],
  controllers: [QuestionsController]
})
export class QuestionsModule {}
