<template>
  <div>
    <we-button @click="$confirm('普通的询问框')">普通的询问框</we-button>
    <we-button @click="$confirm({message: '......',clickConfirm(e, close) {close()}})">点击确认按钮关闭</we-button>
  </div>
</template>

<script>
  export default {
    name: "confirm-test"
  }
</script>

<style scoped>

</style>
