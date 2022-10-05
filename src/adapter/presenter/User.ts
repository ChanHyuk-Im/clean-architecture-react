import { IUserPresenter } from './IUser';
import { IUserEntity } from '../../domain/entity/IUser';
import { IUserUsecase } from '../../domain/usecase/IUser';

export class UserPresenter implements IUserPresenter {
  constructor(private userUsecase: IUserUsecase) {}

  async getUser(): Promise<IUserEntity | null> {
    return await this.userUsecase.getUser();
  }

  async setName(name: IUserEntity['name']): Promise<boolean> {
    return await this.userUsecase.setName(name);
  }
}
