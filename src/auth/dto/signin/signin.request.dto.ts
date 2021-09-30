import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SignInRequestDto {
  @IsString()
  @ApiProperty({ description: "유저 핸드폰 번호" })
  readonly phone: string;
}
