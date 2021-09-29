import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import { SignUpDataDto } from "./signup.data.dto";

export class SignUpResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  data?: SignUpDataDto;
}
