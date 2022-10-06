import { ILoginDto } from '../../dto/Login';

export interface ISessionRepository {
  login: (dto: ILoginDto) => Promise<string>;
  getToken: () => Promise<string>;
  setToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
}
