import { Body, Controller, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersServices } from '../../services/users/users.services';
import { UsersDto } from '../../services/users/users.dto';
import { AuthServices } from '../../services/auth/auth.services';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { JwtRefreshGuard } from '../../services/auth/jwt-refresh.guard';

import { ApiTags } from '@nestjs/swagger';
import { ExcludeSerializer } from 'src/excludeSerializer';

@ApiTags('users')
@UseInterceptors(ExcludeSerializer)
@Controller('users')
export class UsersController {
    constructor(
        private users: UsersServices,
        private auth: AuthServices) {}


    @UseGuards(JwtTokenGuard)
    @Get()
    public getAll(): Promise<UsersDto[] | undefined> {
        return this.users.getAll()
    }

    @Post('signin')
    public signIn(@Body() { email, password }: Omit<UsersDto, 'phone'>) {
        return this.auth.login(email, password)
    }

    @Post('forget')
    public forget(@Body() { email }: { email: string }) {
        return this.auth.forget(email)
    }

    @Post('signup')
    public signUp(@Body() user: UsersDto) {
        return this.auth.registration(user)
    }

    @Get('verify/:token')
    public async verify(@Param('token') token: string) {
        if(await this.auth.verify(token)) {
            return 'User verified'
        }else {
            return 'Something wrong'
        }
    }

    @UseGuards(JwtRefreshGuard)
    @Post('refresh')
    public refreshData(@Body('user') user: number) {
        return this.auth.refreshTokens(user)
    }


    @UseGuards(JwtTokenGuard)
    @Get('me')
    public me(@Body('user') id: number) {
        return this.users.getById(id)
    }

    @UseGuards(JwtTokenGuard)
    @Put('me')
    public async update(@Body() data: UsersDto & { user: number }) {
        return this.users.update({
            ...data,
            id: data.user
        })
    }
}
