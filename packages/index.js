import Ajax from "./ajax/index.js";
import DataParser from "./data-parser/index.js";
import Message from "./message/index.js";
import Loading from "./loading/index.js";

const plugins = {
  Ajax: Ajax,
  Message: Message,
  DataParser: DataParser,
  Loading: Loading
};

const install = function (Vue, opts = {}) {

  for (let name in plugins) {
    plugins[name].install(Vue, opts[name]);
  }

};

export {
  Ajax,
  Message,
  DataParser,
  Loading
}

export default install;
