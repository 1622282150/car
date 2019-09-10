<template>
  <div ref="certi" class="juxing">
    <div class="fanhui" @click="fan">
      <div class="fanhuileft"><i class="iconfont">&#xe60b;</i></div>
      返回
    </div>
    <div class="bg"></div>
  
    <div v-if="shou">
      <div class="biaodan">
        <div class="username">
          <i class="iconfont">&#xe613;</i>
          <input
            style="margin-left:.5rem;padding-top:.5rem"
            v-model="username"
            type="username"
            required
            placeholder="请输入手机号"
          >
        </div>
        <div class="password">
          <i v-if="lock" class="iconfont">&#xe614;</i>
          <i v-else class="iconfont">&#xe616;</i>
          <input
            style="margin-left:.5rem;padding-top:.5rem"
            :type="pwdtype"
            placeholder="请输入密码"
            required
            v-model="password"
          >
          <!-- <i @click="change" style="color:black;margin-left:1.7rem;" class="iconfont">&#xe66e;</i> -->
        </div>
 <div style="width:100;height:2rem;text-align:right">
      <div @click="gaibian" v-if="showdeng" style="color:#ffa61a;font-size:14px;width:85%;height:2rem;line-height:2rem;margin:0 auto;">使用短信验证码登录</div>
       
  </div>
        <div class="loginto" @click="login">登录</div>
        <p class="loginbottom">
          <span style="margin-right:.5rem;" @click="wangji">忘记密码？</span>
          <span>|</span>
          <span style="margin-left:.5rem" @click="register">立即注册 ></span>
        </p>
        <!-- <div class="other">其他方式登录</div> -->
      </div>
    </div>
   <!-- 账号密码登录 -->
   <div v-else>
      <div class="biaodan">
        <div class="username">
          <i class="iconfont">&#xe613;</i>
          <input
            style="margin-left:.5rem;padding-top:.5rem"
            v-model="mobile"
            type="username"
            required
            placeholder="请输入手机号"
          >
        </div>
        <div class="code" style="position:relative;">
          <i class="iconfont">&#xe612;</i>
          <input
            v-model="code"
            style="width:6rem;margin-left:.5rem;padding-top:.5rem"
            placeholder="验证码"
            required
          >
          <button :disabled="disabled" @click="sendcode" class="yanzheng">{{btntxt}}</button>
        </div>
        <div style="width:100;height:2rem;text-align:right"> <div @click="gaibian"  style="color:#ffa61a;font-size:14px;width:85%;height:2rem;line-height:2rem;margin:0 auto;">使用账号密码登录</div></div>
       
        <div class="loginto" @click="logintwo">登录</div>
        <p class="loginbottom" style="color:white">
          <span style="margin-right:.5rem;" @click="wangji">忘记密码？</span>
          <span>|</span>
          <span style="margin-left:.5rem" @click="register">立即注册 ></span>
        </p>
        
      </div>

   </div>

  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
       btntxt: "获取验证码",
			disabled: false,
      time: 0,
      shou:true,
      dengfang:'手机号验证码',
      fullheight: document.documentElement.clientHeight,
      pwdtype: "password",
      lock: true,
      username: "",
      password: "",
      showdeng:true,
      mobile:'',
      code:''
    };
  },
  methods: {
    wangji(){
      // console.log('1111')
  this.$router.push('/wangji')
    },
    fan(){
       this.$router.back(-1)
    },
    // 短信验证码方法
    sendcode() {
      var myreg=/^[1]([3-9])[0-9]{9}$/;
     if(!myreg.test(this.mobile)){
       Toast('手机号格式不正确')
     }else{
       axios.post(this.$api+"/Wechat/CheckUserIsExit",{
  Account:this.mobile
}).then(res=>{
if(res.data.Data.ExitFalg==false){
  Toast('该用户未注册，请先注册')
}else{
 	var reg =/^[1]([3-9])[0-9]{9}$/
		if (this.mobile=='') {
			Toast("手机号不能为空");
    } 
    else if (!reg.test(this.mobile)) {
			Toast("手机号格式不正确");
    } 
    else {
      axios.post(this.$api+"/Wechat/SendMsg",{
        MobileNo:this.mobile,
       
      }).then(res => {
			  if(res.data.IsSuccess==false){
          Toast('短信发送失败，请检查手机号')
        }
        else{
           Toast('短信已发送')
        }
				}).catch(function(err) {
					console.log(err);
				});
			this.time = 60;
			this.disabled = true;
			//验证码的时间设置 可有可无
			this.timer();
			//手机号争取后调取接口
		
		}
}
}).catch(err=>{

})

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
    gaibian(){
      this.showdeng=!this.showdeng;
      this.shou=!this.shou
    },
    change() {
      this.pwdtype = this.pwdtype === "password" ? "text" : "password";
      this.lock = !this.lock;
    },
    register() {
      this.$router.push({path:"/register",query:{account:0}});
    },
    login(event) {
      if (this.username != "" && this.password !== "") {
        axios
          .post(this.$api+"/WeChat/Login", {
            // poramis:{ ...postData}
            Account: this.username,
            Password: this.password,
            Mac: this.username,
            CId: ""
          })
          .then(res => {
            
            if (res.data.Message == "帐号或密码不对") {
              Toast("账户名或密码不对");
            } else if (res.data.Message == "用户不存在") {
              Toast("用户不存在");
            } else if(res.data.IsSuccess==true) {
              
              Toast.success("登陆成功");
              sessionStorage.setItem("token", res.data.Data.xxx);
              this.$router.push('/')
            }else{
              Toast('登录失败')
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        Toast("账号或密码不能为空");
        event.preventDefault();
      }
    },
    logintwo(){
  // Indicator.open();


   axios.post(this.$api+"/Wechat/SMSLogin",{
    Code:this.code,
    Account:this.mobile,
    Mac: this.mobile,
            CId: ""
   }).then(res=>{
            //  Toast.success("登陆成功");
            //  sessionStorage.setItem("token", res.data.Data.xxx);
            //   this.$router.push('/')
            if(res.data.IsSuccess==true){
                 Toast.success("登陆成功");
             sessionStorage.setItem("token", res.data.Data.xxx);
              this.$router.push('/')
            }else{
              Toast('登录失败')
            }
   }).catch(err=>{

   })
    }
  },
  mounted() {
    this.$refs.certi.style.height = this.fullheight + "px";
  }
};
</script>
<style scoped>
input {
  border: none;
  font-size: 15px;
  background: none;
  color:white;
}
.username {
  
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #f5f5f5;
}
.username i {
  font-size: 20px;
  color: red;
}
.bg {
  width: 100%;
  height: 9rem;
  /* background: url("../assets/images/03cb76c81ea103b0ef9a9545e5cd958.png ")
    no-repeat;
  background-size: 100% 100%; */
}
.biaodan {
  
  width: 80%;
  /* height: 17rem; */
  margin: 1.5rem auto;
 
}
.password {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #f5f5f5;
}
.password i {
  font-size: 20px;
  color: red;
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
.loginbottom {
  text-align: center;
  font-size: 16px;
  color: white;
}
.other {
  color: #666666;
  margin-top: 1.3rem;
  text-align: center;
  font-size: 14px;
}
.other::before {
  content: "_____";
  position: relative;
  top: -0.3rem;
  left: -0.3rem;
}
.other::after {
  content: "_____";
  position: relative;
  top: -0.3rem;
  left: 0.3rem;
}
.code {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #f5f5f5;
}
.code i {
  font-size: 20px;
  color: red;
}
.yanzheng {
  cursor: pointer;
  position: absolute;
  top:0.5rem;
  right: .2rem;
  font-size: 14px;
  color: #ff7080;
  border:none;
  background: none;
}
.fanhui{
  width: 20%;
  height: 1.3rem;
  line-height: 1.3rem;
  position: fixed;
  left: 1rem;
  top: .8rem;
  font-size: 16px;
  color:white;
  
  
}
.fanhuileft{
  position: fixed;
  top:0.8rem;
  left:.3rem;


}
.juxing{
  width: 100%;
  background: url('../assets/images/juxing1.png');
  background-size: 100% 100%;
}
</style>