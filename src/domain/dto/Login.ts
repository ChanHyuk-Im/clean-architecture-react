interface ILoginParams {
  email: string;
  password: string;
}

export interface ILoginDto {
  email: string;
  password: string;
}

export class LoginDto implements ILoginDto {
  email: ILoginDto['email'];
  password: ILoginDto['password'];

  constructor(params: ILoginParams) {
    this.email = params.email;
    this.password = params.password;
  }
}
