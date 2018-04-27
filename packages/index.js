import Ajax from "./ajax/index.js";

const plugins = {
  Ajax: Ajax
};

const install = function (Vue, opts = {}) {

  for (let plugin in plugins) {
    plugins[plugin].install(Vue, opts[plugin]);
  }

};

export {
  Ajax
}

export default install;
