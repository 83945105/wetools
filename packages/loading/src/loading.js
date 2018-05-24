import {paramsMatching} from "../../../src/utils/util.js";

export const DefaultLoadingOptions = {
  target: document.body,
  text: '加载中',
  background: undefined,
  fullscreen: false
};

export const LoadingOptions = Object.assign({}, DefaultLoadingOptions);

export class Loading {

  service(args) {
    return paramsMatching([{
      name: 'target',
      type: 'string',
      count: 1,
      default: LoadingOptions.target
    }, {
      name: 'target',
      type: 'htmlElement',
      count: 1,
      default: LoadingOptions.target
    }, {
      name: 'text',
      type: 'string',
      count: 2,
      default: LoadingOptions.text
    }, {
      name: 'background',
      type: 'string',
      count: 3,
      default: LoadingOptions.background
    }, {
      name: 'fullscreen',
      type: 'boolean',
      count: 1,
      default: LoadingOptions.fullscreen
    }], args);
  };

  close(target) {
  };

  closeAll() {
  };
}
