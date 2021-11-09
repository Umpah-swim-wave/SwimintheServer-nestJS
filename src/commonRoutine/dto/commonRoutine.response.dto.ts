import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import { CommonRoutineFilterDto } from "./commonRoutine.request.dto"; 
import { CommonRoutineDetailDataDto } from "./commonRoutine.sets.dto";

export class CommonRoutineListResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  readonly data?: [CommonRoutineFilterDto];
}

export class CommonRoutineDetailResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "어푸에서 추천하는 루틴 상세" })
  data?: CommonRoutineDetailDataDto;
}
