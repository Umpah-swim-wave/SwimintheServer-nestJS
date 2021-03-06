import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "./auth.repository";
import { SignInRequestDto } from "./dto/signin/signin.request.dto";
import { SignInResponseDto } from "./dto/signin/signin.response.dto";
import { SignUpRequestDto } from "./dto/signup/signup.request.dto";
import { SignUpResponseDto } from "./dto/signup/signup.response.dto";
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";
import { JwtPayload } from "../common/jwt/dto/jwtPayload.dto";
import { SignInDataDto } from "./dto/signin/signin.data.dto";
import { SignUpDataDto } from "./dto/signup/signup.data.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly AuthRepository: AuthRepository,
    private readonly JwtService: JwtService
  ) {}

  async signUp(signUpRequestDto: SignUpRequestDto): Promise<SignUpResponseDto> {
    const data: SignUpDataDto = await this.AuthRepository.signup(
      signUpRequestDto
    );
    return utilResponse.success(messageResponse.SIGN_UP_SUCCESS, data);
  }
  async signIn(signInRequestDto: SignInRequestDto): Promise<SignInResponseDto> {
    const { phone } = signInRequestDto;

    // 존재하는 핸드폰 번호인지 확인하기. 존재하지 않는 핸드폰 번호이면 NO USER 반환
    const user = await this.AuthRepository.validationPhone({
      phone,
    });
    if (!user) {
      return utilResponse.fail(messageResponse.NO_USER);
    }

    const userId = user.id;
    const userNickname = user.nickname;
    const payload: JwtPayload = { userId: userId };
    const token = await this.JwtService.sign(payload);

    const data: SignInDataDto = {
      userId,
      userNickname,
      token,
    };
    return utilResponse.success(messageResponse.SIGN_IN_SUCCESS, data);
  }
}
