import { IUserEntity } from '../../domain/entity/IUser';

export interface IUserPresenter {
  getUser: () => Promise<IUserEntity | null>;
  setName: (name: IUserEntity['name']) => Promise<boolean>;
}
