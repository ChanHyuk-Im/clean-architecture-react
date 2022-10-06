import React from 'react';
import { IUserEntity } from '../../../domain/entity/interface/IUser';
import di from '../../di';

const User = () => {
  const [userInfo, setUserInfo] = React.useState<IUserEntity | null>(null);

  React.useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const _userInfo = await di.user.getUser();

    setUserInfo(_userInfo);
  };

  return (
    <div>
      <>
        <div>{userInfo?.id}</div>
        <div>{userInfo?.email}</div>
        <div>{userInfo?.name}</div>
        <div>{userInfo?.role}</div>
        <div>{userInfo?.createdAt.toString()}</div>
      </>
    </div>
  );
}

export default User;
