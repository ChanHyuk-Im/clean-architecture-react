import { IInfra } from './interface/IInfra';
import { Http } from '../../adapter/infra/Http';

const infra = (): IInfra => ({
  http: new Http(),
});

export default infra;
