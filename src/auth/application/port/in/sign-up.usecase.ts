import SignUpCommand from "./sign-up.command";

export default interface SignUpUseCase {
  signUp(command: SignUpCommand);
}
