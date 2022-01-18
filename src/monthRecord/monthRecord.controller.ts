import {
  Controller,
  Get,
  Query,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordMonthlyListResponseDto } from "./dto/monthRecord.response.dto";
import { RecordMonthlyFilterDto } from "./dto/monthRecord.request.dto";
import { MonthRecordService } from "./monthRecord.service";
import { BaseResponseDto } from "../common/dto/base.response.dto";
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";
import { RecentRecordDateDto } from "./dto/monthRecentRecord.response.dto";
import { GetUser } from "../auth/get-user.decorator";
import { User } from "../auth/auth.entity";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("monthRecord")
@Controller("monthRecord")
@UseGuards(AuthGuard())
export class MonthRecordController {
  constructor(private monthRecordService: MonthRecordService) {}

  @Get("/list")
  @ApiOperation({
    summary: "월간 랩스 기록 조회 API",
    description: "유저의 월간 랩스 기록을 조회하는 API.",
  })
  @ApiOkResponse({
    description: "월간 랩스 기록을 조회한다.",
    type: RecordMonthlyListResponseDto,
  })
  async findRecordMonthlyList(
    @Query(ValidationPipe) recordMonthlyFilterDto: RecordMonthlyFilterDto,
    @GetUser() user: User
  ): Promise<BaseResponseDto> {
    const result = await this.monthRecordService.findMonthlyRecordList(
      recordMonthlyFilterDto,
      user
    );
    return utilResponse.success(
      messageResponse.GET_MONTH_RECORDS_SUCCESS,
      result
    );
  }

  @Get("/recent-record-date/list")
  @ApiOperation({
    summary: "유저의 최근 수영한 날짜 리스트를 조회 API",
    description: "유저의 최근 수영한 날짜 리스트를 조회하는 API.",
  })
  @ApiOkResponse({
    description: "유저의 최근 수영한 날짜 리스트를 조회한다.",
    type: RecentRecordDateDto,
  })
  async findRecentRecordDateList(
    @GetUser() user: User
  ): Promise<BaseResponseDto> {
    const result = await this.monthRecordService.findRecentRecordDateList(user);
    return utilResponse.success(
      messageResponse.GET_DATE_RECORDS_SUCCESS,
      result
    );
  }
}
