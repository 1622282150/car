<template>
  <div>
    <!-- zhifu认证 -->
    <div class="certi" ref="certi">
      <van-nav-bar title="支付认证" left-arrow @click-left="onClickLeft"/>
      <!-- 表单 -->
      <div class="form">
        <p style="font-size:10px;color:silver;">身份信息</p>
     
       
        <div class="username">
          <span style="font-size:16px">支付宝号</span>
          <input
            v-model="zhifubao"
            style="margin-left:.5rem;padding-top:.5rem;width:9rem;"
            required
          >
        </div>
           <div class="username">
          <span style="font-size:16px">微信号</span>
          <input
            v-model="weixin"
            style="margin-left:.5rem;padding-top:.5rem;width:9rem;"
            required
          >
        </div>
        <div class="username">
          <span style="font-size:16px">银行卡号</span>
          <input
            v-model="yinhang"
            style="margin-left:.5rem;padding-top:.5rem;width:9rem;"
            required
          >
        </div>
        <!-- <div class="username">
          <span style="font-size:16px">对公账号<span style="font-size:14px;color:#ff7080">(选填)</span></span>
          <input v-model="account" style="margin-left:.5rem;padding-top:.5rem;width:9rem;" required>
        </div> -->
        <div  @click="shenhe" class="shangchuan">
            {{message}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
import { Toast } from "vant";
export default {
  data() {
    return {
      name:'',
      message:'提交',
      weixin:'',
      zhifubao:'',
     yinhang:'',
      dis: false,
      content: "发送验证码",
      totalTime: 60,
      canClick: true,
      fullheight: document.documentElement.clientHeight,
      username: "",
      shenfen:'',
      phone: "",
      code: "",
      companyname: "",
      companyaddress: "",
      lianxiphone: "",
      account: ""
    };
  },
  methods: {
    get(){
     request.post(this.$api+"/Wechat/GetUserInfo",{
      
     }).then(res=>{
       this.account=res.data.Data.UserAccount
        this.name=res.data.Data.Username
        this.zhifubao=res.data.Data. Nation
        this.weixin=res.data.Data.Party
        this.yinhang=res.data.Data.From
     }).catch(err=>{

     })
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    shenhe(){
      
      
    if(this.yinhang.length!=16){
      Toast('银行卡号必须是16位')
    }else{
      request.post(this.$api+"/Wechat/UpdateUser",{
       Name:this.name,
       Account:this.account,
       Nation:this.zhifubao,
       From:this.yinhang,
       Party:this.weixin

      }).then(res=>{
         Toast('提交成功')
         this.$router.push('/main')
      }).catch(err=>{
         console.log(err)
      })
    }
    },
    
  },
  mounted() {
 this.get()
    if(this.zhifubao !='' || this.weixin !='' ||this.yinhang != '' ){
      this.message='修改'
    }
    this.$refs.certi.style.height = this.fullheight + "px";
  }
};
</script>
<style scoped>
button {
  border: none;
  background: none;
}
.certi {
  width: 100%;
  background: #ffffff;
}
.van-nav-bar__left ::before {
  color: black;
}
/* 表单 */
.form {
  width: 90%;
  margin: 0 auto;
}
.username {
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #f5f5f5;
}
input {
  margin-top: 0.6rem;
  border: none;
  font-size: 15px;
}
.shangchuan{
    width: 50%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 20px;
    background: #ffa93b;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    margin: .7rem auto;

}
</style>