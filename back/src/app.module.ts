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
        host: 'smtp.beget.com',
        port: 465,
        secure: true,
        auth: {
          user: "alit@a-lit.ru",
          pass: "2K8*inNU",
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from:'<alit@a-lit.ru>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
