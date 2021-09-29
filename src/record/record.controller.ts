import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordDailyFilterDto } from "./dto/recordFilter.request.dto";
import { RecordDailyOverViewResponseDto } from "./dto/record.response.dto";
import { RecordService } from "./record.service";

@ApiTags("record")
@Controller("record")
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Post("/daily/overview")
  @ApiOperation({
    summary: "일간 기록 오버뷰 조회 API",
    description: "유저의 일간 기록의 오버뷰를 조회하는 API.",
  })
  @ApiCreatedResponse({
    description: "일간 기록의 오버뷰를 조회한다.",
    type: RecordDailyOverViewResponseDto,
  })
  async postRecordOverview(
    @Body(ValidationPipe) recordDailyFilterDto: RecordDailyFilterDto
  ): Promise<RecordDailyOverViewResponseDto> {
    // TODO response type 정하고 변경
    return await this.recordService.findRecordDailyOverviewByDateAnd(
      recordDailyFilterDto
    );
  }
}
