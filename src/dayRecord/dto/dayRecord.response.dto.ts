import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "../../common/dto/base.response.dto";
import { RecordDailyDataDto } from "./dayRecord.data.dto";
import { RecordDailyLabsDto } from "./dayRecord.labs.dto";

export class RecordDailyListResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "일간 랩스 기록" })
  data?: [RecordDailyLabsDto];
}
