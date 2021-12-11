import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import messageResponse from "src/common/response/message.response";
import utilResponse from "src/common/response/util.response";
import { RecentRecordDateRequestDto } from "./dto/weekRecentRecord.request.dto";
import { RecentRecordDateDto } from "./dto/weekRecentRecord.response.dto";
import { RecordWeeklyFilterDto } from "./dto/weekRecord.request.dto";
import { RecordWeeklyListDto } from "./dto/weekRecord.response.dto";
import { WeekRecordService } from "./weekRecord.service";

@ApiTags("weekRecord")
@Controller("weekRecord")
export class WeekRecordController {
  constructor(private weekRecordService: WeekRecordService) {}
  @Post("/list")
  @ApiOperation({
    summary: "주간 랩스 기록 조회 API",
    description: "유저의 주간 랩스 기록을 조회하는 API.",
  })
  @ApiOkResponse({
    description: "주간 랩스 기록을 조회한다.",
    type: RecordWeeklyListDto,
  })
  async findRecordWeeklyList(
    @Body(ValidationPipe) recordWeeklyFilterDto: RecordWeeklyFilterDto
  ): Promise<BaseResponseDto> {
    // TODO response type 정하고 변경
    const result = await this.weekRecordService.findWeeklyRecordList(
      recordWeeklyFilterDto
    );

    return utilResponse.success(
      messageResponse.GET_WEEK_RECORDS_SUCCESS,
      result
    );
  }

  @Post("/recent-record-date/list")
  @ApiOperation({
    summary: "유저의 최근 수영한 날짜 리스트를 조회 API",
    description: "유저의 최근 수영한 날짜 리스트를 조회하는 API.",
  })
  @ApiOkResponse({
    description: "유저의 최근 수영한 날짜 리스트를 조회한다.",
    type: RecentRecordDateDto,
  })
  async findRecentRecordDateList(
    @Body(ValidationPipe) recentRecordDateRequestDto: RecentRecordDateRequestDto
  ): Promise<BaseResponseDto> {
    const result = await this.weekRecordService.findRecentRecordDateList(
      recentRecordDateRequestDto
    );
    return utilResponse.success(
      messageResponse.GET_DATE_RECORDS_SUCCESS,
      result
    );
  }
}
