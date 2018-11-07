<template>
  <div>
    <we-button @click="$Confirm('普通的询问框')">普通的询问框</we-button>
    <we-button @click="$Confirm({message: '......',clickConfirm(e, close) {close()}})">点击确认按钮关闭</we-button>
  </div>
</template>

<script>
  export default {
    name: "confirm-test"
  }
</script>

<style scoped>

</style>
