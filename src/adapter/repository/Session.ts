import { ISessionRepository } from '../../domain/repository/interface/ISession';
import { IHttp } from '../infra/interface/IHttp';
import { IStorage } from '../infra/interface/IStorage';
import { ILoginDto } from '../../domain/dto/Login';

export class SessionRepository implements ISessionRepository {
  constructor(
    private http: IHttp,
    private storage: IStorage,
  ) {}

  async login(dto: ILoginDto): Promise<string | null> {
    const { email, password } = dto;
    // const response = await this.http.request('http://localhost:3030/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: {
    //     email,
    //     password,
    //   },
    // });
    const response = {
      content: 'test-token',
    };

    if(response.content) {
      return response.content;
    }

    return null;
  }

  async getToken(): Promise<string | null> {
    return await this.storage.get('token');
  }

  async setToken(token: string): Promise<void> {
    await this.storage.set('token', token);
  }

  async removeToken(): Promise<void> {
    await this.storage.remove('token');
  }
}
