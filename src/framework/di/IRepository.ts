import { IUserRepository } from '../../domain/repository/IUser';

export interface IRepository {
  user: IUserRepository;
}
