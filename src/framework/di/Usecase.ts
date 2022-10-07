import { IUsecase } from './interface/IUsecase';
import { UserUsecase } from '../../domain/usecase/User';
import { SessionUsecase } from '../../domain/usecase/Session';
import { IRepository } from './interface/IRepository';

const usecase = (repository: IRepository): IUsecase => ({
  user: new UserUsecase(repository.user),
  session: new SessionUsecase(repository.session),
});

export default usecase;
