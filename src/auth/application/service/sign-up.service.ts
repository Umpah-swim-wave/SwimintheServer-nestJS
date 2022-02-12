import SignUpCommand from "../port/in/sign-up.command";
import SignUpUseCase from "../port/in/sign-up.usecase";

export class SignUpService implements SignUpUseCase {
  public async signUp(command: SignUpCommand) {}
}
