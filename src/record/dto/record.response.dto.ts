import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import {
  RecordDailyLabsDto,
  RecordDailyOverviewDataDto,
} from "./record.data.dto";

export class RecordDailyOverViewResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "리턴 값" })
  data?: RecordDailyOverviewDataDto;
}

export class RecordDailyListResponseDto extends BaseResponseDto {
  @ApiProperty({ description: "일간 랩스 기록" })
  data?: [RecordDailyLabsDto];
}
