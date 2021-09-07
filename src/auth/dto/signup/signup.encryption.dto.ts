import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class SignUpEncryptionDto {
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  nickname: string;

  @IsString()
  phone: string;
}
