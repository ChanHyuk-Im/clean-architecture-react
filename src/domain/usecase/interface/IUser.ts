import { IUserEntity } from '../../entity/interface/IUser';

export interface IUserUsecase {
  getUser: () => Promise<IUserEntity | null>;
  setName: (name: IUserEntity['name']) => Promise<boolean>;
}
