import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './modules/comments/comments.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule, 
    QuestionsModule,
    CommentsModule,
    FavouritesModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mail.ru',
        port: 587,
        secure: false,
        auth: {
          user: "a.a-lito@mail.ru",
          pass: "2kcjfyaBzfYMSpM5WqB4",
        },
      },
      defaults: {
        from:'<a.a-lito@mail.ru>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
