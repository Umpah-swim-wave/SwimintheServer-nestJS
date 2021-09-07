import { IsEmail } from 'class-validator';

export class FindPasswordRequestDto {
  @IsEmail()
  email: string;
}
