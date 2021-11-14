import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "../../common/dto/base.response.dto";
import { RecordMonthlyDataDto } from "./monthRecord.data.dto";
import { RecordMonthlyLabsDto } from "./monthRecord.labs.dto";

export class RecordMonthlyListResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "일간 랩스 기록" })
  data?: [RecordMonthlyLabsDto];
}
