<template>
  <div>
    <div>
      <we-button plain type="primary" @click="$Message.open('普通消息哈哈哈哈哈哈哈哈哈哈哈哈')">普通消息</we-button>
      <we-button plain type="primary" @click="$Message.success('成功消息哈哈哈哈哈哈哈哈哈哈哈哈')">成功消息</we-button>
      <we-button plain type="primary" @click="$Message.fail('失败消息哈哈哈哈哈哈哈哈哈哈哈哈')">失败消息</we-button>
      <we-button plain type="primary" @click="$Message.error('错误消息哈哈哈哈哈哈哈哈哈哈哈哈')">错误消息</we-button>
      <we-button plain type="primary" @click="$Message.info('提示消息哈哈哈哈哈哈哈哈哈哈哈哈')">提示消息</we-button>
      <we-button plain type="primary" @click="$Message.warn('警告消息哈哈哈哈哈哈哈哈哈哈哈哈')">警告消息</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button plain type="primary" @click="$Message.success({
        message: '<div style=\'color: red\'>红色自定义内容</div>',
        html: true
      })">自定义内容
      </we-button>
      <we-button plain type="primary" @click="$Message.open({
        message: '鼠标指针悬浮在我上面时,不会自动关闭',
        showClose: true,
        onClose:() => {
          $Message.open('关闭')
        }
      })">手动关闭
      </we-button>
      <we-button plain type="primary" @click="$Message.success({
        message: '我是一条不会自动关闭的消息',
        duration: 0,
        showClose: true
      })">不会自动关闭
      </we-button>
      <we-button type="primary" @click="$Message.success('我是一条不会自动关闭的消息', 0, true)">不会自动关闭</we-button>
      <we-button type="danger" @click="method01">不会自动关闭</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button plain type="primary" @click="instance = $Message.open('我会设置一个实例')">我会设置一个实例</we-button>
      <we-button plain type="primary" @click="$Message.close(instance)">关闭实例弹层</we-button>
      <we-button plain type="primary" @click="$Message.closeAll()">关闭所有</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button @click="$Message('函数调用')">函数调用</we-button>
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
    },
    methods: {
      method01() {
        this.$Message.success('我是一条不会自动关闭的消息', 0, true);
      }
    }
  }
</script>

<style scoped>

</style>
