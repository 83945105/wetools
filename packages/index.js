/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/19
 * version: v1.0
 */


const components = [
];

const install = function (Vue, opts = {}) {

  components.map(component => Vue.component(component.name, component));

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
}

export default install;
