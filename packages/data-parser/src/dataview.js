import {Parser} from "./parser.js";
import {MessageType} from "../../message/src/message.js";

export class DataView extends Parser {

  new() {
    return new DataView();
  };

  parse(data, res) {
    let {message, type} = data.resultInfo;
    let $message = new this._options.messageOptions.use();
    switch (type) {
      case MessageType.SUCCESS:
        let {close, callback} = this._options.successOptions;
        if(close !== true) {
          $message.success(Object.assign({}, {message: message}, this._options.successOptions));
        }
        callback(data, res);
        break;
      case MessageType.FAIL:

        break;
      case MessageType.WARN:

        break;
      case MessageType.INFO:

        break;
      case MessageType.ERROR:

        break;
      case MessageType.NEED_LOGIN:

        break;
      case MessageType.NO_AUTHORITY:

        break;
      case MessageType.NOT_FOUND:

        break;
      default:
        throw new Error(`消息类型不正确,MessageType:${type}`);
    }
  };

}
