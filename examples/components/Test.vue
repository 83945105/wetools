<template>
  <div>
    <button @click="$message.open('666')">这是一个消息提示</button>
    <button @click="$message.success('666')">这是一个成功消息提示</button>
    <button @click="$message.fail('666')">这是一个失败消息提示</button>
    <button @click="$message.error('666')">这是一个错误消息提示</button>
    <button @click="$message.warn('666')">这是一个警告消息提示</button>
    <button @click="$message.info('666')">这是一个消息提示</button>
    <button @click="get">发送Get请求</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "test",

    methods: {
      get() {
        this.$ajax.get('demo/query', {name: 1}, {duration: 0})
          .success(0, {showClose: true}, data => {
            console.log(data)
          });
      }
    },

    created() {
/*      this.$ajax.get('demo/query', {name: 1}, {timeout: 1})
        .success();*/
      // this.$Ajax.post('demo/query', {name: 1, age:2});
      // this.$Ajax.put('demo/put/1', {name: 2, age: 2}, {});
      // this.$Ajax.delete('demo/delete/1', {params: {name: 2, age: 2}});

/*      this.$dataParser
        .new()
        .success('111', true, data => {
          console.log(data)
        })
        .parse({name: 233});*/

    }
  }
</script>

<style lang="less" type="text/less">
</style>
