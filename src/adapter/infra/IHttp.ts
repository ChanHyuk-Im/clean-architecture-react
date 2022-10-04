export interface IRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  header?: any;
  body?: any;
}

export interface IHttp {
  request: (url: string, options: IRequestOptions) => Promise<any>;
}
