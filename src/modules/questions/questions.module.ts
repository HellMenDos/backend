import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersServices } from '../../services/users/users.services';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtServices } from '../../services/auth/jwt.services';

import { QuestionsController } from './questions.controller';

import { QuestionsEntity } from '../../entity/Questions.entity';
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
