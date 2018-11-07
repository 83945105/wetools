<script>
  export default {
    methods: {
    }
  }
</script>
# Confirm 消息提示

- 支持简化传参功能
- 在Vue环境中请使用this.$Confirm调用

### 使用方式

:::demo

```html

  <template>
    <we-button @click="$Confirm('普通的询问框')">普通的询问框</we-button>
    <we-button @click="$Confirm({message: '......',clickConfirm(e, close) {close()}})">点击确认按钮关闭</we-button>
  </template>

```
:::

### 支持的组件库

目前支持以下组件库：weview

### Confirm Methods
| 方法名     | 说明                                     | 参数          | 参数类型   | 返回值        |
|---------- |----------------------------------------- |--------------|----------- |------------- |
|   ——      | 打开一个询问框                             |	参考Confirm Attributes |	——         | 弹层实例 |
| close     | 关闭指定询问框                            |	弹层实例       |	——         | —— |
| closeAll  | 关闭所有询问框                            |	——             |	——       | —— |

### Confirm Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   | 优先级 |
|---------- |------------------------------------ |---------- |------------- |-------- |-------- |
| message   |	提示内容                             |	string    |	——          |	——       | 1 |
| title     |	标题                                 |	string    |	——          |	不同调用方式默认值不同    | 2 |
| iconName  |	图标名称                             |	string    |	——          |	不同调用方式默认值不同       | 3 |
| showClose |	是否显示关闭按钮                      |	boolean   |	——          |	true     | 1 |
| confirmButtonText |	确认按钮文本                 |	string    |	——          |	确定     | 4 |
| clickConfirm   |	点击确认按钮时的回调函数         |	function  |	——          |	——       | 1 |
| cancelButtonText|	取消按钮文本                    |	string   |	——          |	取消     | 5 |
| clickCancel|	点击取消按钮时的回调函数             |	function   |	——          |	——     | 2 |
| onClose|	关闭时的回调函数                        |	function   |	——          |	——     | 3 |
| showHeader|	是否显示头部                         |	boolean   |	——          |	true     | 2 |
