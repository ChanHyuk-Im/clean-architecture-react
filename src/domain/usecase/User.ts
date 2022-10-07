import { UserEntity } from '../entity/User';
import { IUserEntity } from '../entity/interface/IUser';
import { IUserUsecase } from './interface/IUser';
import { IUserRepository } from '../repository/interface/IUser';

export class UserUsecase implements IUserUsecase {
  constructor(private userRepository: IUserRepository) {}

  async getUser(): Promise<IUserEntity | null> {
    const user = await this.userRepository.getUser();

    if(user) {
      return new UserEntity({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
      });
    }

    return null;
  }

  async setName(name: IUserEntity['name']): Promise<boolean> {
    return await this.userRepository.setName(name);
  }
}
