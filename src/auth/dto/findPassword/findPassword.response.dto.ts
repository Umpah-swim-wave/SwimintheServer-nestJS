import { FindPasswordDataDto } from './findPassword.data.dto';

export class FindPasswordResponseDto {
  success: boolean;
  message: string;
  data?: FindPasswordDataDto;
}
