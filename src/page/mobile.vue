<template>
  <div ref="certi" style="background:#ffffff">
    <!-- 注册 -->
    <van-nav-bar title="修改手机号" left-arrow @click-left="onClickLeft"/>
    <div style="width:100%;margin-top:2rem;background:#ffffff">
      <div class="biaodan">
        <div class="username" style="border:none">
            <span style="font-size:12px;color:#666666">更换手机号后，下次登录请使用新手机号登陆。当前手机号为<span style="margin-left:6px;">{{mobile}}</span></span>
          <!-- <i class="iconfont">&#xe604;</i>
          <input
            v-model="mobile"
            style="margin-left:.5rem;padding-top:.5rem"
           disabled
            placeholder="请输入旧手机号 "
          > -->
        </div>
         <div class="username">
          <i class="iconfont">&#xe604;</i>
          <input
            v-model="newmobile"
            style="margin-left:.5rem;padding-top:.5rem"
            required
            placeholder="请输入新手机号 "
          >
        </div>
        <div class="code">
          <i class="iconfont">&#xe612;</i>
          <input
            v-model="code"
            style="width:6rem;margin-left:.5rem;padding-top:.5rem"
            placeholder="验证码"
            required
          >
          <button :disabled="disabled" @click="sendcode" class="yanzheng">{{btntxt}}</button>
        </div>
        <!-- <div class="password">
          <i class="iconfont">&#xe61d;</i>
          <input
            v-model="password"
            style="margin-left:.5rem;padding-top:.5rem"
            placeholder="设置密码(6-16位)"
            required
          >
        </div> -->

        <div @click="lijizhuce" class="loginto">立即修改</div>
        
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
        newmobile:'',
      fullheight: document.documentElement.clientHeight,
      mobile: "",
      password: "",
      code: "",
      btntxt: "获取验证码",
      disabled: false,
      time: 0
    };
  },
  methods: {
   get(){
      request.post(this.$api+"/Wechat/GetUserInfo",{

      }).then(res=>{
         this.mobile=res.data.Data.UserAccount
      }).catch(err=>{

      })
    },
    // 关于验证码
    sendcode() {
      // console.log(this.mobile)
      var reg = /^[1]([3-9])[0-9]{9}$/;
      if (this.newmobile == "") {
        Toast("手机号不能为空");
      } else if (!reg.test(this.newmobile)) {
        Toast("手机号格式不正确");
      } else {
        axios
          .post(this.$api+"/Wechat/SendMsg", {
            MobileNo: this.newmobile
          })
          .then(res => {
            if (res.data.IsSuccess == false) {
              Toast("短信发送失败");
            }
          })
          .catch(function(err) {
            console.log(err);
          });
        this.time = 60;
        this.disabled = true;
        //验证码的时间设置 可有可无
        this.timer();
        //手机号争取后调取接口
      }
    },
    //验证码的倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },

    onClickLeft() {
      this.$router.back(-1);
    },
    lijizhuce() {
  
axios.post(this.$api+"/Wechat/CheckUserIsExit", {
          Account: this.newmobile
        })
        .then(res => {
         if(res.data.Data.ExitFalg==true){
             Toast('此手机号已经存在')
         }else{
        //    修改手机号码的接口
           request.post(this.$api+"/Wechat/UpdateMobile",{
            OldMobile:this.mobile,
            NewMobile:this.newmobile,
            SmgCode:this.code

           }).then(res=>{
if(res.data.IsSuccess==true){
    Toast.success('修改成功')
    this.$router.push('/set')
}else{
    Toast('修改失败')
}
           }).catch(err=>{

           })

         }
        })
        .catch(err => {});
      
      
    }
  },
  created(){
this.get();
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