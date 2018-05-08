import {paramsMatching} from "../../../src/utils/util";

export const DefaultAlertOptions = {
  title: undefined,
  closable: true,
  center: true,
  showClose: true,
  confirmButtonText: '确定',
  onClose() {
  }
};

export const AlertOptions = Object.assign({message: ''}, DefaultAlertOptions);

export const AlertType = {
  /** 失败 */
  FAIL: 0,
  /** 成功 */
  SUCCESS: 1,
  /** 警告 */
  WARN: 2,
  /** 信息 */
  INFO: 3,
  /** 错误 */
  ERROR: 4
};

export class Alert {

  open(...args) {
    return paramsMatching([{
      name: 'title',
      type: 'string',
      count: 2,
      default: AlertOptions.title
    },{
      name: 'message',
      type: 'string',
      count: 1,
      default: AlertOptions.message
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: AlertOptions.message
    }], args);
  }


}

