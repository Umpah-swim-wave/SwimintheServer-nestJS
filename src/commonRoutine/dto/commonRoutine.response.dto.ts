import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import { CommonRoutineListDto } from "./commonRoutine.request.dto";

export class CommonRoutineListResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  readonly data?: [CommonRoutineListDto];
}
