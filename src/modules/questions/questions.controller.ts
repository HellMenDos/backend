import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { QuestionsDto } from '../../services/questions/questions.dto';

@Controller('questions')
export class QuestionsController {
    constructor(private questions: QuestionsServices) {}

    @Get()
    getAll() {
        return this.questions.getAll()
    }

    @UseGuards(JwtTokenGuard)
    @Post()
    create(@Body() data: QuestionsDto) {
        return this.questions.push(data)
    }
}
