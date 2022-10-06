import { IUserEntity } from '../entity/interface/IUser';
import { IUserUsecase } from './interface/IUser';
import { IUserRepository } from '../repository/interface/IUser';

export class UserUsecase implements IUserUsecase {
  constructor(private userRepository: IUserRepository) {}

  async getUser(): Promise<IUserEntity | null> {
    return await this.userRepository.getUser();
  }

  async setName(name: IUserEntity['name']): Promise<boolean> {
    return await this.userRepository.setName(name);
  }
}
