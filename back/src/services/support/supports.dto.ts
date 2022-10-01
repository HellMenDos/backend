import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class SupportsDto {
  @IsString()
  @IsNotEmpty()
  public title: string;
  
  @IsString()
  @IsNotEmpty()
  public describe: string;

  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public telegram: string;
}