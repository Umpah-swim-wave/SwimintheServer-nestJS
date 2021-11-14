import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "../../common/dto/base.response.dto";
import { RecordWeeklyDataDto } from "./weekRecord.data.dto";
import { RecordWeeklyLabsDto } from "./weekRecord.labs.dto";

export class RecordWeeklyListResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "일간 랩스 기록" })
  data?: [RecordWeeklyLabsDto];
}
