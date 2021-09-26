import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordFilterDto } from "./dto/postRecordList/recordFilter.request.dto";
import { RecordService } from "./record.service";

@ApiTags("record")
@Controller("record")
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Post("/list")
  @ApiOperation({
    summary: "기록 조회 API",
    description: "유저의 기록을 조회하는 API.",
  })
  @ApiCreatedResponse({
    description: "기록을 조회한다.",
    // type: TODO response type 정하고 변경
  })
  postRecordList(
    @Body(ValidationPipe) recordFilterDto: RecordFilterDto
  ): Promise<void> {
    // TODO response type 정하고 변경
    return this.recordService.postRecordList(recordFilterDto);
  }
}
