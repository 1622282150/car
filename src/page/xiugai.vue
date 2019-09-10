<template>
  <div ref="certi" style="background:#ffffff">
    <!-- 注册 -->
    <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft"/>
    <div style="width:100%;margin-top:2rem;background:#ffffff">
      <div class="biaodan">
        <div class="username">
          <i class="iconfont">&#xe604;</i>
          <input
            v-model="usedpassword"
            style="margin-left:.5rem;padding-top:.5rem"
            required
            placeholder="请输入旧密码 "
          >
        </div>
        <div class="password">
          <i class="iconfont">&#xe61d;</i>
          <input
            v-model="newpassword"
            style="margin-left:.5rem;padding-top:.5rem"
            placeholder="设置新密码(大于6位)"
            required
          >
        </div>

        <div @click="xiug" class="loginto">立即修改</div>
        <!-- <p style="text-align:center;font-size:14px">
          *注册代表您同意
          <span style=" color: #ff7080;"><用户协议></span>
        </p> -->
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      fullheight: document.documentElement.clientHeight,
      mobile: "",
      usedpassword: "",
      newpassword:'',
      code: "",
      btntxt: "获取验证码",
      disabled: false,
      time: 0
    };
  },
  methods: {
    

    onClickLeft() {
      this.$router.back(-1);
    }, 
    xiug() {
        var usedpassword =this.usedpassword
        var  newpassword =this.newpassword
        if(usedpassword.length<6 || newpassword.length<6 ){
            Toast('密码长度大于6')
        }else if(usedpassword===newpassword){
            Toast('旧密码不能与新密码相同')
        }
        
        else{
          request.post(this.$api+'/Wechat/SetUserPassword',{
         OldPassword:this.usedpassword,
         Password:this.newpassword
       }).then(res=>{
       if(res.data.IsSuccess==false){
           Toast('旧密码错误')
       }else{
          Toast.success('修改成功')
          this.$router.replace('/')
       }


       }).catch(err=>{

       })
        }
      
     
    }
  },
  mounted() {
    this.$refs.certi.style.height = this.fullheight + "px";
  }
};
</script>
<style scoped>
button {
  border: none;
  background: none;
}
.van-nav-bar__left ::before {
  color: black;
}
.van-nav-bar {
  background: #feb836;
}
input {
  margin-top: 0.6rem;
  border: none;
  font-size: 15px;
}
.username {
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #f5f5f5;
}
.username i {
  font-size: 20px;
}

.biaodan {
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  background: #ffffff;
}
.password {
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #f5f5f5;
}
.password i {
  font-size: 20px;
}
.code {
  position: relative;
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #f5f5f5;
}
.code i {
  font-size: 20px;
}
.password i {
  font-size: 20px;
}
.loginto {
  width: 80%;
  height: 2rem;
  border-radius: 20px;
  line-height: 2rem;
  margin: 2rem auto;
  font-size: 16px;
  text-align: center;
  /* font-weight: 500; */
  color: #ffffff;
  background: linear-gradient(to right, #fed62f, #feb238);
}
.yanzheng {
  position: absolute;
  right: 0.6rem;
  top: 1rem;
  font-size: 14px;
  color: #ff7080;
}
</style>