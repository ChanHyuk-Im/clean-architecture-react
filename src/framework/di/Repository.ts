import { IRepository } from './interface/IRepository';
import { UserRepository } from '../../adapter/repository/User';
import { SessionRepository } from '../../adapter/repository/Session';
import { IInfra } from './interface/IInfra';

const presenter = (infra: IInfra): IRepository => ({
  user: new UserRepository(infra.http),
  session: new SessionRepository(infra.http, infra.storage),
});

export default presenter;
