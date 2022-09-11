import { Body, Controller, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { UsersServices } from '../../services/users/users.services';
import { FavouritesServices } from '../../services/favourite/favourite.services';
import { FavouriteDto } from '../../services/favourite/favourite.dto';
import { ApiTags } from '@nestjs/swagger';
import { ExcludeSerializer } from 'src/excludeSerializer';

@ApiTags('favourites')
@UseInterceptors(ExcludeSerializer)
@Controller('favourites')
export class FavouritesController {
    constructor(
        private comments: FavouritesServices,
        private user: UsersServices
    ) {}

    @Get()
    public async getAll(@Body('user') userId: number) {
        const user = await this.user.getById(userId)
        return this.comments.get({ user: user })
    }

    @Get('/:id')
    public async getOne(@Param("id") id: number) {
        return this.comments.getById(id)
    }
    @UseGuards(JwtTokenGuard)
    @Post()
    public async create(@Body() data: FavouriteDto) {
        return this.comments.create(data)
    }

    @UseGuards(JwtTokenGuard)
    @Put('/:id')
    public async update(@Body() data: FavouriteDto, @Param("id") id: number) {
        return this.comments.update({
            ...data,
            id
        })
    }
}
