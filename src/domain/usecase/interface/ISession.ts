import { ILoginDto } from '../../dto/Login';

export interface ISessionUsecase {
  login: (dto: ILoginDto) => Promise<string | null>;
  getToken: () => Promise<string | null>;
  setToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
}
