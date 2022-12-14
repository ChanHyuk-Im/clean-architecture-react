import { IUserEntity, Role } from '../../domain/entity/interface/IUser';
import { UserEntity } from '../../domain/entity/User';
import { IUserRepository } from '../../domain/repository/interface/IUser';
import { IHttp } from '../infra/interface/IHttp';

export class UserRepository implements IUserRepository {
  constructor(private http: IHttp) {}

  async getUser(): Promise<IUserEntity | null> {
    // const response = await this.http.request('http://localhost:3030/users/1', {
    //   method: 'GET',
    // });
    const response = {
      content: {
        id: 'test-id',
        email: 'test@email.com',
        name: 'test-name',
        role: 'user' as Role,
        createdAt: new Date(),
      },
    };

    if(response.content) {
      return new UserEntity({
        id: response.content.id,
        email: response.content.email,
        name: response.content.name,
        role: response.content.role,
        createdAt: response.content.createdAt,
      });
    }

    return null;
  }

  async setName(name: IUserEntity['name']): Promise<boolean> {
    // const response = await this.http.request('http://localhost:3030/users/1/name', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: { name },
    // });
    const response = {
      content: {},
    };

    if(response.content) {
      return true;
    }

    return false;
  }
}
