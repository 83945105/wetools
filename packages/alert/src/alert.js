import {paramsMatching} from "../../../src/utils/util";

export const DefaultAlertOptions = {
  title: undefined,
  iconName: undefined,
  showClose: true,
  confirmButtonText: '确定',
  onClose: undefined,
  showHeader: true
};

export const AlertOptions = Object.assign({message: ''}, DefaultAlertOptions);

function matchArgs(args) {
  return paramsMatching([{
    name: 'message',
    type: 'string',
    count: 1,
    default: AlertOptions.message
  }, {
    name: 'title',
    type: 'string',
    count: 2,
    default: AlertOptions.title
  }, {
    name: 'iconName',
    type: 'string',
    count: 3,
    default: AlertOptions.iconName
  }, {
    name: 'showClose',
    type: 'boolean',
    count: 1,
    default: AlertOptions.showClose
  }, {
    name: 'confirmButtonText',
    type: 'string',
    count: 4,
    default: AlertOptions.confirmButtonText
  }, {
    name: 'onClose',
    type: 'function',
    count: 1,
    default: AlertOptions.onClose
  }, {
    name: 'showHeader',
    type: 'boolean',
    count: 2,
    default: AlertOptions.onClose
  }], args);
}

export class Alert {

  open(...args) {
    return matchArgs(args);
  };

  success(...args) {
    return matchArgs(args);
  };

  fail(...args) {
    return matchArgs(args);
  };

  error(...args) {
    return matchArgs(args);
  };

  warn(...args) {
    return matchArgs(args);
  };

  info(...args) {
    return matchArgs(args);
  };

  close(instance) {
  };

  closeAll() {
  };

}

