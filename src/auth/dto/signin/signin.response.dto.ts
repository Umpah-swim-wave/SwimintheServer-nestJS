import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import { SignInDataDto } from "./signin.data.dto";

export class SignInResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  readonly data?: SignInDataDto;
}
