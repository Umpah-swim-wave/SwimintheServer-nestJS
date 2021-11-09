import { Body, Controller, Get, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CommonRoutineListResponseDto } from "./dto/commonRoutine.response.dto";
import { CommonRoutineService } from "./commonRoutine.service";
import util from "../common/response/util.response";
import responseMessage from "../common/response/message.response";
import { CommonRoutineListDto } from "./dto/commonRoutine.data.dto";

@ApiTags("commonRoutine")
@Controller("commonRoutine")
export class CommonRoutineController {
  constructor(private commonRoutineService: CommonRoutineService) {}

  @Get("/list")
  @ApiOperation({
    summary: "기본 루틴 조회 API",
    description: "어푸에서 추천하는 기본 루틴 조회 API",
  })
  @ApiOkResponse({
    description: "기본 루틴 조회 성공입니다.",
    type: CommonRoutineListResponseDto,
  })
  commonRoutineList(
    @Body(ValidationPipe) commonRoutineListDto: CommonRoutineListDto
  ): Promise<CommonRoutineListResponseDto> {
    return this.commonRoutineService.getAllRoutine(commonRoutineListDto)
  }
  // async AllRoutineList(
  //   @Body(ValidationPipe) routineListDto: CommonRoutineListDto
  //   ): Promise<CommonRoutineListResponseDto> {
  //     return await this.commonRoutineService.getAllRoutine(
  //       routineListDto
  //     )
  // }
}
