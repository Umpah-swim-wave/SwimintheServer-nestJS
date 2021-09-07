import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { SignInRequestDto } from "./dto/signin/signin.request.dto";
import { SignInResponseDto } from "./dto/signin/signin.response.dto";
import { SignUpRequestDto } from "./dto/signup/signup.request.dto";
import { SignUpResponseDto } from "./dto/signup/signup.response.dto";
import { AuthService } from "./auth.service";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  @ApiOperation({ summary: "회원가입 API", description: "유저를 생성한다." })
  @ApiCreatedResponse({
    description: "유저를 생성한다.",
    type: SignUpResponseDto,
  })
  signUp(
    @Body(ValidationPipe) signUpRequestDto: SignUpRequestDto
  ): Promise<SignUpResponseDto> {
    return this.authService.signUp(signUpRequestDto);
  }

  @Post("/signin")
  @ApiOperation({
    summary: "로그인 API",
    description: "로그인을 하여 토큰을 던져준다.",
  })
  @ApiCreatedResponse({
    description: "로그인 성공시 토큰을 던져준다.",
    type: SignInResponseDto,
  })
  signIn(
    @Body(ValidationPipe) signInRequestDto: SignInRequestDto
  ): Promise<SignInResponseDto> {
    return this.authService.signIn(signInRequestDto);
  }
}
