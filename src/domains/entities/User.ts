import { IUserEntity, IUserData } from './IUser';

export class UserEntity implements IUserEntity {
  private _id: IUserEntity['id'];
  private _email: IUserEntity['email'];
  private _name: IUserEntity['name'];
  private _role: IUserEntity['role'];
  private _createdAt: IUserEntity['createdAt'];

  constructor(params: IUserData) {
    this._id = params.id;
    this._email = params.email;
    this._name = params.name;
    this._role = params.role;
    this._createdAt = params.createdAt;
  }

  get id(): IUserEntity['id'] {
    return this._id;
  }

  get email(): IUserEntity['email'] {
    return this._email;
  }

  get name(): IUserEntity['name'] {
    return this._name;
  }

  get role(): IUserEntity['role'] {
    return this._role;
  }

  get createdAt(): IUserEntity['createdAt'] {
    return this._createdAt;
  }
}
