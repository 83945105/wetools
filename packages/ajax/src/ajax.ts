export interface Ajax {

  get(url: string, params?: object | (string | number | boolean)[], options?: object): void;

  post(url: string, params?: object, options?: object): void;

  put(url: string, params?: object | (string | number | boolean)[], options?: object): void;

  delete(url: string, params?: object | (string | number | boolean)[], options?: object): void;
  
}
