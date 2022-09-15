import { Exclude } from 'class-transformer';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UsersDto {
  @IsString()
  @IsOptional()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public email: string;
  
  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

}