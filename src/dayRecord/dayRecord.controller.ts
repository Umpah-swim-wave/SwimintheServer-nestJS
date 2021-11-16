import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordDailyFilterDto } from "./dto/dayRecord.request.dto";
import { RecordDailyListDto } from "./dto/dayRecord.response.dto";
import { DayRecordService } from "./dayRecord.service";
import utilResponse from "src/common/response/util.response";
import messageResponse from "src/common/response/message.response";
import { BaseResponseDto } from "src/common/dto/base.response.dto";

@ApiTags("dayRecord")
@Controller("dayRecord")
export class DayRecordController {
  constructor(private dayRecordService: DayRecordService) {}

  @Post("/list")
  @ApiOperation({
    summary: "일간 랩스 기록 조회 API",
    description: "유저의 일간 랩스 기록을 조회하는 API.",
  })
  @ApiOkResponse({
    description: "일간 랩스 기록을 조회한다.",
    type: RecordDailyListDto,
  })
  async findRecordDailyList(
    @Body(ValidationPipe) recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<BaseResponseDto> {
    // TODO response type 정하고 변경
    const result = await this.dayRecordService.findDailyRecordList(
      recordDailyFilterDto
    );
    return utilResponse.success(
      messageResponse.GET_DAY_RECORDS_SUCCESS,
      result
    );
  }
}
