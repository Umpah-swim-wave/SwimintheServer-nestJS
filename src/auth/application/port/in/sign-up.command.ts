export default class SignUpCommand {
  readonly nickname: string;
  readonly phone: string;

  constructor(nickname: string, phone: string) {
    this.nickname = nickname;
    this.phone = phone;
  }
}
