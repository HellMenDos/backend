import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class QuestionsDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public describe: string;

  @IsString()
  @IsNotEmpty()
  public tech: string;

  @IsString()
  @IsNotEmpty()
  public lang: string;

  @IsString()
  @IsOptional()
  public photo: string

  @IsNumber()
  @IsOptional()
  public user: number
}