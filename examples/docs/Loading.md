<script>
  export default {
    data() {
      return {
        instance: undefined
      };
    }
  }
</script>
# Loading 加载特效

- 支持简化传参功能
- 在Vue环境中请使用this.$Loading调用

### 使用示例

:::demo

```html

  <div id="loadingArea" style="width: 300px;height: 300px;border:1px solid #ee3934;margin-top:15px;">
    加载区域
  </div>
  
  <we-button @click="instance = $Loading.service({target: '#loadingArea'})">开启</we-button>
  <we-button @click="$Loading.close(instance)">关闭</we-button>
  <we-button @click="$Loading.closeAll()">关闭全部</we-button>
    
  <script>
    export default {
      
      data() {
        return {
          instance: undefined
        };
      }
    }
  </script>
```
:::

### 全屏加载

- 全屏Loading是单例的,如果在一个全屏Loading关闭前再次调用全屏Loading,则不会创建新的Loading实例,会返回已经存在的全屏Loading实例

:::demo

```html

  <we-button @click="instance = $Loading.service({fullscreen: true})">开启</we-button>
  <we-button @click="$Loading.close(instance)">关闭</we-button>
  <we-button @click="$Loading.closeAll()">关闭全部</we-button>
    
  <script>
    export default {
      
      data() {
        return {
          instance: undefined
        };
      }
    }
  </script>
```
:::

### 支持的组件库

目前支持以下组件库：weview、element-ui

### Loading Methods
| 方法名     | 说明            | 参数                      | 参数类型   | 返回值        |
|---------- |---------------- |---------------------------|---------- |------------- |
| service   | 创建一个加载特效 |	参考Loading Attributes    |	——        | Loading实例 |
| close     | 关闭一个加载特效 |	Loading实例或Loading实例id |	——        | —— |
| closeAll  | 关闭全部加载特效 |	——                        |	——        | —— |

### Loading Attributes
| 参数       | 说明                                 | 类型      | 可选值       | 默认值   | 优先级 |
|----------- |------------------------------------ |---------- |------------- |-------- |-------- |
| target     |	Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点 |	object/string    |	——          |	document.body       | 1 |
| text       |	加载提示文本                         |	string    |	——          |	加载中    | 2 |
| background |	遮罩背景色                           |	string    |	——          |	——       | 3 |
| fullscreen |	是否全屏                             |	boolean    |	——          |	false     | 1 |
