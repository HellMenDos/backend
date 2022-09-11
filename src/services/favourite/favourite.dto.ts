import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class FavouriteDto {
  @IsString()
  @IsNotEmpty()
  public date: Date;

  @IsNumber()
  @IsNotEmpty()
  public user: number

  @IsNumber()
  @IsNotEmpty()
  public question: number
}