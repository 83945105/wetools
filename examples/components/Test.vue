<template>
  <div>
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
      this.$Ajax.delete('demo/delete/1', {params: {name: 2, age: 2}});
    }
  }
</script>

<style lang="less" type="text/less">
</style>
