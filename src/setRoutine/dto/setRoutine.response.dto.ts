import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import { SetRoutineListDto } from "./setRoutine.request.dto";

export class SetRoutineListResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  readonly data?: [SetRoutineListDto];
}
