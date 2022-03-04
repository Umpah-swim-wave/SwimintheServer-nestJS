import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class SignUpRequestDto {
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  @ApiProperty({ description: '닉네임' })
  readonly nickname: string;

  @IsString()
  @ApiProperty({ description: '핸드폰 번호' })
  readonly phone: string;
}
