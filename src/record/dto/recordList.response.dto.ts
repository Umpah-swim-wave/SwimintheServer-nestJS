import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";

export class RecordDailyResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  data?: null;
}
