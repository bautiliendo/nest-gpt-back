import { IsString, IsInt, IsOptional } from 'class-validator';

export class OrthographyDto {
  @IsString()
  readonly prompt: string;

  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}
