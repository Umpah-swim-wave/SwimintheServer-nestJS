import { ApiProperty } from '@nestjs/swagger';

export class SignUpDataDto {
  @ApiProperty({ description: '닉네임' })
  nickname: string;
}
