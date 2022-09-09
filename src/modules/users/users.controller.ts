import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsersServices } from '../../services/users/users.services';
import { UsersDto } from '../../services/users/users.dto';
import { AuthServices } from '../../services/auth/auth.services';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { JwtRefreshGuard } from '../../services/auth/jwt-refresh.guard';

@Controller('users')
export class UsersController {
    constructor(
        private users: UsersServices,
        private auth: AuthServices) {}

    @Get()
    public getAll() {
        return this.users.getAll()
    }

    @Post('signin')
    public signIn(@Body() { email, password }: UsersDto) {
        return this.auth.login(email, password)
    }

    @Post('signup')
    public signUp(@Body() user: UsersDto) {
        return this.auth.registration(user)
    }

    @UseGuards(JwtRefreshGuard)
    @Post('refresh')
    public refreshData(@Body('user') user: string) {
        return this.auth.refreshTokens(user)
    }


    @UseGuards(JwtTokenGuard)
    @Get('me')
    public me() {
        return this.users.getAll()
    }
}
