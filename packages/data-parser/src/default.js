import {Parser} from "./parser";

export class Default extends Parser {

  new() {
    return new Default();
  };

  parse(data, res) {
    let {callback: successCallback} = this._options.successOptions;
    successCallback(data, res);
    let {callback: finallyCallback} = this._options.finallyOptions;
    finallyCallback(data, res);
  };

}
