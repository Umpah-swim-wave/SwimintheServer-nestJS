import { ApiProperty } from '@nestjs/swagger';

export class SignInDataDto {
  @ApiProperty({ description: '유저 ID' })
  readonly userId: number;
  @ApiProperty({ description: '유저 닉네임' })
  readonly userNickname: string;
  @ApiProperty({ description: '유저 토큰' })
  readonly token: string;
}
