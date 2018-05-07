import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import docsConf from '../docs.config';
import testConf from '../test.config';

//文档路由
let DocRoutes = {
  path: '/',
  name: "Doc",
  redirect: {name: 'Install'},
  component: r => require.ensure([], () => r(require(`../components/Docs.vue`))),
  children: []
};

//测试路由
let TestRoutes = {
  path: '/test',
  name: "Test",
  redirect: {name: 'MessageTest'},
  component: r => require.ensure([], () => r(require(`../components/Test.vue`))),
  children: []
};

let initRouter = (routers = [], parent, folder, suffix) => {
  routers.forEach(router => {
    if (router.items) {
      initRouter(router.items, parent, folder, suffix);
    } else {
      parent.children.push({
        path: router.path.replace("/", ""),
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
    redirect: {name: 'Plugins'},
  }, {
    path: "/plugins",
    name: "Plugins",
    redirect: {name: 'Doc'},
    component: r => require.ensure([], () => r(require(`../components/Component.vue`))),
    children: [DocRoutes]
  }, {
    path: "/",
    name: "Other",
    redirect: {name: 'Test'},
    component: r => require.ensure([], () => r(require(`../components/Other.vue`))),
    children: [TestRoutes]
  }]
});

