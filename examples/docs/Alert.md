<script>
  export default {
    methods: {
      open() {},
      success() {}
    }
  }
</script>
# Alert 消息提示

- 支持简化传参功能
- 在Vue环境中请使用this.$Alert调用

### 使用方式

:::demo

```html

  <template>
      <we-button @click="$Alert('普通的警告框')">普通的警告框</we-button>
      <we-button @click="$Alert('<div style=\'color: red;font-size: 30px\'>自定义样式</div>')">自定义样式</we-button>
      <we-button @click="$Alert({message:'自定义标题',title:'我是一个标题'})">自定义标题</we-button>
      <we-button @click="$Alert({message:'喵喵喵', iconName: 'lock-o',confirmButtonText: '???'})">自定义图标和按钮文本</we-button>
      <we-button @click="$Alert({message: '........', showHeader: false})">木有头部</we-button>
      <we-button @click="$Alert({message: '........', showHeader: false, showClose: false})">木有头部和关闭按钮</we-button>
      <we-button @click="$Alert.open('默认')">默认</we-button>
      <we-button @click="$Alert.success('成功')">成功</we-button>
      <we-button @click="$Alert.fail({message: '失败'})">失败</we-button>
      <we-button @click="$Alert.error({message: '错误'})">错误</we-button>
      <we-button @click="$Alert.warn({message: '警告'})">警告</we-button>
      <we-button @click="$Alert.info({message: '提示'})">提示</we-button>
  </template>

```
:::

### 支持的组件库

目前支持以下组件库：weview

### Alert Methods
| 方法名     | 说明                                     | 参数          | 参数类型   | 返回值        |
|---------- |----------------------------------------- |--------------|----------- |------------- |
| open      | 打开一个默认警告                       |	参考Alert Attributes |	——         | 弹层实例 |
| success   | 打开一个成功警告                       |	参考Alert Attributes |	——         | 弹层实例 |
| fail      | 打开一个失败警告                       |	参考Alert Attributes |	——         | 弹层实例 |
| error     | 打开一个失败警告                       |	参考Alert Attributes |	——         | 弹层实例 |
| warn      | 打开一个警告警告                       |	参考Alert Attributes |	——         | 弹层实例 |
| info      | 打开一个信息警告                       |	参考Alert Attributes |	——         | 弹层实例 |
| close     | 关闭指定警告                           |	弹层实例       |	——         | —— |
| closeAll  | 关闭所有警告                           |	——             |	——       | —— |

### Alert Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   | 优先级 |
|---------- |------------------------------------ |---------- |------------- |-------- |-------- |
| message   |	提示内容                             |	string    |	——          |	——       | 1 |
| title     |	标题                                 |	string    |	——          |	不同调用方式默认值不同    | 2 |
| iconName  |	图标名称                             |	string    |	——          |	不同调用方式默认值不同       | 3 |
| showClose |	是否显示关闭按钮                      |	boolean   |	——          |	true     | 1 |
| confirmButtonText |	确认按钮文本                 |	string    |	——          |	确定     | 4 |
| onClose   |	关闭时的回调函数                     |	function  |	——          |	——       | 1 |
| showHeader|	是否显示头部                         |	boolean   |	——          |	true     | 2 |
