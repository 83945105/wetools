<template>
  <div>
    <button @click="$message.open('666', 3000)">这是一个消息提示</button>
    <button @click="$message.success('666')">这是一个成功消息提示</button>
    <button @click="$message.fail('666')">这是一个失败消息提示</button>
    <button @click="$message.error('666')">这是一个错误消息提示</button>
    <button @click="$message.warn('666')">这是一个警告消息提示</button>
    <button @click="$message.info('666')">这是一个消息提示</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "test",

    created() {
      // this.$Ajax.get('demo/query', {name: 1});
      // this.$Ajax.post('demo/query', {name: 1, age:2});
      // this.$Ajax.put('demo/put/1', {name: 2, age: 2}, {});
      // this.$Ajax.delete('demo/delete/1', {params: {name: 2, age: 2}});
      this.$dataParser
        .success('111')
        .start();
    }
  }
</script>

<style lang="less" type="text/less">
</style>
