import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export enum ATKResult {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}

export class CreateAtkResultDto {
  @Type(() => Number)
  @IsInt()
  userId: number;

  @IsEnum(ATKResult)
  @IsNotEmpty()
  result: ATKResult;

  @IsOptional()
  @IsString()
  imageUrl: string;
}
