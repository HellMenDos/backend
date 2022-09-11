import { Body, Controller, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { QuestionsDto } from '../../services/questions/questions.dto';
import { UsersServices } from '../../services/users/users.services';
import { UserEntity } from '../../entity/Users.entity';
import { ApiTags } from '@nestjs/swagger';
import { ExcludeSerializer } from 'src/excludeSerializer';

@ApiTags('questions')
@UseInterceptors(ExcludeSerializer)
@Controller('questions')
export class QuestionsController {
    constructor(
        private questions: QuestionsServices,
        private user: UsersServices) {}

    @UseGuards(JwtTokenGuard)
    @Get()
    public async getAll(@Body('user') userId: number) {
        const user = await this.user.getById(userId)
        return this.questions.get({ user: user })
    }

    @Get('/:id')
    public async getOne(@Param("id") id: number) {
        return this.questions.getById(id)
    }
    @UseGuards(JwtTokenGuard)
    @Post()
    public async create(@Body() data: QuestionsDto) {
        return this.questions.create(data)
    }

    @UseGuards(JwtTokenGuard)
    @Put('/:id')
    public async update(@Body() data: QuestionsDto, @Param("id") id: number) {
        return this.questions.update({
            ...data,
            id
        })
    }
}
