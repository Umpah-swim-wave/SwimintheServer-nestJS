import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { User } from "../auth/auth.entity";
import { GetUser } from "../auth/get-user.decorator";
import { BaseResponseDto } from "../common/dto/base.response.dto";
import messageResponse from "../common/response/message.response";
import utilResponse from "../common/response/util.response";
import { RecentRecordDateDto } from "./dto/weekRecentRecord.response.dto";
import { RecordWeeklyFilterDto } from "./dto/weekRecord.request.dto";
import { RecordWeeklyListDto } from "./dto/weekRecord.response.dto";
import { WeekRecordService } from "./weekRecord.service";

@ApiTags("weekRecord")
@Controller("weekRecord")
@UseGuards(AuthGuard())
export class WeekRecordController {
  constructor(private weekRecordService: WeekRecordService) {}
  @Get("/list")
  @ApiOperation({
    summary: "주간 랩스 기록 조회 API",
    description: "유저의 주간 랩스 기록을 조회하는 API.",
  })
  @ApiOkResponse({
    description: "주간 랩스 기록을 조회한다.",
    type: RecordWeeklyListDto,
  })
  async findRecordWeeklyList(
    @Query(ValidationPipe) recordWeeklyFilterDto: RecordWeeklyFilterDto,
    @GetUser() user: User
  ): Promise<BaseResponseDto> {
    // TODO response type 정하고 변경
    const result = await this.weekRecordService.findWeeklyRecordList(
      recordWeeklyFilterDto,
      user
    );

    return utilResponse.success(
      messageResponse.GET_WEEK_RECORDS_SUCCESS,
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
    const result = await this.weekRecordService.findRecentRecordDateList(user);
    return utilResponse.success(
      messageResponse.GET_DATE_RECORDS_SUCCESS,
      result
    );
  }
}
