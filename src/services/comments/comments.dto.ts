import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CommentsDto {
  @IsString()
  @IsNotEmpty()
  public message: string;

  @IsString()
  @IsNotEmpty()
  public date: Date;

  @IsNumber()
  @IsNotEmpty()
  public user: number

  @IsNumber()
  @IsNotEmpty()
  public question: string
}