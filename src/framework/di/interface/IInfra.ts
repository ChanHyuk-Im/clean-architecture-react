import { IHttp } from '../../../adapter/infra/interface/IHttp';
import { IStorage } from '../../../adapter/infra/interface/IStorage';

export interface IInfra {
  http: IHttp;
  storage: IStorage;
}
