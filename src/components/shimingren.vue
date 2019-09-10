<template>
  <div>
    <!-- 实名认证 -->
    <div class="certi" ref="certi">
      <van-nav-bar title="实名认证" left-arrow @click-left="onClickLeft"/>
      <!-- 表单 -->
      <div class="form">
        <p style="font-size:10px;color:silver;">填写身份信息</p>
        <div style="margin-top:.7rem" class="username">
          <span style="font-size:16px">姓名</span>
          <input v-model="username" style="margin-left:.5rem;padding-top:.5rem" required>
        </div>
       
        <!-- <div class="username">
          <span style="font-size:16px">公司地址</span>
          <input
            v-model="companyaddress"
            style="margin-left:.5rem;padding-top:.5rem;width:9rem;"
            required
          >
        </div> -->
        <div class="username">
          <span style="font-size:16px">身份证号</span>
          <input
            v-model="shenfen"
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
      message:'提交',
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
    // 获取用户身份
    get(){
         request.post(this.$api+'/Wechat/GetUserInfo',{
      
         }).then(res=>{
           this.username=res.data.Data.Username
           this.shenfen=res.data.Data.IdCard
           this.account=res.data.Data.UserAccount
           if(this.username !=''||this.shenfen !=''){
             this.message='修改'
           }
         }).catch(err=>{

         })
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    shenhe(){
    var patrn= /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi
   var username=this.username
   var shenfen=this.shenfen
   if(username==''||shenfen==""){
     Toast('姓名和身份证号不能为空')
   }else if(!patrn.exec(username)||username.length==1||username.length>4){
     Toast('姓名为中文或者长度为2-4')
   }else if(shenfen.length != 18){
     Toast('身份证号是18位')
   }else if(patrn.exec(shenfen)){
     Toast('身份证号不能是中文')
   }else{
    //  window.localStorage.setItem('xingming',this.username)
    //  window.localStorage.setItem('shenfenzheng',this.shenfen)
 request.post(this.$api+"/Wechat/UpdateUser",{
       Name:this.username,
       IdCard:this.shenfen,
       Account:this.account,
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
    // this.username=window.localStorage.getItem('xingming')
    // this.shenfen=window.localStorage.getItem('shenfenzheng')
    this.get()
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