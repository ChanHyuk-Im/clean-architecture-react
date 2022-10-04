type Role = 'admin' | 'user';

export interface IUserEntity {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: Date;
}

export interface IUserData {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: Date;
}
