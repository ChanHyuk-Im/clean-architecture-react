import { IUserPresenter } from '../../../adapter/presenter/interface/IUser';
import { ISessionPresenter } from '../../../adapter/presenter/interface/ISession';

export interface IPresenter {
  user: IUserPresenter;
  session: ISessionPresenter;
}
