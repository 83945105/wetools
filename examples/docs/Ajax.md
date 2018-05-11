<script>
  export default {
    methods: {
      getUserInfo() {},
      getUserInfoList() {},
      postUserInfo() {},
      postUserInfoList() {},
      putUserInfo() {},
      putUserInfoList() {},
      deleteUserInfo() {},
      deleteUserInfoList() {}
    }
  }
</script>

# Ajax 异步请求

- 在Vue环境中请使用this.$ajax调用

# Get请求

### 使用方式

:::demo

```html

  <template>
    <we-button @click="getUserInfo">查询唯一一条用户信息</we-button>
    <we-button @click="getUserInfoList">查询多条用户信息</we-button>
  </template>

  <script>
    export default {
      methods: {
        getUserInfo() {
          this.$ajax.get('demo/get/userInfo/{id}', [1], {
            params: {name: 2, age: 3}
          }); 
          
          //该方式将向URL: demo/get/userInfo/1 发送一个Get请求,携带参数name=2,age=3
        },
        getUserInfoList() {
          this.$ajax.get('demo/get/userInfo', {name: 2, age: 3});
          
          //该方式将向URL: demo/get/userInfo?name=2&age=1 发送一个Get请求
        }
      }
    }
  </script>
```
:::

# Post请求

### 使用方式

:::demo

```html

  <template>
    <we-button @click="postUserInfo">新增一条用户信息</we-button>
    <we-button @click="postUserInfoList">新增多条用户信息</we-button>
  </template>

  <script>
    export default {
      data() {
        return {
          name: '',
          age: ''
        };
      },
      methods: {
        postUserInfo() {
          this.$ajax.get('demo/post/userInfo', {
            name: this.name,
            age: this.age
          }); 
          
          //该方式将向URL: demo/post/userInfo 发送一个Post请求,携带参数id=1,name=2,age=3
        },
        postUserInfoList() {
        
          let params = [{
            name: this.name,
            age: this.age
          }, {
            name: this.name,
            age: this.age
          }];
          
          this.$ajax.get('demo/post/userInfo', {json: JSON.stringify(params)});
          
          //该方式将向URL: demo/post/userInfo 发送一个Post请求,携带一条json数据
        }
      }
    }
  </script>
```
:::

# Put请求

### 使用方式

:::demo

```html

  <template>
    <we-button @click="putUserInfo">更新一条用户信息</we-button>
    <we-button @click="putUserInfoList">更新多条用户信息</we-button>
  </template>

  <script>
    export default {
      data() {
        return {
          name: '',
          age: ''
        };
      },
      methods: {
        putUserInfo() {
          this.$ajax.put('demo/put/userInfo/{id}', {
            id: 1,
            name: this.name,
            age: this.age
          }); 
          
          //该方式将向URL: demo/put/userInfo/1 发送一个put请求,携带参数id=1,name=2,age=3
        },
        putUserInfoList() {
        
          let params = [{
            id: 1,
            name: this.name,
            age: this.age
          }, {
            id: 2,
            name: this.name,
            age: this.age
          }];
          
          this.$ajax.put('demo/put/userInfo', {json: JSON.stringify(params)});
          
          //该方式将向URL: demo/put/userInfo 发送一个put请求,携带一条json数据
        }
      }
    }
  </script>
```
:::

# Delete请求

### 使用方式

:::demo

```html

  <template>
    <we-button @click="deleteUserInfo">删除一条用户信息</we-button>
    <we-button @click="deleteUserInfoList">删除多条用户信息</we-button>
  </template>

  <script>
    export default {
      methods: {
        deleteUserInfo() {
          this.$ajax.delete('demo/delete/userInfo/{id}', {id: 1}); 
          
          //该方式将向URL: demo/delete/userInfo/1 发送一个delete请求
        },
        deleteUserInfoList() {
        
          let ids = [1,2,3];
          
          this.$ajax.delete('demo/delete/userInfo', {ids: ids.toString());
          
          //该方式将向URL: demo/delete/userInfo 发送一个delete请求,携带一组id参数
        }
      }
    }
  </script>
```
:::

