<template>
  <div style="margin: 10px 10px 10px 10px">
    <div style="font-size: 20px;margin: 10px 0px 10px 0px;font-weight: bold">请求示例</div>
    <div style="margin-top: 20px">
      <span style="margin-left: 20px">
        id:
        <input v-model="id" placeholder="请输入id" size="small" style="width: 150px;">
      </span>
      <span style="margin-left: 20px">
        name:
        <input v-model="name" placeholder="请输入name" size="small" style="width: 150px;">
      </span>
      <span style="margin-left: 20px">
        age:
        <input v-model="age" placeholder="请输入age" size="small" style="width: 150px;">
      </span>
    </div>
    <div style="margin-top: 10px">
      <we-button type="danger" @click="getTest">查询唯一一条记录</we-button>
      <we-button type="danger" @click="getTestList">查询多条记录</we-button>
    </div>
    <div style="margin-top: 10px">
      <we-button type="danger" @click="postTest">新增一条数据</we-button>
      <we-button type="danger" @click="postTestList">批量新增数据</we-button>
    </div>
    <div style="margin-top: 10px">
      <we-button type="danger" @click="putTest">更新唯一一条记录</we-button>
      <we-button type="danger" @click="putTestList">更新多条记录</we-button>
    </div>
    <div style="margin-top: 10px">
      <we-button type="danger" @click="deleteTest">删除唯一一条记录</we-button>
      <we-button type="danger" @click="deleteTestList">删除多条记录</we-button>
    </div>
    <div style="margin-top: 10px">
      请求持续时间:<input v-model="timeout" placeholder="请输入请求持续时间" size="small" style="width: 150px;">
      等待提示时间:<input v-model="waitPromptTime" placeholder="请输入等待提示时间" size="small" style="width: 150px;">
      <we-button type="danger" @click="getDelay" :loading="loading">请求时间测试</we-button>
    </div>
    <div style="margin-top: 10px">
      <we-button type="danger" @click="postLogin">登录</we-button>
    </div>
    <div style="margin-top: 10px">
      <el-upload
        ref="upload"
        action="123"
        class="upload-demo"
        multiple
        with-credentials
        :limit="1"
        :auto-upload="true"
        :before-upload="beforeUpload"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ajax-test",

    data() {
      return {
        id: '666',
        name: '',
        age: '',
        timeout: 5000,
        waitPromptTime: 3000,
        loading: false
      };
    },

    methods: {
      beforeUpload(file) {
        let fd = new FormData();
        fd.append("file", file);

        this.$Ajax.post('zxsz-backend/zxsz-backend/basicSetting/zxCommentbank/post/commentbankUpload', fd, {
          headers: {
            'token': '2713e483-98cb-4a39-801b-bf129cf9c403'
          }
        });
        return false;
      },
      getTest() {
        if (this.id.trim() == '') {
          this.$Message.fail(`请在文本框输入id`);
          return;
        }
        //实际访问的url:demo/get/test/xx
        this.$Ajax.get('demo/get/test/{id}', [this.id])
          .success({
            duration: 0,
            showClose: true,
            onClose: () => {
              this.$Message.info(`详情请参考后端代码`, true, 0);
            }
          });
      },
      getTestList() {
        //实际访问的url:demo/get/testList?name:xx&age=xx
        this.$Ajax.get('demo/get/testList', {name: this.name, age: this.age})
          .finally((data, res) => {
            alert(`无论如何都会触发的操作`);
          });
      },
      postTest() {
        this.$Ajax.post('demo/post/test', {id: this.id, name: this.name, age: this.age});
      },
      postTestList() {
        let params = [
          {
            id: this.id,
            name: this.name,
            age: this.age
          },
          {
            id: this.id,
            name: this.name,
            age: this.age
          }
        ];
        this.$Ajax.post('demo/post/testList', {json: JSON.stringify(params)});
      },
      putTest() {
        if (this.id.trim() == '') {
          this.$Message.fail(`请在文本框输入id`);
          return;
        }
        this.$Ajax.put('demo/put/test/{id}', {id: this.id, name: this.name, age: this.age});
      },
      putTestList() {
        let params = [
          {
            id: this.id,
            name: this.name,
            age: this.age
          },
          {
            id: this.id,
            name: this.name,
            age: this.age
          }
        ];
        this.$Ajax.put('demo/put/testList', {json: JSON.stringify(params)});
      },
      deleteTest() {
        if (this.id.trim() == '') {
          this.$Message.fail(`请在文本框输入id`);
          return;
        }
        this.$Ajax.delete('demo/delete/test/{id}', {id: this.id});
      },
      deleteTestList() {
        this.$Ajax.delete('demo/delete/testList', {ids: [1, 2, 3].toString()});
      },
      getDelay() {
        this.loading = true;
        this.$Ajax.get('demo/get/delay/{timeout}', [this.timeout], {
          waitPromptTime: this.waitPromptTime,
          timeout: 60000
        })
          .finally((data, res) => {
            this.loading = false;
            console.log(res)
          });
      },
      postLogin() {
        this.$Ajax.post('post/login', {username: 'developer2', password: '1024'})
          .success('登录成功', () => {
          });
      }
    },

    created() {
      this.$Ajax
        .mock(require('./AjaxTest.json'))
        .get('dms/sysConfType/get/list/confType2')
        .before(data => {
        })
        .success(data => {
        })
        .catch(err => {
          console.log(err)
        })
        .finally(data => {
        });
    }
  }
</script>

<style scoped>

</style>
