import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
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
  ): Promise<RecordWeeklyListDto> {
    // TODO response type 정하고 변경
    return await this.weekRecordService.findWeeklyRecordList(
      recordWeeklyFilterDto
    );
  }
}
