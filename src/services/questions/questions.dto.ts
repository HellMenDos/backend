import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class QuestionsDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public describe: string;

  @IsString()
  @IsOptional()
  public photo: string


  @IsString()
  @IsNotEmpty()
  public user: string
}