import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './modules/comments/comments.module';
import { FavouritesModule } from './modules/favourites/favourites.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule, 
    QuestionsModule,
    CommentsModule,
    FavouritesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
