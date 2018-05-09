<script>
  export default {
    methods: {
      get() {},
      getList() {},
      post() {},
      postList() {},
      put() {},
      putList() {},
      delete() {},
      deleteList() {}
    }
  }
</script>
# Get请求

### 使用方式

:::demo

```html

  <template>
    <we-button @click="get">查询唯一一条用户信息</we-button>
    <we-button @click="getList">查询多条用户信息</we-button>
  </template>

  <script>
    export default {
      methods: {
        get() {
          this.$ajax.get('demo/get/userInfo/{id}', [1], {
            params: {name: 2, age: 3}
          }); 
          
          //该方式将向URL: demo/get/userInfo/1 发送一个Get请求,携带参数name=2,age=3
        },
        getList() {
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
    <we-button @click="post">新增一条用户信息</we-button>
    <we-button @click="postList">新增多条用户信息</we-button>
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
        post() {
          this.$ajax.get('demo/post/userInfo', {
            name: this.name,
            age: this.age
          }); 
          
          //该方式将向URL: demo/post/userInfo 发送一个Post请求,携带参数id=1,name=2,age=3
        },
        postList() {
        
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
    <we-button @click="put">更新一条用户信息</we-button>
    <we-button @click="putList">更新多条用户信息</we-button>
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
        put() {
          this.$ajax.put('demo/put/userInfo/{id}', {
            id: 1,
            name: this.name,
            age: this.age
          }); 
          
          //该方式将向URL: demo/put/userInfo/1 发送一个put请求,携带参数id=1,name=2,age=3
        },
        putList() {
        
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
