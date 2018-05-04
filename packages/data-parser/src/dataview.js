import {Parser} from "./parser.js";
import {MessageType} from "../../message/src/message.js";

export class DataView extends Parser {

  new() {
    return new DataView();
  };

  parse(data, res) {
    let {message, type} = data.resultInfo;
    let $message = new this._options.messageOptions.use();
    let {close: notSuccessClose, callback: notSuccessCallback} = this._options.notSuccessOptions;
    let {close: finallyClose, callback: finallyCallback} = this._options.finallyOptions;
    switch (type) {
      case MessageType.SUCCESS:
        let {close: successClose, callback: successCallback} = this._options.successOptions;
        if (successClose !== true) {
          $message.success(Object.assign({}, {message: message}, this._options.successOptions));
        }
        successCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      case MessageType.FAIL:
        let {close: failClose, callback: failCallback} = this._options.failOptions;
        if (failClose !== true) {
          $message.fail(Object.assign({}, {message: message}, this._options.failOptions));
        }
        failCallback(data, res);

        if (notSuccessClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notSuccessOptions));
        }
        notSuccessCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      case MessageType.WARN:
        let {close: warnClose, callback: warnCallback} = this._options.warnOptions;
        if (warnClose !== true) {
          $message.warn(Object.assign({}, {message: message}, this._options.warnOptions));
        }
        warnCallback(data, res);

        if (notSuccessClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notSuccessOptions));
        }
        notSuccessCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      case MessageType.INFO:
        let {close: infoClose, callback: infoCallback} = this._options.infoOptions;
        if (infoClose !== true) {
          $message.info(Object.assign({}, {message: message}, this._options.infoOptions));
        }
        infoCallback(data, res);

        if (notSuccessClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notSuccessOptions));
        }
        notSuccessCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      case MessageType.ERROR:
        let {close: errorClose, callback: errorCallback} = this._options.errorOptions;
        if (errorClose !== true) {
          $message.error(Object.assign({}, {message: message}, this._options.errorOptions));
        }
        errorCallback(data, res);

        if (notSuccessClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notSuccessOptions));
        }
        notSuccessCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      case MessageType.NEED_LOGIN:
        let {close: needLoginClose, callback: needLoginCallback} = this._options.needLoginOptions;
        if (needLoginClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.needLoginOptions));
        }
        needLoginCallback(data, res);

        if (notSuccessClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notSuccessOptions));
        }
        notSuccessCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      case MessageType.NO_AUTHORITY:
        let {close: noAuthorityClose, callback: noAuthorityCallback} = this._options.noAuthorityOptions;
        if (noAuthorityClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.noAuthorityOptions));
        }
        noAuthorityCallback(data, res);

        if (notSuccessClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notSuccessOptions));
        }
        notSuccessCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      case MessageType.NOT_FOUND:
        let {close: notFoundClose, callback: notFoundCallback} = this._options.notFoundOptions;
        if (notFoundClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notFoundOptions));
        }
        notFoundCallback(data, res);

        if (notSuccessClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.notSuccessOptions));
        }
        notSuccessCallback(data, res);

        if (finallyClose !== true) {
          $message.open(Object.assign({}, {message: message}, this._options.finallyOptions));
        }
        finallyCallback(data, res);
        break;
      default:
        throw new Error(`消息类型不正确,MessageType:${type}`);
    }
  };

}
