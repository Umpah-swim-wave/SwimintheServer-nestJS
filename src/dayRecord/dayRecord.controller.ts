import {
  Controller,
  Get,
  Query,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordDailyFilterDto } from "./dto/dayRecord.request.dto";
import { RecordDailyListDto } from "./dto/dayRecord.response.dto";
import { DayRecordService } from "./dayRecord.service";
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";
import { BaseResponseDto } from "../common/dto/base.response.dto";
import { RecentRecordDateDto } from "./dto/dayRecentRecord.response.dto";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "../auth/get-user.decorator";
import { User } from "../auth/auth.entity";

@ApiTags("dayRecord")
@Controller("dayRecord")
@UseGuards(AuthGuard())
export class DayRecordController {
  constructor(private dayRecordService: DayRecordService) {}

  @Get("/list")
  @ApiOperation({
    summary: "일간 랩스 기록 조회 API",
    description: "유저의 일간 랩스 기록을 조회하는 API.",
  })
  @ApiOkResponse({
    description: "일간 랩스 기록을 조회한다.",
    type: RecordDailyListDto,
  })
  async findRecordDailyList(
    @Query(ValidationPipe) recordDailyFilterDto: RecordDailyFilterDto,
    @GetUser() user: User
  ): Promise<BaseResponseDto> {
    // TODO response type 정하고 변경
    const result = await this.dayRecordService.findDailyRecordList(
      recordDailyFilterDto,
      user
    );
    return utilResponse.success(
      messageResponse.GET_DAY_RECORDS_SUCCESS,
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
    const result = await this.dayRecordService.findRecentRecordDateList(user);
    return utilResponse.success(
      messageResponse.GET_DATE_RECORDS_SUCCESS,
      result
    );
  }
}
