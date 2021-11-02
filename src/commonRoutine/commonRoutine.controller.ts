import { Body, Controller, Get, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CommonRoutineListResponseDto } from "./dto/commonRoutine.response.dto";
import { CommonRoutineService } from "./commonRoutine.service";

@ApiTags("commonRoutine")
@Controller("commonRoutine")
export class CommonRoutineController {
  constructor(private commonRoutineService: CommonRoutineService) {}

  @Get("/routines")
  @ApiOperation({
    summary: "기본 루틴 조회 API",
    description: "어푸에서 추천하는 기본 루틴 조회 API",
  })
  @ApiOkResponse({
    description: "기본 루틴 조회 성공입니다.",
    type: CommonRoutineListResponseDto,
  })
  async findRoutineList(
    @Body(ValidationPipe) commonRoutineListResponseDto: CommonRoutineListResponseDto
    ): Promise<CommonRoutineListResponseDto> {
      return this.commonRoutineService.find(commonRoutineListResponseDto);
  }
}
