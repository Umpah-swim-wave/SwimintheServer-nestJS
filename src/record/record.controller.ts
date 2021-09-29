import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordDailyFilterDto } from "./dto/recordFilter.request.dto";
import { RecordDailyResponseDto } from "./dto/recordList.response.dto";
import { RecordService } from "./record.service";

@ApiTags("record")
@Controller("record")
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Post("/daily/list")
  @ApiOperation({
    summary: "일간 기록 조회 API",
    description: "유저의 일간 기록을 조회하는 API.",
  })
  @ApiCreatedResponse({
    description: "일간 기록을 조회한다.",
    type: RecordDailyResponseDto,
  })
  async postRecordList(
    @Body(ValidationPipe) recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<RecordDailyResponseDto> {
    // TODO response type 정하고 변경
    return await this.recordService.findRecordDailyListByDateAnd(
      recordDailyFilterDto
    );
  }
}
