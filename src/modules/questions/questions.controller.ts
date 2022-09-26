import { Body, Controller, Get, Param, Post, Headers, UploadedFile, UseGuards, UseInterceptors, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { JwtServices } from '../../services/auth/jwt.services';
import { QuestionsServices } from '../../services/questions/questions.services';
import { JwtTokenGuard } from '../../services/auth/jwt-token.guard';
import { QuestionsDto } from '../../services/questions/questions.dto';
import { UsersServices } from '../../services/users/users.services';

import { ExcludeSerializer } from 'src/excludeSerializer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';



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
        private user: UsersServices,
        private jwt: JwtServices) {}

    @UseGuards(JwtTokenGuard)
    @Get()
    public async getAll(@Body('user') userId: number) {
        const user = await this.user.getById(userId)
        console.log(user)
        return this.questions.getAll({ user: user })
    }

    @Get('/:id')
    public async getOne(@Param("id") id: number) {
        return this.questions.getById(id)
    }


    @UseInterceptors(
        FileInterceptor('photo', {
          storage: diskStorage({
            destination: './media/questions/',
            filename: editFileName,
          }),
          fileFilter: imageFileFilter,
        }),
      )    
    @UseGuards(JwtTokenGuard)
    @Post()
    public async create(
      @Body() data: QuestionsDto, 
      @UploadedFile() file,
      @Headers() headers: Record <string, string>) {
        const token = headers['authorization'].split('Token')[1].trim()
        const user = this.jwt.verifyData(token.trim())

        return this.questions.create({
            ...data,
            user: user.data,
            photo: file.originalname
        })
    }

    @UseGuards(JwtTokenGuard)
    @Delete('/:id')
    public async delete(@Param('id') id: number) {
        return this.questions.delete(id)
    }

}


