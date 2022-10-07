import React from 'react';
import useStateStore from '../../store/state';
import di from '../../di';

const Login = () => {
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

  const onLoginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const loginToken = await di.session.login({ email: 'test@email.com', password: 'test-password' });

    await di.session.setToken(loginToken as string);
    setToken(loginToken as string);
  };

  return (
    <div>
      <button onClick={onLoginClick}>로그인</button>
    </div>
  );
}

export default Login;
