import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordMonthlyListResponseDto } from "./dto/monthRecord.response.dto";
import { RecordMonthlyFilterDto } from "./dto/monthRecord.request.dto";
import { MonthRecordService } from "./monthRecord.service";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import utilResponse from "src/common/response/util.response";
import messageResponse from "src/common/response/message.response";

@ApiTags("monthRecord")
@Controller("monthRecord")
export class MonthRecordController {
  constructor(private monthRecordService: MonthRecordService) {}

  @Post("/list")
  @ApiOperation({
    summary: "월간 랩스 기록 조회 API",
    description: "유저의 월간 랩스 기록을 조회하는 API.",
  })
  @ApiOkResponse({
    description: "월간 랩스 기록을 조회한다.",
    type: RecordMonthlyListResponseDto,
  })
  async findRecordMonthlyList(
    @Body(ValidationPipe) recordMonthlyFilterDto: RecordMonthlyFilterDto
  ): Promise<BaseResponseDto> {
    const result = await this.monthRecordService.findMonthlyRecordList(
      recordMonthlyFilterDto
    );
    return utilResponse.success(
      messageResponse.GET_MONTH_RECORDS_SUCCESS,
      result
    );
  }
}
