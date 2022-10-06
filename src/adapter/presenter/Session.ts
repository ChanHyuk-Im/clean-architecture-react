import { ISessionPresenter } from './interface/ISession';
import { ISessionUsecase } from '../../domain/usecase/interface/ISession';
import { ILoginDto } from '../../domain/dto/Login';

export class SessionPresenter implements ISessionPresenter {
  constructor(private usecase: ISessionUsecase) {}

  async login(dto: ILoginDto): Promise<string | null> {
    return await this.usecase.login(dto);
  }

  async getToken(): Promise<string | null> {
    return await this.usecase.getToken();
  }

  async setToken(token: string): Promise<void> {
    await this.usecase.setToken(token);
  }

  async removeToken(): Promise<void> {
    await this.usecase.removeToken();
  }
}
