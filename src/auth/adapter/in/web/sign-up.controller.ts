import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import SignUpCommand from "src/auth/application/port/in/sign-up.command";
import SignUpUseCase from "src/auth/application/port/in/sign-up.usecase";

@ApiTags("auth")
@Controller("auth")
export class SignUpController {
  constructor(private signUpUseCase: SignUpUseCase) {}

  @Post("/signup")
  @ApiOperation({ summary: "회원가입 API", description: "유저를 생성한다." })
  @ApiCreatedResponse({
    description: "유저를 생성한다.",
  }) // 생성 완료를 알리는 201 코드에 대한 설정
  signUp(@Body(ValidationPipe) command: SignUpCommand) {
    this.signUpUseCase.signUp(command);
  }
}
