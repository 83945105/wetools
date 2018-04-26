<script>
  export default {
    data() {
      return {
        show: false
      };
    }
  }
</script>
# LayerFrame 弹层框架

### 基础用法

绑定一个value值让面板显示，默认从右方弹出

:::demo

```html
  <we-layer-frame :value="true">
    这里写面板要展示的内容
  </we-layer-frame>
```
:::

### 使用v-model控制面板弹出，设置弹出方向为底部弹出

:::demo

```html
  //show为控制面板弹出的变量,只需要改变show的值(true/false)即可控制面板显示与隐藏
  <we-layer-frame v-model="show" position="bottom">
    这里写面板要展示的内容
  </we-layer-frame>
```
:::

### 配合LayerFrameTop一起使用

:::demo

```html
  <we-layer-frame v-model="show">
    <we-layer-frame-top slot="top" label="这是一个头部"></we-layer-frame-top>
    这里写面板要展示的内容
  </we-layer-frame>
```
:::

### LayerFrame Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| value      |	用于控制面板是否显示，支持v-model |	boolean |	—— |	false |
| position	  | 面板展开方向 |	string | left / right / top / bottom	|	right |
| width	    | 面板宽度，仅当position为left、right时有效 |	string / number | ——	|	50% |
| height	    | 面板高度，仅当position为top、bottom时有效 |	string / number | ——	|	50% |
| mask-closable |	是否允许点击遮罩层关闭面板 |	boolean |	—— | true |
| esc-closeable |	是否允许点击键盘Esc键关闭面板 | boolean | —— | true |
| duration     |	面板展开过程持续时间，单位：秒 | number |	—— | 0.5 |
| delay	| 面板展开延迟时间，单位：毫秒 | number |	—— | 100 |
| custom-class  | 自定义面板Class类名 | string | —— | —— |
| custom-mask-class | 自定义遮罩层Class类名 | string | —— | —— |

### LayerFrame Slot
| name      | 说明                                 |
|---------- |------------------------------------ |
| —— | LayerFrame弹层框架的内容 |
| top | 用于放置LayerFrameTop |

### LayerFrameTop Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| label     |	标签 | string |	—— | 详情 |
| show-close-icon |	是否显示关闭图标 |	boolean |	—— | true |

### LayerFrameTop Slot
| name      | 说明                                 |
|---------- |------------------------------------ |
| —— | LayerFrameTop的内容，注意，使用该项默认内容将会消失 |

### LayerFrameTop Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| close | 点击自带关闭图标时触发 | 事件参数event |
