import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersServices } from '../../services/users/users.services';
import { AuthServices } from '../../services/auth/auth.services';
import { JwtServices } from '../../services/auth/jwt.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [
        UsersServices,
        AuthServices,
        JwtServices,
    ],
    controllers:[UsersController]
})
export class UsersModule {}
