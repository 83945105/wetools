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
import 'wetools/lib/theme-chalk/index.css';//引入css
Vue.use(wetools);//注册到Vue

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 wetools 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

如果你只希望引入部分组件，比如 LayerFrame 和 LayerFrameTop，那么需要在 main.js 中写入以下内容：

```javascript
import App from './App.vue';
import Vue from 'vue';

import { LayerFrame, LayerFrameTop } from 'wetools';//导出所需组件

Vue.component(LayerFrame.name, LayerFrame);//注册
Vue.component(LayerFrameTop.name, LayerFrameTop);

//或者
Vue.use(LayerFrame);
Vue.use(LayerFrameTop);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 全局配置(暂未生效)

在引入 wetools 时，可以传入一个全局配置对象。该对象目前仅支持 `size` 字段，用于改变组件的默认尺寸。按照引入 wetools 的方式，具体操作如下：

完整引入 wetools：

```js
import Vue from 'vue';
import wetools from 'wetools';
Vue.use(wetools, { size: 'small' });
```

按需引入 wetools：

```js
import Vue from 'vue';
import { Button } from 'wetools';

Vue.prototype.$WEVIEW = { size: 'small' };
Vue.use(Button);
```

按照以上设置，项目中所有拥有 `size` 属性的组件的默认尺寸均为 'small'。

### 开始使用

至此，一个基于 Vue 和 wetools 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
