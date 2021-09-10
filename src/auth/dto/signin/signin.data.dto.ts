import { ApiProperty } from "@nestjs/swagger";

export class SignInDataDto {
  @ApiProperty({ description: "유저 ID" })
  UserId: number;
  @ApiProperty({ description: "유저 닉네임" })
  userNickname: string;
  @ApiProperty({ description: "유저 토큰" })
  token: string;
}
