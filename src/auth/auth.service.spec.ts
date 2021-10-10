import { Test } from "@nestjs/testing";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.service";
import { SignUpRequestDto } from "./dto/signup/signup.request.dto";
import { JwtService } from "@nestjs/jwt";
import { SignInRequestDto } from "./dto/signin/signin.request.dto";

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

const mockSignin: SignInRequestDto = {
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

  describe("signIn", () => {
    it("calls AuthRepository.signin and returns the result", async () => {
      const signInRequestDto: SignInRequestDto = {
        phone: mockSignin.phone,
      };
      authRepository.validationPhone.mockResolvedValue(signInRequestDto);
      const result = await authService.signIn(mockSignin);
      expect(result.data).toEqual(signInRequestDto);
    });
  });
});