### 支持的插件

目前支持以下插件：axios

### Ajax Methods
| 方法名     | 说明                | 参数           | 参数类型  | 返回值               |
|---------- |---------------------|----------------|--------- |-------------------- |
| get       | 发送一个Get请求      |	参考Ajax Methods Attributes |	string,array/object,object | 解析器DataParser实例 |
| post      | 发送一个Post请求     |	参考Ajax Methods Attributes |	string,object,object       | 解析器DataParser实例 |
| put       | 发送一个Put请求      |	参考Ajax Methods Attributes |	string,object,object       | 解析器DataParser实例 |
| delete    | 发送一个Delete请求   |	参考Ajax Methods Attributes |	string,object,object       | 解析器DataParser实例 |

### Ajax Methods Attributes
| 参数       | 说明                         | 类型      | 可选值       | 默认值   |
|---------- |---------------------------- |---------- |------------- |-------- |
| 第一个参数 |	url:请求地址,可以使用{?}占位  |	string    |	——          |	——       |
| 第二个参数 |	params:请求参数,如果为get请求可以使用数组传参替换掉url中的占位符,其余请求可以用对象传参根据占位符中的属性名替换占位符 |	array(仅get)/object   |	——          |	——    |
| 第三个参数 |	options:参考Ajax options     |	object    |	——          |	——       |

### Ajax options
| 参数      | 说明                       | 类型    | 可选值 | 默认值   |
|---------- |-------------------------- |-------- |------ |-------- |
| baseURL   |	请求前缀路径               |	string  |	——    |	——      |
| params    |	额外携带参数               |	object  |	——    |	——      |
| headers   |	自定义请求头信息            |	object  |	——    |	——      |
| timeout   |	请求持续时间               |	number  |	——    |	60000   |
| showWaitPrompt |	是否开启等待提示      |	boolean |	——    |	true    |
| waitPromptTime |	等待提示时间         |	number  |	——    |	10000   |
| waitPromptText |	等待提示内容         |	string  |	——    |您的网速貌似不太给力... |
| responseType   |	响应类型             |	string  |	——    |	json    |
| messageOptions |	参考Message插件      |	object  |	——    |	——      |
| dataParserOptions |	参考DataParser插件 |	object  |	——    |	——      |

# DataParser 数据解析器

### 数据解析器用于解析Ajax返回的数据,提供不同状态下的操作

### 目前提供俩种数据解析器:Default(默认)、DataView

# 结果处理

### 使用方式，以Get方法举例

:::demo

```html

  <script>
    export default {
      methods: {
        get() {
          this.$ajax.get('demo/delete/userInfo/{id}', {id: 1})
            .success((data, res) => {})//当获取数据成功时触发
            .finally((data, res) => {});//无论如何都会触发 
          
            //data 为服务端返回数据 res为响应信息
        },
      }
    }
  </script>
```
:::

### DataParser Methods
| 方法名     | 说明                     | 参数           | 参数类型  | 返回值               |
|---------- |--------------------------|----------------|--------- |-------------------- |
| success   | 请求成功获取返回结果时触发 |	参考DataParser Methods Attributes |	function | 当前解析器实例 |
| finally   | 无论如何都会触发          |	参考DataParser Methods Attributes |	function | 当前解析器实例 |

### DataParser Methods Attributes
| 参数     | 说明                         | 类型      | 接收参数        | 接收参数说明 |
|--------- |---------------------------- |---------- |--------------- |-------- |
| 第一个参数 |	回调函数,用于获取响应信息     |	function | data, response |	服务端返回数据, 响应信息 |

# 自定义数据解析器：

### 使用自带DataView数据解析器处理服务端返回结果(需服务端支持)

### 该功能需要服务端返回指定数据结构的数据

### 目前只提供Java相应工具包

### [github地址](https://github.com/83945105/holygrail)

