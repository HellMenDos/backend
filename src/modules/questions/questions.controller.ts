import { Body, Controller, Get, Param, Post, Put, Res, StreamableFile, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { QuestionsDto } from '../../services/questions/questions.dto';
import { UsersServices } from '../../services/users/users.services';
import { UserEntity } from '../../entity/Users.entity';
import { ApiTags } from '@nestjs/swagger';
import { ExcludeSerializer } from 'src/excludeSerializer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname, join } from 'path';
import { diskStorage } from 'multer';
import { createReadStream } from 'fs';



export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
  };
  
export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};

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
    @UseInterceptors(
        FileInterceptor('photo', {
          storage: diskStorage({
            destination: './media/questions/',
            filename: editFileName,
          }),
          fileFilter: imageFileFilter,
        }),
      )    
    @Post()
    public async create(@Body() data: QuestionsDto, @UploadedFile() file) {
        return this.questions.create({
            user: data.user,
            title: data.title,
            describe: data.describe,
            photo: file.originalname
        })
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


