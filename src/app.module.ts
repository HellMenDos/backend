import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule, 
    QuestionsModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
