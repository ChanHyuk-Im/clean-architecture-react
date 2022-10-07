import React from 'react';
import { IUserEntity } from '../../../domain/entity/interface/IUser';
import useStateStore from '../../store/state';
import di from '../../di';

const User = () => {
  const { token, setToken } = useStateStore();
  const [userInfo, setUserInfo] = React.useState<IUserEntity | null>(null);

  React.useEffect(() => {
    init();
  }, [token]);

  const init = async () => {
    const _userInfo = await di.user.getUser();

    setUserInfo(_userInfo);
  };

  const onLogoutClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await di.session.removeToken();
    setToken('');
  };

  return (
    <div>
      <>
        <div>{userInfo?.id}</div>
        <div>{userInfo?.email}</div>
        <div>{userInfo?.name}</div>
        <div>{userInfo?.role}</div>
        <div>{userInfo?.createdAt.toString()}</div>
        <button onClick={onLogoutClick}>로그아웃</button>
      </>
    </div>
  );
}

export default User;
