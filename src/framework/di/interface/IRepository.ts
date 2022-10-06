import { IUserRepository } from '../../../domain/repository/interface/IUser';

export interface IRepository {
  user: IUserRepository;
}
