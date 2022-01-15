import { Body, Controller, Get, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { SetRoutineListResponseDto } from "./dto/setRoutine.response.dto";
import { SetRoutineService } from "./setRoutine.service";
import { SetRoutineListDto } from "./dto/setRoutine.request.dto";

@ApiTags("setRoutine")
@Controller("setRoutine")
export class SetRoutineController {
  constructor(private setRoutineService: SetRoutineService) {}

  @Get("/setlist")
  @ApiOperation({
    summary: "루틴 세트 조회 API",
    description: "루틴에 해당하는 세트 조회 API",
  })
  @ApiOkResponse({
    description: "루틴 세트 조회 성공했습니다.",
    type: SetRoutineListResponseDto,
  })
  setRoutineList(
    @Body(ValidationPipe) setRoutineListDto: SetRoutineListDto
  ): Promise<SetRoutineListResponseDto> {
    return this.setRoutineService.getAllSetRoutine(setRoutineListDto)
  }
}
