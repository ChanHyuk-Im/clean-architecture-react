import { IUsecase } from './IUsecase';
import { UserUsecase } from '../../domain/usecase/User';
import { IRepository } from './IRepository';

export default (repository: IRepository): IUsecase => ({
  user: new UserUsecase(repository.user),
});
