<template>
  <div id="Index">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style lang="less" type="text/less">
  table.table {
    display: block;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    border-collapse: collapse;
    overflow: auto;
    margin-bottom: 50px;
    th {
      border-top: 1px solid #f3f7fa;
      background-color: #FAFBFC;
      border-bottom: 1px solid #f3f7fa;
      padding: 10px 8px;
    }
    td {
      border-top: 1px solid #f3f7fa;
      border-bottom: 1px solid #f3f7fa;
      padding: 10px 8px;
    }
  }
</style>
