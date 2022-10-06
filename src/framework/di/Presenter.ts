import { IPresenter } from './interface/IPresenter';
import { UserPresenter } from '../../adapter/presenter/User';
import { IUsecase } from './interface/IUsecase';

const presenter = (usecase: IUsecase): IPresenter => ({
  user: new UserPresenter(usecase.user),
});

export default presenter;
