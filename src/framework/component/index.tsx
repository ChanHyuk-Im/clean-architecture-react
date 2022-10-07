import React from 'react';
import User from './user';
import Login from './login';
import useStateStore from '../store/state';
import di from '../di';

const Index = () => {
  const { token, setToken } = useStateStore();

  React.useEffect(() => {
    init();
  }, [token]);

  const init = async () => {
    const storageToken = await di.session.getToken();

    if(storageToken) {
      await di.session.setToken(storageToken);
      setToken(storageToken);
    }
  };

  return (
    <div>
      index
      {
        token === ''
          ? <Login />
          : <User />
      }
    </div>
  );
}

export default Index;
