import { IUserUsecase } from '../../../domain/usecase/interface/IUser';
import { ISessionUsecase } from '../../../domain/usecase/interface/ISession';

export interface IUsecase {
  user: IUserUsecase;
  session: ISessionUsecase;
}
