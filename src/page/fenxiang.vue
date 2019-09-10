<template>
  <div ref="certi" style="background:#ffffff">
    <!-- 注册 -->
    <van-nav-bar title="查看邀请码" left-arrow @click-left="onClickLeft"/>
    <div style="width:100%;margin-top:2rem;background:#ffffff">
      <div class="biaodan">
        <div class="username" style="border:none">
            <span style="font-size:14px;color:#666666">长按复制分享邀请码发送给对方,邀请码 ：<span style="margin-top:.5rem;display:block;font-size:22px;color:black">{{mobile}}</span></span>
        <span style="font-size:14px;color:#666666">或者在浏览器扫此二维码</span>
        </div>
     </div>
      
     <!-- 这里放二维码 -->
      <div id="qrcode" class="erwei">

      </div>
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'  
import request from '@/utils/request'
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      account:0,
      url:'http://www.lliangche.com/#/register?account=',
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
         this.a===2
      }).catch(err=>{

      })
    },
  // 二维码方法
   qrcode () {  
     var account=window.localStorage.getItem('account')
     console.log(account)
          let qrcode = new QRCode('qrcode', {  
          width:250,  
          height: 250, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
          text: this.url+account, // 二维码内容  
          // text:'我是你爹'
          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
          // background: '#f0f'  
           // foreground: '#ff0'  
      })  
    
          console.log(qrcode._oQRCode.dataList[0].data+this.mobile)  
   }  ,
  

    onClickLeft() {
      this.$router.back(-1);
    },

  },
  created(){


  },
  mounted() {
    this.get();
      this.qrcode() 
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
/* 二维码 */
.erwei{
 
  width: 250px;
  margin: 2rem auto;
  height: 250px;
  background: red;
}
</style>