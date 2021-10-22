import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import {
  RecordDailyFilterDto,
  RecordDailyDto,
} from "./dto/dayRecordFilter.request.dto";
import {
  RecordDailyListResponseDto,
  RecordDailyOverViewResponseDto,
} from "./dto/dayRecord.response.dto";
import { DayRecordService } from "./dayRecord.service";

@ApiTags("dayRecord")
@Controller("dayRecord")
export class DayRecordController {
  constructor(private dayRecordService: DayRecordService) {}

  @Post("/overview")
  @ApiOperation({
    summary: "일간 기록 오버뷰 조회 API",
    description: "유저의 일간 기록의 오버뷰를 조회하는 API.",
  })
  @ApiOkResponse({
    description: "일간 기록의 오버뷰를 조회한다.",
    type: RecordDailyOverViewResponseDto,
  })
  async findRecordDailyOverview(
    @Body(ValidationPipe) recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<RecordDailyOverViewResponseDto> {
    // TODO response type 정하고 변경
    return await this.dayRecordService.findDailyRecordOverviewByDateAndStroke(
      recordDailyFilterDto
    );
  }

  @Post("/list")
  @ApiOperation({
    summary: "일간 랩스 기록 조회 API",
    description: "유저의 일간 일간 랩스 기록을 조회하는 API.",
  })
  @ApiOkResponse({
    description: "일간 랩스 기록을 조회한다.",
    type: RecordDailyListResponseDto,
  })
  async findRecordDailyList(
    @Body(ValidationPipe) recordDailyDto: RecordDailyDto
  ): Promise<RecordDailyListResponseDto> {
    // TODO response type 정하고 변경
    return await this.dayRecordService.findDailyRecordList(recordDailyDto);
  }
}
