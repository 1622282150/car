<template>
  <div>
    <!-- 企业认证 -->
    <div class="certi" ref="certi">
      <van-nav-bar title="企业认证" left-arrow @click-left="onClickLeft"/>
      <!-- 表单 -->
      <div class="form">
        <p style="font-size:10px;color:silver;">填写身份信息</p>
        <div style="margin-top:.7rem" class="username">
          <span style="font-size:16px">姓名:</span>
          <input v-model="username" style="margin-left:.5rem;padding-top:.5rem" required>
        </div>
        <!-- <div class="username">
          <span style="font-size:16px">座机号</span>
          <input v-model="tel" style="margin-left:.5rem;padding-top:.5rem" required>
        </div> -->
        <!-- <div class="username">
          <span style="font-size:16px">验证码</span>
          <input v-model="code" style="margin-left:.5rem;padding-top:.5rem;width:5rem;" required>
          <button :disabled="dis" @click="change" style="margin-left:1.2rem;font-size: 14px;
  color: #ff7080;">{{content}}</button>
        </div>-->
        <!-- <div class="username">
          <span style="font-size:16px">公司名称</span>
          <input
            v-model="companyname"
            style="margin-left:.5rem;padding-top:.5rem;width:9rem;"
            required
          >
        </div>-->
        <div class="username">
          <span style="font-size:16px">公司地址:</span>
          <input
            v-model="companyaddress"
            style="margin-left:.5rem;padding-top:.5rem;width:9rem;"
            required
          >
        </div>
        <!-- <div class="username">
          <span style="font-size:16px">联系电话</span>
          <input
            v-model="lianxiphone"
            style="margin-left:.5rem;padding-top:.5rem;width:9rem;"
            required
          >
        </div>-->
        <div class="username">
          <span style="font-size:16px">
            座机号:
            <!-- <span style="font-size:14px;color:#ff7080">(选填)</span> -->
          </span>
          <input v-model="zuoji" style="margin-left:.5rem;padding-top:.5rem;width:9rem;" required>
        </div>
        <div @click="shenhe" class="shangchuan">下一步</div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request";
import { Toast } from "vant";
// import { request } from "https";
export default {
  data() {
    return {
      zuoji: "",
      dis: false,
      content: "发送验证码",
      totalTime: 60,
      canClick: true,
      fullheight: document.documentElement.clientHeight,
      username: "",
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
      }).catch(err=>{

      })
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    shenhe() {
       var patrn= /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi
       var username=this.username
       var zuoji=this.zuoji
          if(username ==''){
      Toast('姓名不能为空')
      }else if(!patrn.exec(username)||username.length==1||username.length>4){
        Toast('姓名为2-4位中文')
      }else if(patrn.exec(zuoji)){
        Toast('座机号不能为中文')
      }
      else{
       
          request
        .post(this.$api+"/Wechat/UpdateUser", {
         Name: this.username,
          Account:this.account,
          Tel:this.zuoji,
          HomeAddress: this.companyaddress,
        })
        .then(res => {
          this.$router.replace('/audit')
        })
        .catch(err => {
          console.log(err);
        });
      }
//       if(this.username !=''){
//        request.post(this.$api+"/Wechat/UpdateUser", {
//           Name: this.username,
//           IdCard:'',
//           Account: window.localStorage.getItem("account"),
//           Tel: window.localStorage.getItem("account"),
//           Mobile: "",
//           HomeAddress: this.companyaddress,
//           From:this.yinhang
//         })
//         .then(res => {
//           this.$router.replace("/audit");
//         })
//         .catch(err => {
//           conosle.log(err);
//         });
//       }else{
// Toast('姓名不能为空')
//       }
      
    },
    change() {
      Toast.success("发送成功");
      this.dis = true;
      if (!this.canClick) return; //改动的是这两行代码
      this.canClick = false;
      this.content = this.totalTime + "s后重新发送";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.content = this.totalTime + "s后重新发送";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.content = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true; //这里重新开启
          this.dis = false;
        }
      }, 1000);
    }
  },
  mounted() {
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
.shangchuan {
  width: 50%;
  height: 2rem;
  line-height: 2rem;
  border-radius: 20px;
  background: #ffa93b;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  margin: 0.7rem auto;
}
</style>