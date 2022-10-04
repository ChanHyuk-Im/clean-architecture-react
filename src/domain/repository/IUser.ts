import { IUserEntity } from '../entity/IUser';

export interface IUserRepository {
  getUser: () => Promise<IUserEntity | null>;
  setName: (name: IUserEntity['name']) => Promise<boolean>;
}
