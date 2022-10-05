import { IInfra } from './IInfra';
import { Http } from '../../adapter/infra/Http';

export default (): IInfra => ({
  http: new Http(),
});
