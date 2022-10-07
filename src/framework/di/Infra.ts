import { IInfra } from './interface/IInfra';
import { Http } from '../../adapter/infra/Http';
import { Storage } from '../../adapter/infra/Storage';

const infra = (): IInfra => ({
  http: new Http(),
  storage: new Storage(window.localStorage),
});

export default infra;
