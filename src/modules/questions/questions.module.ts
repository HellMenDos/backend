import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtServices } from '../../services/auth/jwt.services';

@Module({
  providers: [
    QuestionsServices,
    JwtServices
  ],
  controllers: [QuestionsController]
})
export class QuestionsModule {}
