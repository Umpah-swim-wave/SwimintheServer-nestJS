import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { AuthRepository } from './auth.repository';
import { SignInRequestDto } from './dto/signin/signin.request.dto';
import { SignInResponseDto } from './dto/signin/signin.response.dto';
import { SignUpRequestDto } from './dto/signup/signup.request.dto';
import { SignUpResponseDto } from './dto/signup/signup.response.dto';
import { SignUpEncryptionDto } from './dto/signup/signup.encryption.dto';
import utilResponse from '../common/response/util.response';
import messageResponse from '../common/response/message.response';
import { JwtPayload } from '../common/jwt/dto/jwtPayload.dto';
import { SignInDataDto } from './dto/signin/signin.data.dto';
import { SignUpDataDto } from './dto/signup/signup.data.dto';
import { FindPasswordRequestDto } from './dto/findPassword/findPassword.request.dto';
import { FindPasswordResponseDto } from './dto/findPassword/findPassword.response.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly AuthRepository: AuthRepository,
    private readonly JwtService: JwtService
  ) {}

  async signUp(signUpRequestDto: SignUpRequestDto): Promise<SignUpResponseDto> {
    const { email, password, nickname, phone } = signUpRequestDto;

    const salt: string = await bcrypt.genSalt(10);
    const encryptionPassword: string = await bcrypt.hash(password, salt);
    const signUpEncryptionDto: SignUpEncryptionDto = {
      email,
      salt,
      encryptionPassword,
      nickname,
      phone,
    };
    const data: SignUpDataDto = await this.AuthRepository.signup(signUpEncryptionDto);
    return utilResponse.success(messageResponse.SIGN_UP_SUCCESS, data);
  }
  async signIn(signInRequestDto: SignInRequestDto): Promise<SignInResponseDto> {
    const { email, password } = signInRequestDto;

    // 존재하는 아이디인지 확인하기. 존재하지 않는 아이디면 NO USER 반환
    const user = await this.AuthRepository.validationEmail({
      email,
    });
    if (!user) {
      return utilResponse.fail(messageResponse.NO_USER);
    }

    // 비밀번호가 일치하는지 확인하기.
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return utilResponse.fail(messageResponse.MISS_MATCH_PW);
    }

    const UserId = user.id;
    const user_nickname = user.nickname;
    const payload: JwtPayload = { userId: UserId };
    const token = await this.JwtService.sign(payload);

    const data: SignInDataDto = {
      UserId,
      user_nickname,
      token,
    };
    return utilResponse.success(messageResponse.SIGN_IN_SUCCESS, data);
  }

  async findPassword(
    findPasswordRequestDto: FindPasswordRequestDto
  ): Promise<FindPasswordResponseDto> {
    const { email } = findPasswordRequestDto;

    // 존재하는 아이디인지 확인하기. 존재하지 않는 아이디면 NO USER 반환
    const user = await this.AuthRepository.validationEmail({
      email,
    });
    if (!user) {
      return utilResponse.fail(messageResponse.NO_USER);
    }

    // 인증번호 발송
    const phone = user.phone.replace(/\-/g, '');
    const UserId = user.id;
    const user_nickname = user.nickname;
    const payload: JwtPayload = { userId: UserId };
    const token = await this.JwtService.sign(payload);

    const data: SignInDataDto = {
      UserId,
      user_nickname,
      token,
    };
    return utilResponse.success(messageResponse.SIGN_IN_SUCCESS, data);
  }
}
