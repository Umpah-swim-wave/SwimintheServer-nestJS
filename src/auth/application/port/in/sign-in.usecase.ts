import SignInCommand from "./sign-in.command";

export default interface SignInUseCase {
  signIn(command: SignInCommand);
}
