import Default from '../data-parser/src/default.js';

const DataParser = {

  install(Vue, {use = Default, options} = {use: Default}) {
    use.setOptions(options);
    Vue.prototype.$dataParser = use;
  }
};

export default DataParser;
