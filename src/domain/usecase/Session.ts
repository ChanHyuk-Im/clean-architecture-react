import { ISessionUsecase } from './interface/ISession';
import { ILoginDto } from '../dto/Login';
import { ISessionRepository } from '../repository/interface/ISession';

export class Session implements ISessionUsecase {
  constructor(private sessionRepository: ISessionRepository) {}

  async login(dto: ILoginDto): Promise<string> {
    return await this.sessionRepository.login(dto);
  }

  async getToken(): Promise<string> {
    return await this.sessionRepository.getToken();
  }

  async setToken(token: string): Promise<void> {
    await this.sessionRepository.setToken(token);
  }

  async removeToken(): Promise<void> {
    await this.sessionRepository.removeToken();
  }
}