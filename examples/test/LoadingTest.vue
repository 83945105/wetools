<template>
  <div>
    <div id="dom1" style="width: 300px;height: 300px;border:1px solid #ee43e1;margin-top:15px;">
      使用按钮开启加载特效
    </div>
    <div id="dom2" style="width: 300px;height: 300px;border:1px solid #ee43e1;margin-top:15px;">
      使用按钮开启加载特效
    </div>
    <div style="margin-top: 10px">
      <we-button type="primary" @click="instance1 = $loading.service({target: '#dom1', text: '玩命加载中'})">开启1</we-button>
      <we-button type="primary" @click="instance2 = $loading.service({target: '#dom2', text: '玩命加载中'})">开启2</we-button>
      <we-button type="danger" @click="$loading.close(instance1)">关闭</we-button>
      <we-button type="danger" @click="instance1.close()">自身关闭</we-button>
      <we-button type="warning" @click="$loading.closeAll()">关闭全部</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button @click="open">打开持续3秒的全屏loading</we-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading-test",

    data() {
      return {
        instance1: undefined,
        instance2: undefined
      };
    },

    methods: {
      open() {
        let i = this.$loading.service();
        setTimeout(() => {
          this.$loading.close(i);
        }, 3000)
      }
    }
  }
</script>

<style scoped>

</style>
