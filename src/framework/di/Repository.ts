import { IRepository } from './IRepository';
import { UserRepository } from '../../adapter/repository/User';
import { IInfra } from './IInfra';

export default (infra: IInfra): IRepository => ({
  user: new UserRepository(infra.http),
});