### [Maven库地址1](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.github.83945105%22%20AND%20a%3A%22holygrail%22)
### [Maven库地址2](http://mvnrepository.com/artifact/com.github.83945105/holygrail)
### 坐标
```html
<dependency>
    <groupId>com.github.83945105</groupId>
    <artifactId>holygrail</artifactId>
</dependency>
```

### 服务端示例（以Spring MVC 举例）: 

:::demo

```html

    //所有接口统一返回DataView接口
    //DataViewUtil提供了相关工具方法用于返回数据

    @RequestMapping("/get/test/{id}")
    @ResponseBody
    public DataView getTest(@PathVariable String id) throws Exception {

        //TODO 写你的业务调用

        return DataViewUtil.getMessageViewSuccess("成功获取id：" + id + " 的数据");
    }

```

:::

### 请求示例，以Get方法举例

- 支持简化传参功能

:::demo

```html

  <script>
    export default {
      methods: {
        get() {
          this.$ajax.get('demo/get/test/{id}', {id: 1})
            .success(true, (data, res) => {})//当获取数据状态为成功时触发
            .fail('覆盖掉后台消息提示', (data, res) => {})//当获取数据状态为失败时触发
            .error({showClose: true}, (data, res) => {})//当获取数据状态为错误时触发
            .warn((data, res) => {})//当获取数据状态为警告时触发
            .info((data, res) => {})//当获取数据状态为提示时触发
            .needLogin((data, res) => {})//当获取数据状态为需要登录时触发
            .noAuthority((data, res) => {})//当获取数据状态为无权限时触发
            .notFound((data, res) => {})//当获取数据状态为404时触发
            .notSuccess((data, res) => {})//当获取数据成状态为非成功时触发
            .finally((data, res) => {});//无论如何都会触发 
          
            //data 为服务端返回数据 res为响应信息
        },
      }
    }
  </script>
```
:::

### DataView Methods
| 方法名      | 说明                            | 参数           | 参数类型  | 返回值               |
|------------ |------------------------------- |----------------|--------- |-------------------- |
| success     | 服务端返回数据状态为成功时触发    |	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| fail        | 服务端返回数据状态为失败时触发    |	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| error       | 服务端返回数据状态为错误时触发    |	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| warn        | 服务端返回数据状态为警告时触发    |	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| info        | 服务端返回数据状态为提示时触发    |	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| needLogin   | 服务端返回数据状态为需要登录时触发 |	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| noAuthority | 服务端返回数据状态为无权限时触发  |	  参考DataView Methods Attributes |	—— | 当前解析器实例 |
| notFound    | 服务端返回数据状态为404时触发     |	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| notSuccess  | 服务端返回数据状态为非成功时触发  |  	参考DataView Methods Attributes |	—— | 当前解析器实例 |
| finally     | 无论如何都会触发                 |	参考DataView Methods Attributes |	—— | 当前解析器实例 |

### DataView Methods Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   | 优先级 | 接收参数 | 接收参数说明 |
|---------- |------------------------------------ |---------- |------------- |-------- |-------- |--------------- |-------- |
| close     |	是否关闭消息提示                      |	boolean   |	除了notSuccess、finally默认false,其余默认true |	—— | 1 | —— | —— |
| callback  |	回调函数                             |	function  |	——          |	——       | 1 | data, response |	服务端返回数据, 响应信息 |
| message   |	提示内容                             |	string    |	——          |	——       | 1 | —— | —— |
| html      |	是否将message作为HTML片段处理         |	boolean   |	——          |	false    | 4 | —— | —— |
| customClass |	自定义类名                         |	string    |	——          |	——       | 2 | —— | —— |
| duration  |	显示时间，单位：毫秒，设置0不会自动关闭 |	number    |	——          |	3000     | 1 | —— | —— |
| showClose |	是否显示关闭按钮                      |	boolean   |	——          |	false    | 2 | —— | —— |
| center    |	文本是否居中                         |	boolean   |	——          |	false    | 3 | —— | —— |
| onClose   |	关闭时的回调函数                      |	function  |	——          |	——       | 2 | —— | —— |
