import {Parser} from "./parser.js";

export class Default extends Parser {

  new() {
    return new Default();
  };

  parse(data, res) {
    let {callback: successCallback} = this._options.successOptions;
    this.executeBefore(data, res);
    successCallback(data, res);
    this.executeFinally(data, res);
  };

}
