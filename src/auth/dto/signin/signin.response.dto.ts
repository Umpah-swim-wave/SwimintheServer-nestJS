import { ApiProperty } from '@nestjs/swagger';
import { SignInDataDto } from './signin.data.dto';

export class SignInResponseDto {
  @ApiProperty({ description: '성공여부' })
  success: boolean;
  @ApiProperty({ description: '메시지' })
  message: string;
  @ApiProperty({ description: '리턴 값' })
  data?: SignInDataDto;
}
