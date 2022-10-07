import { IUserRepository } from '../../../domain/repository/interface/IUser';
import { ISessionRepository } from '../../../domain/repository/interface/ISession';

export interface IRepository {
  user: IUserRepository;
  session: ISessionRepository;
}
