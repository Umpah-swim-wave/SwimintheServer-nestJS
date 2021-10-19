import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiNoContentResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordRequestDto } from "./dto/record.request.dto";
import { RecordResponseDto } from "./dto/record.response.dto";
import { RecordService } from "./record.service";

@ApiTags("record")
@Controller("record")
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Post("/")
  @ApiOperation({
    summary: "기록 넣기 API",
    description: "유저의 기록들을 넣는 API.",
  })
  @ApiNoContentResponse({
    description: "쌓여있는 유저의 기록들을 넣는다.",
  })
  async insertRecordByUser(
    @Body(ValidationPipe) recordRequestDto: RecordRequestDto
  ): Promise<RecordResponseDto> {
    // TODO response type 정하고 변경
    await this.recordService.insertRecordByUser(recordRequestDto);
    return;
  }
}
