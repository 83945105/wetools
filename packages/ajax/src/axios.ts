import {Ajax} from "./ajax";

const AxiosOptions = {};

export class Axios implements Ajax {

  get(url: string, params: object | (string | number | boolean)[] = [], options: object = AxiosOptions): void {

  }

  post(url: string, params: object = {}, options: object = AxiosOptions): void {

  }

  put(url: string, params: object | (string | number | boolean)[] = [], options: object = AxiosOptions): void {

  }

  delete(url: string, params: object | (string | number | boolean)[] = [], options: object = AxiosOptions): void {

  }


}
