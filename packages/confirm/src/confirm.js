import {paramsMatching} from "../../../src/utils/util";

export const DefaultConfirmOptions = {
  title: undefined,
  iconName: undefined,
  showClose: true,
  confirmButtonText: '确定',
  clickConfirm: undefined,
  cancelButtonText: '取消',
  clickCancel: undefined,
  onClose: undefined,
  showHeader: true
};

export const ConfirmOptions = Object.assign({message: ''}, DefaultConfirmOptions);

function matchArgs(args) {
  return paramsMatching([{
    name: 'message',
    type: 'string',
    count: 1,
    default: ConfirmOptions.message
  }, {
    name: 'title',
    type: 'string',
    count: 2,
    default: ConfirmOptions.title
  }, {
    name: 'iconName',
    type: 'string',
    count: 3,
    default: ConfirmOptions.iconName
  }, {
    name: 'showClose',
    type: 'boolean',
    count: 1,
    default: ConfirmOptions.showClose
  }, {
    name: 'confirmButtonText',
    type: 'string',
    count: 4,
    default: ConfirmOptions.confirmButtonText
  }, {
    name: 'clickConfirm',
    type: 'function',
    count: 1,
    default: ConfirmOptions.clickConfirm
  }, {
    name: 'cancelButtonText',
    type: 'string',
    count: 5,
    default: ConfirmOptions.cancelButtonText
  }, {
    name: 'clickCancel',
    type: 'function',
    count: 2,
    default: ConfirmOptions.clickCancel
  }, {
    name: 'onClose',
    type: 'function',
    count: 3,
    default: ConfirmOptions.onClose
  }, {
    name: 'showHeader',
    type: 'boolean',
    count: 2,
    default: ConfirmOptions.showHeader
  }], args);
}

export class Confirm {

  open(...args) {
    return matchArgs(args);
  };

  close(instance) {
  };

  closeAll() {
  };

}

