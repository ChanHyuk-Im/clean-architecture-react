import { IUserEntity } from '../../../domain/entity/interface/IUser';

export interface IUserPresenter {
  getUser: () => Promise<IUserEntity | null>;
  setName: (name: IUserEntity['name']) => Promise<boolean>;
}
