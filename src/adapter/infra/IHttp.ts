export interface IRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: any;
  body?: any;
}

export interface IHttp {
  request: (url: string, options: IRequestOptions) => Promise<any>;
}
