import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SignInRequestDto } from './dto/signin/signin.request.dto';
import { SignInResponseDto } from './dto/signin/signin.response.dto';
import { SignUpRequestDto } from './dto/signup/signup.request.dto';
import { SignUpResponseDto } from './dto/signup/signup.response.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @ApiOperation({ summary: '회원가입 API', description: '유저를 생성한다.' })
  @ApiCreatedResponse({
    description: '유저를 생성한다.',
    type: SignUpResponseDto,
  }) // 생성 완료를 알리는 201 코드에 대한 설정
  signUp(
    @Body(ValidationPipe) signUpRequestDto: SignUpRequestDto,
  ): Promise<SignUpResponseDto> {
    return this.authService.signUp(signUpRequestDto);
  }

  @Post('/signin')
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인을 하여 토큰을 던져준다.',
  })
  @ApiOkResponse({
    description: '로그인 성공시 토큰을 던져준다.',
    type: SignInResponseDto,
  }) // 로그인 성공을 알리는 200 코드에 대한 설정
  @ApiUnauthorizedResponse({ description: '잘못된 인증정보입니다. ' }) // Invalid Credential를 알리는 401 코드에 대한 설정
  signIn(
    @Body(ValidationPipe) signInRequestDto: SignInRequestDto,
  ): Promise<SignInResponseDto> {
    return this.authService.signIn(signInRequestDto);
  }
}
