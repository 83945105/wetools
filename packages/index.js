import Ajax from "./ajax/index.js";
import Message from "./message/index.js";
import DataParser from "./data-parser/index.js";

const plugins = {
  Ajax: Ajax,
  Message: Message,
  DataParser: DataParser
};

const install = function (Vue, opts = {}) {

  for (let name in plugins) {
    plugins[name].install(Vue, opts[name]);
  }

};

export {
  Ajax,
  Message,
  DataParser
}

export default install;
