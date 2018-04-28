import Ajax from "./ajax/index.js";

const plugins = {
  Ajax: Ajax
};

const install = function (Vue, opts = {}) {

  for (let name in plugins) {
    plugins[name].install(Vue, opts[name]);
  }

};

export {
  Ajax
}

export default install;
