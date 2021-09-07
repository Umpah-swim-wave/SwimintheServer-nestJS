import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class SignUpRequestDto {
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty({ description: "닉네임" })
  nickname: string;

  @IsString()
  @ApiProperty({ description: "핸드폰 번호" })
  phone: string;
}
