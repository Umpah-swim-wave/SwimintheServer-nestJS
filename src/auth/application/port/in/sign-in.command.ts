import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class SignInCommand {
  @IsString()
  @ApiProperty({ description: "유저 핸드폰 번호" })
  readonly phone: string;
}
