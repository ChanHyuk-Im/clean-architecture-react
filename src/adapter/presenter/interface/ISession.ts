import { ILoginDto } from '../../../domain/dto/Login';

export interface ISessionPresenter {
  login: (dto: ILoginDto) => Promise<string | null>;
  getToken: () => Promise<string | null>;
  setToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
}
