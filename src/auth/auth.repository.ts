import { EntityRepository, Repository } from "typeorm";
import { User } from "./auth.entity";
import { SignUpEncryptionDto } from "./dto/signup/signup.encryption.dto";
import { SignUpDataDto } from "./dto/signup/signup.data.dto";
import { SignInRequestDto } from "./dto/signin/signin.request.dto";
import { Active } from "src/common/enum/Active";
@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(
    signUpEncryptionDto: SignUpEncryptionDto
  ): Promise<SignUpDataDto> {
    const { nickname, phone } = signUpEncryptionDto;

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
