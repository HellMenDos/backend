import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { UsersServices } from '../../services/users/users.services';
import { FavouritesServices } from '../../services/favourite/favourite.services';
import { FavouriteDto } from '../../services/favourite/favourite.dto';
import { ApiTags } from '@nestjs/swagger';
import { ExcludeSerializer } from 'src/excludeSerializer';
import { QuestionsServices } from '../../services/questions/questions.services';

@ApiTags('favourites')
@UseInterceptors(ExcludeSerializer)
@Controller('favourites')
export class FavouritesController {
    constructor(
        private favourite: FavouritesServices,
        private user: UsersServices,
        private question: QuestionsServices

    ) {}

    @UseGuards(JwtTokenGuard)
    @Get()
    public async getAll(@Body('user') userId: number) {
        const user = await this.user.getById(userId)
        return await this.favourite.get({ user: user })
    }

    @UseGuards(JwtTokenGuard)
    @Get('/:id')
    public async getOne(@Param("id") id: string) {
        return this.favourite.get({ questionId: id })
    }

    @UseGuards(JwtTokenGuard)
    @Post()
    public async create(@Body() data: FavouriteDto) {
        return this.favourite.create(data)
    }

    @UseGuards(JwtTokenGuard)
    @Delete('/:id')
    public async delete(@Param('id') id: number) {
        return this.favourite.delete(id)
    }

}
