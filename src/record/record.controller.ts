import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiNoContentResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { User } from "src/auth/auth.entity";
import { GetUser } from "src/auth/get-user.decorator";
import { BaseResponseDto } from "../common/dto/base.response.dto";
import messageResponse from "../common/response/message.response";
import utilResponse from "../common/response/util.response";
import { RecordRequestDto } from "./dto/record.request.dto";
import { RecordService } from "./record.service";

@ApiTags("record")
@Controller("record")
@UseGuards(AuthGuard())
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
    @Body(ValidationPipe) recordRequestDto: RecordRequestDto,
    @GetUser() user: User
  ): Promise<BaseResponseDto> {
    // TODO response type 정하고 변경
    const result = this.recordService.insertRecord(recordRequestDto, user);
    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS);
  }
}
