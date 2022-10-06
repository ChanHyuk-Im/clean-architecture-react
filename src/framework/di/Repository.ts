import { IRepository } from './interface/IRepository';
import { UserRepository } from '../../adapter/repository/User';
import { IInfra } from './interface/IInfra';

const presenter = (infra: IInfra): IRepository => ({
  user: new UserRepository(infra.http),
});

export default presenter;
