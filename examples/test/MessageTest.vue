<template>
  <div>
    <div>
      <we-button plain type="primary" @click="$message.open('普通消息哈哈哈哈哈哈哈哈哈哈哈哈')">普通消息</we-button>
      <we-button plain type="primary" @click="$message.success('成功消息哈哈哈哈哈哈哈哈哈哈哈哈')">成功消息</we-button>
      <we-button plain type="primary" @click="$message.fail('失败消息哈哈哈哈哈哈哈哈哈哈哈哈')">失败消息</we-button>
      <we-button plain type="primary" @click="$message.error('错误消息哈哈哈哈哈哈哈哈哈哈哈哈')">错误消息</we-button>
      <we-button plain type="primary" @click="$message.info('提示消息哈哈哈哈哈哈哈哈哈哈哈哈')">提示消息</we-button>
      <we-button plain type="primary" @click="$message.warn('警告消息哈哈哈哈哈哈哈哈哈哈哈哈')">警告消息</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button plain type="primary" @click="$message.success({
        message: '<div style=\'color: red\'>红色自定义内容</div>',
        html: true
      })">自定义内容
      </we-button>
      <we-button plain type="primary" @click="$message.open({
        message: '鼠标指针悬浮在我上面时,不会自动关闭',
        showClose: true,
        onClose:() => {
          $message.open('关闭')
        }
      })">手动关闭
      </we-button>
      <we-button plain type="primary" @click="$message.success({
        message: '我是一条不会自动关闭的消息',
        duration: 0,
        showClose: true
      })">不会自动关闭
      </we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button plain type="primary" @click="instance = $message.open('我会设置一个实例')">我会设置一个实例</we-button>
      <we-button plain type="primary" @click="$message.close(instance)">关闭实例弹层</we-button>
      <we-button plain type="primary" @click="$message.closeAll()">关闭所有</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button @click="$message('函数调用')">函数调用</we-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message-test",
    data() {
      return {
        instance: null
      };
    }
  }
</script>

<style scoped>

</style>
