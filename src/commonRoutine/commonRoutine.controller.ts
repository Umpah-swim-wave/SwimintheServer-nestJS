import { Body, Controller, Get, UseGuards, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CommonRoutineListResponseDto } from "./dto/commonRoutine.response.dto";
import { CommonRoutineService } from "./commonRoutine.service";
import { CommonRoutineListDto } from "./dto/commonRoutine.data.dto";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/auth/get-user.decorator";
import { User } from "src/auth/auth.entity";

@ApiTags('commonRoutine')
@Controller('commonRoutine')
@UseGuards(AuthGuard())
export class CommonRoutineController {
  constructor(private commonRoutineService: CommonRoutineService) {}

  @Get('/list')
  @ApiOperation({
    summary: '전체 루틴 조회 API',
    description: '전체 루틴 조회 API',
  })
  @ApiOkResponse({
    description: '전체 루틴 조회 성공입니다.',
    type: CommonRoutineListResponseDto,
  })
  commonRoutineList(
    @Body(ValidationPipe) commonRoutineListDto: CommonRoutineListDto,
  ): Promise<CommonRoutineListResponseDto> {
    return this.commonRoutineService.getAllRoutine(commonRoutineListDto);
  }

  @Get("/detail")
  @ApiOperation({
    summary: "전체 루틴 상세 조회 API",
    description: "전체 루틴의 상세 조회 API",
  })
  @ApiOkResponse({
    description: "전체 루틴 상세 조회 성공입니다.",
    type: CommonRoutineListResponseDto,
  })
  commonRoutineDetail(
    @Body(ValidationPipe) commonRoutineDetailDto: CommonRoutineListDto
  ): Promise<CommonRoutineListResponseDto> {
    return this.commonRoutineService.getRoutineDetail(commonRoutineDetailDto)
  }

  @Get("/userList")
  @ApiOperation({
    summary: "유저 루틴 조회 API",
    description: "유저 루틴 조회 성공입니다.",
  })
  @ApiOkResponse({
    description: "유저 루틴 조회 성공입니다.",
    type: CommonRoutineListResponseDto,
  })
  userRoutineList(
    @Body(ValidationPipe) userRoutineListDto: CommonRoutineListDto,
    @GetUser() user : User
  ): Promise<CommonRoutineListResponseDto> {
    return this.commonRoutineService.getUserRoutine(userRoutineListDto, user);
  }
}
