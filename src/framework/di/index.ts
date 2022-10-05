import infra from './Infra';
import repository from './Repository';
import usecase from './Usecase';
import presenter from './Presenter';

export default presenter(usecase(repository(infra())));
