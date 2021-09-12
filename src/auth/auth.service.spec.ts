import { Test } from "@nestjs/testing";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.service";
import { SignUpRequestDto } from "./dto/signup/signup.request.dto";
import { SignUpDataDto } from "./dto/signup/signup.data.dto";
import { SignInRequestDto } from "./dto/signin/signin.request.dto";
import { JwtService } from "@nestjs/jwt";

const mockAuthRepository = () => ({
  signup: jest.fn(),
  validationPhone: jest.fn(),
});

const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
};

const mockSignup: SignUpRequestDto = {
  nickname: "nestTest",
  phone: "01000000000",
};
const mockSignupData: SignUpDataDto = {
  nickname: "nestTest",
};

const mockSigninPhoneValidationFail: SignInRequestDto = {
  phone: "01000000000",
};

const mockSigninPhone: SignInRequestDto = {
  phone: "01000000000",
};
describe("AuthService", () => {
  let authService: AuthService;
  let authRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: AuthRepository, useFactory: mockAuthRepository },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authService = module.get(AuthService);
    authRepository = module.get(AuthRepository);
  });

  describe("signUp", () => {
    it("calls AuthRepository.signup and returns the result", async () => {
      const signUpRequestDto: SignUpRequestDto = {
        nickname: mockSignup.nickname,
        phone: mockSignup.phone,
      };
      authRepository.signup.mockResolvedValue(signUpRequestDto);
      const result = await authService.signUp(mockSignup);
      expect(result.data).toEqual(signUpRequestDto);
    });
  });

  // describe("validationPhone", () => {
  //   it("calls AuthRepository.validationPhone and returns the result", async () => {
  //     authRepository.validationPhone(mockSigninPhone);
  //     const result = await authService.signIn(mockSigninPhoneValidationFail);
  //     expect(result.success).toEqual(false);
  //   });
  // });
});
