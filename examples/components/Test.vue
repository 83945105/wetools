<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "test",

    created() {
      this.$Ajax.get({}, [], 1)
    }
  }
</script>

<style lang="less" type="text/less">
</style>
