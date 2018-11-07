<template>
  <div>
    <div>
      <we-button @click="$Alert('普通的警告框')">普通的警告框</we-button>
      <we-button @click="$Alert('<div style=\'color: red;font-size: 30px\'>自定义样式</div>')">自定义样式</we-button>
      <we-button @click="$Alert({message:'自定义标题',title:'我是一个标题'})">自定义标题</we-button>
      <we-button @click="$Alert({message:'喵喵喵', iconName: 'lock-o',confirmButtonText: '???'})">自定义图标和按钮文本</we-button>
      <we-button @click="$Alert({message: '........', showHeader: false})">木有头部</we-button>
      <we-button @click="$Alert({message: '........', showHeader: false, showClose: false})">木有头部和关闭按钮</we-button>
    </div>
    <div style="margin-top: 10px">
      <we-button @click="$Alert.open('默认')">默认</we-button>
      <we-button @click="$Alert.success('成功')">成功</we-button>
      <we-button @click="$Alert.fail({message: '失败'})">失败</we-button>
      <we-button @click="$Alert.error({message: '错误'})">错误</we-button>
      <we-button @click="$Alert.warn({message: '警告'})">警告</we-button>
      <we-button @click="$Alert.info({message: '提示'})">提示</we-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "alert-test",

  }
</script>

<style scoped>

</style>
