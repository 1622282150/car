<template>
  <div ref="certi" style="background:#ffffff">
    <!-- 注册 -->
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft"/>
    <div style="width:100%;margin-top:2rem;background:#ffffff">
      <div class="biaodan">
        <div class="username">
          <i class="iconfont">&#xe604;</i>
          <input
            v-model="mobile"
            style="margin-left:.5rem;padding-top:.5rem"
            required
            placeholder="请输入手机号 "
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
        <div class="password">
          <i class="iconfont">&#xe61d;</i>
          <input
            v-model="password"
            style="margin-left:.5rem;padding-top:.5rem"
            placeholder="设置密码(6-16位)"
            required
          >
        </div>
         <div class="yaoqing">
           <span class="yaoqingma">填写一级分销商账户手机号，填写后可成为二级</span>
          <i class="iconfont">&#xe612;</i>
          <input
           
            v-model="yaoqing"
            style="margin-left:.5rem;padding-top:.5rem"
            placeholder="邀请码（选填）"
            :disabled="this.kaiqi"
          >
        </div>
        <div @click="lijizhuce" class="loginto">立即注册</div>
        <!-- <p style="text-align:center;font-size:14px">
          *注册代表您同意
          
          <span style=" color: #ff7080;"><用户协议></span>
        </p> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      kaiqi:false,
      fullheight: document.documentElement.clientHeight,
      mobile: "",
      password: "",
      code: "",
      btntxt: "获取验证码",
      disabled: false,
      time: 0,
      yaoqing:''
    };
  },
  methods: {
    // 关于验证码
    sendcode() {
      // console.log(this.mobile)
      var reg = /^[1]([3-9])[0-9]{9}$/;
      if (this.mobile == "") {
        Toast("手机号不能为空");
      } else if (!reg.test(this.mobile)) {
        Toast("手机号格式不正确");
      } else {
        axios
          .post(this.$api+"/Wechat/SendMsg", {
            MobileNo: this.mobile
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
      if(this.password.length<6 ||this.password.length>16 ){
        Toast('密码6-16位')
      }else{
axios
        .post(this.$api+"/Wechat/CheckUserIsExit", {
          Account: this.mobile
        })
        .then(res => {
          if (res.data.Data.ExitFalg == false) {
            var data = {
              Account: this.mobile,
              Password: this.password,
              Name: this.mobile,
              GroupId: "",
              Mobile: this.mobile,
              SmgCode: this.code,
              InvitationCode:this.yaoqing

            };
            //  if(data.Name==''){
            //    data.Name=this.mobile
            //  }
            axios
              .post(this.$api+"/Wechat/Register", {
                ...data
              })
              .then(res => {
                if (res.data.IsSuccess == true) {
                  this.$router.push("/login");
                } else {
                  Toast(res.data.Message);
                }
              })
              .catch(err => {}); 
          } else {
            Toast("用户名存在");
          }
        })
        .catch(err => {});
      }
      

      // axios
      //   .post(this.$api+"/Wechat/Register", {
      //     ...data
      //   })
      //   .then(res => {
      //     if (res.data.IsSuccess == true) {
      //       this.$router.push("/login");
      //     } else {
      //       Toast("输入信息有误或者为空");
      //     }
      //   })
      //   .catch(err => {});
    },
    
    getaccount(){
     var canshu=window.location.hash
     var a=canshu.slice(19)
     if(a !=0){
        if(a.indexOf('&') !=-1){
         var b=a.indexOf('&') 
        var c= a.substring(0,b)
        this.yaoqing=c
        this.kaiqi=true
        }else{
        console.log('有参数'+a)
        this.yaoqing=a
        this.kaiqi=true
        }
       
     }else{
       console.log('没有参数')
     }
    }
  },
  mounted() {
    this.$refs.certi.style.height = this.fullheight + "px";
   this.getaccount()
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
.yaoqing{
  position: relative;
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #f5f5f5;
}
.yaoqing i{
  font-size: 20px;
}
.yaoqingma{
  color: silver;
  position: absolute;
  top: 2.6rem;
  font-size:12px;
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