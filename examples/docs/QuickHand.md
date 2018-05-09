## 快速上手

本节将介绍如何在项目中使用 wetools。

### 使用 Starter Kit

我们提供了通用的[项目模板](https://gitee.com/83945105/ssm-vue-frame)。
该模板前端为基于vue的多页应用,后端为基于spring boot、mybatis的Java应用

如果不希望使用我们提供的模板，请继续阅读。

### 引入 wetools

你可以引入整个 wetools，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 wetools。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import App from './App.vue';

import wetools from 'wetools';//引入weview
Vue.use(wetools);//注册到Vue

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 wetools 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

如果你只希望引入部分插件，比如 Ajax，那么需要在 main.js 中写入以下内容：

```javascript
import App from './App.vue';
import Vue from 'vue';

import { Ajax } from 'wetools';//导出所需插件

Vue.component(Ajax.name, Ajax);//注册

//或者
Vue.use(Ajax);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 全局配置

在引入 wetools 时，可以传入一个全局配置对象。按照引入 wetools 的方式，具体操作如下：

完整引入 wetools：

```js
import Vue from 'vue';
import wetools from 'wetools';
Vue.use(wetools, {
  Ajax: {
    //TODO 自定义Ajax配置
  }
});
```

按需引入 wetools：

```js
import Vue from 'vue';
import { Ajax } from 'wetools';

Vue.use(Ajax, {
  //TODO 自定义Ajax配置
});
```

详细的全局配置请参考接下来的完整全局配置章节

### 开始使用

至此，一个基于 Vue 和 wetools 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
