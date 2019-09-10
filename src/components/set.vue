<template>
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" fixed/>
    <van-cell style="margin-top:2.5rem" title="个人资料" is-link to="/people"/>
    <van-cell title="修改手机号" is-link to='/mobile'/>
    <van-cell title="修改密码" is-link to='/xiugai'/>
    <van-cell style="margin-top:1rem" title="关于我们" is-link to="/aboutour"/>
    <!-- <van-cell title="清除缓存" is-link to/> -->
    <div class="signout" @click="logout">退出账号</div>
  </div>
</template>
<script>
import { Dialog } from 'vant';
import request from '@/utils/request'
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    logout() {
      Dialog.confirm({
        title: "确认退出"
      })
        .then(() => {
          // on confirm
          request.post(this.$api+"/Wechat/LoginOut",{
         
          }).then(res=>{
          window.sessionStorage.removeItem("token");
          this.$router.push("/login");
          }).catch(err=>{

          })
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style scoped>
.van-nav-bar__left ::before {
  color: black;
}
.signout {
  width: 100%;
  height: 2rem;
  font-size: 17px;
  line-height: 2rem;
  text-align: center;
}
</style>