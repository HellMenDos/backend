import { Body, Controller, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { UsersServices } from '../../services/users/users.services';
import { CommentsServices } from './../../services/comments/comments.services';
import { CommentsDto } from '../../services/comments/comments.dto';

import { ApiTags } from '@nestjs/swagger';
import { ExcludeSerializer } from 'src/excludeSerializer';

@ApiTags('comments')
@UseInterceptors(ExcludeSerializer)
@Controller('comments')
export class CommentsController {
    constructor(
        private comments: CommentsServices,
        private user: UsersServices
    ) {}

    @UseGuards(JwtTokenGuard)
    @Get()
    public async getAll(@Body('user') userId: number) {
        const user = await this.user.getById(userId)
        return this.comments.get({ user: user })
    }

    @Get('/:id')
    public async get(@Param("id") id: string) {
        return this.comments.get({ questionId: id })
    }
    
    @UseGuards(JwtTokenGuard)
    @Post()
    public async create(@Body() data: CommentsDto) {
        return this.comments.create(data)
    }

    @UseGuards(JwtTokenGuard)
    @Put('/:id')
    public async update(@Body() data: CommentsDto, @Param("id") id: number) {
        return this.comments.update({
            ...data,
            id
        })
    }
}
