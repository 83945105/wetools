<script>
  export default {
    methods: {
      open() {},
      success() {}
    }
  }
</script>
# Message 消息提示

- 支持简化传参功能
- 在Vue环境中使用请使用this.$message调用

### 使用方式

:::demo

```html

  <template>
    <we-button @click="$message.open('这是提示内容')">默认提示A</we-button>
    <we-button @click="open">默认提示B</we-button>
    <we-button @click="success">成功提示</we-button>
  </template>

  <script>
    export default {
      methods: {
        open() {
          this.$message.open('这是提示内容');
        },
        success() {
          this.$message.success({
            message: '这是提示内容',
            duration: 0,
            showClose: true
          });
          //如果使用优先级匹配可以使用如下方式传参
          this.$message.success('这是提示内容', 0, true);
        }
      }
    }
  </script>
```
:::

### 支持的组件库

目前支持以下组件库：weview、element-ui

### Message Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   | 优先级 |
|---------- |------------------------------------ |---------- |------------- |-------- |-------- |
| message   |	提示内容                             |	string    |	——          |	——       | 1 |
| html      |	是否将message作为HTML片段处理         |	boolean   |	——          |	false    | 3 |
| customClass |	自定义类名                         |	string    |	——          |	——       | 2 |
| duration  |	显示时间，单位：毫秒，设置0不会自动关闭 |	number    |	——          |	3000     | 1 |
| showClose |	是否显示关闭按钮                      |	boolean   |	——          |	false    | 1 |
| center    |	文本是否居中                         |	boolean   |	——          |	false    | 2 |
| onClose   |	关闭时的回调函数                      |	function  |	——          |	——       | 1 |

### Message Methods
| 方法名     | 说明                                     | 参数          | 参数类型   | 返回值        |
|---------- |----------------------------------------- |--------------|----------- |------------- |
| open      | 打开一个默认消息提示                       |	参考Attributes |	——         | 弹层实例 |
| success   | 打开一个成功消息提示                       |	参考Attributes |	——         | 弹层实例 |
| fail      | 打开一个失败消息提示                       |	参考Attributes |	——         | 弹层实例 |
| error     | 打开一个失败消息提示                       |	参考Attributes |	——         | 弹层实例 |
| warn      | 打开一个警告消息提示                       |	参考Attributes |	——         | 弹层实例 |
| info      | 打开一个信息消息提示                       |	参考Attributes |	——         | 弹层实例 |
| close     | 关闭指定消息提示                           |	弹层实例       |	——         | —— |
| closeAll  | 关闭所有消息提示                           |	——             |	——       | —— |
