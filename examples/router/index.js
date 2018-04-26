import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import docsConf from '../docs.config';
import testConf from '../test.config';

//文档路由
let DocRoutes = {
  path: '/docs',
  name: "Docs",
  component: r => require.ensure([], () => r(require(`../components/Docs.vue`))),
  children: []
};

//测试路由
let TestRoutes = {
  path: '/test',
  name: "Test",
  component: r => require.ensure([], () => r(require(`../components/Test.vue`))),
  children: []
};

let initRouter = (routers = [], parent, folder, suffix) => {
  routers.forEach(router => {
    if (router.items) {
      let r = {
        path: router.path,
        name: router.name,
        component: r => require.ensure([], () => r(require(`../components/${router.name}.vue`))),
        children: []
      };
      initRouter(router.items, r, folder, suffix);
      parent.children.push(r);
    } else {
      parent.children.push({
        path: router.path,
        name: router.name,
        component: r => require.ensure([], () => r(require(`../${folder}/${router.name}.${suffix}`)))
      });
    }
  });
};

initRouter(docsConf, DocRoutes, "docs", "md");
initRouter(testConf, TestRoutes, "test", "vue");

export default new Router({
  routes: [{
    path: "/",
    redirect: "Docs",
  }, DocRoutes, TestRoutes]
});
