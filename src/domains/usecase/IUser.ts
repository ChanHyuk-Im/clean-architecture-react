import { IUserEntity } from '../entity/IUser';

export interface IUserUsecase {
  getUser: () => Promise<IUserEntity | null>;
  setName: (name: IUserEntity['name']) => Promise<boolean>;
}
