import { IPresenter } from './interface/IPresenter';
import { UserPresenter } from '../../adapter/presenter/User';
import { SessionPresenter } from '../../adapter/presenter/Session';
import { IUsecase } from './interface/IUsecase';

const presenter = (usecase: IUsecase): IPresenter => ({
  user: new UserPresenter(usecase.user),
  session: new SessionPresenter(usecase.session),
});

export default presenter;
