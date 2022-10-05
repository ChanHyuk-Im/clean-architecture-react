import { IPresenter } from './IPresenter';
import { UserPresenter } from '../../adapter/presenter/User';
import { IUsecase } from './IUsecase';

export default (usecase: IUsecase): IPresenter => ({
  user: new UserPresenter(usecase.user),
});
