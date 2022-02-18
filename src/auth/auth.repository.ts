import { EntityRepository, Repository } from 'typeorm';
import { User } from './auth.entity';
import { SignUpDataDto } from './dto/signup/signup.data.dto';
import { SignInRequestDto } from './dto/signin/signin.request.dto';
import { Active } from '../common/enum/Enum';
import { SignUpRequestDto } from './dto/signup/signup.request.dto';
@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(signUpRequestDto: SignUpRequestDto): Promise<SignUpDataDto> {
    const { nickname, phone } = signUpRequestDto;

    // TODO 비밀번호 암호화하기
    const user = new User();
    user.phone = phone;
    user.nickname = nickname;
    await user.save();

    const data: SignUpDataDto = {
      nickname: user.nickname,
    };

    return data;
  }

  async validationPhone(signInPhoneCheckDto: SignInRequestDto): Promise<User> {
    const { phone } = signInPhoneCheckDto;
    const user = await this.findOne({ phone, active: Active.Y });
    return user;
  }
}
