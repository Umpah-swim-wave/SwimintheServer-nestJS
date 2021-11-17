import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiNoContentResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { BaseResponseDto } from "src/common/dto/base.response.dto";
import messageResponse from "src/common/response/message.response";
import utilResponse from "src/common/response/util.response";
import { RecordRequestDto } from "./dto/record.request.dto";
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
  async insertRecord(
    @Body(ValidationPipe) recordRequestDto: RecordRequestDto
  ): Promise<BaseResponseDto> {
    // TODO response type 정하고 변경
    const result = this.recordService.insertRecord(recordRequestDto);
    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS, result);
  }
}
