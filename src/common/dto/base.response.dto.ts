import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDto {
  @ApiProperty({ description: '성공여부' })
  success: boolean;
  @ApiProperty({ description: '메시지' })
  message: string;
}
