import { IUsecase } from './interface/IUsecase';
import { UserUsecase } from '../../domain/usecase/User';
import { IRepository } from './interface/IRepository';

const usecase = (repository: IRepository): IUsecase => ({
  user: new UserUsecase(repository.user),
});

export default usecase;
