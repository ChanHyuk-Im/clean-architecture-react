import { IHttp, IRequestOptions } from './IHttp';

export class Http implements IHttp {
  constructor() {}

  async request(url: string, requestOptions: IRequestOptions): Promise<any> {
    const options = { ...requestOptions };

    if(options.body) {
      options.body = JSON.stringify(options.body);
    }

    return fetch(url, options).then(res => res.json()).catch((err) => console.log(err));
  }
}
