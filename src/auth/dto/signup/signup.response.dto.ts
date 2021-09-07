import { ApiProperty } from '@nestjs/swagger';
import { SignUpDataDto } from './signup.data.dto';

export class SignUpResponseDto {
  @ApiProperty({ description: '성공여부' })
  success: boolean;
  @ApiProperty({ description: '메시지' })
  message: string;
  @ApiProperty({ description: '리턴 값' })
  data?: SignUpDataDto;
}
