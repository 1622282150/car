<template>
  <div>
    <!-- 审核 -->
    <div class="audit" ref="audit">
      <van-nav-bar title="上传审核资料" left-arrow @click-left="onClickLeft"/>
      <div class="content">
        <p style="font-size:10px;color:silver;">填写身份信息</p>
        <div style="margin-top:.7rem" class="username">
          <span style="font-size:16px">银行卡号:</span>
          <input v-model="yinhangkahao" style="margin-left:.5rem;padding-top:.5rem" required>
        </div>
        <div style="margin-top:.7rem" class="username">
          <span style="font-size:16px">开户支行:</span>
          <input v-model="kaihuyinhang" style="margin-left:.5rem;padding-top:.5rem" required>
        </div>
        <!-- <div style="margin-top:.7rem" class="username">
          <span style="font-size:16px">预留手机号</span>
          <input v-model="mobile" style="margin-left:.5rem;padding-top:.5rem" required>
        </div> -->
        <div class="imgcontent">
          <div class="imgc">
            <input @change="handlerUploadone($event)" class="shangchuan" type="file">
            <img class="imgcimg" v-if="tuone" src="../../assets/images/2e2baa027daa9643d4966125eb2b4b9.jpg" alt>
            <img class="imgcimg" v-else :src="'http://www.lliangche.com'+this.urllist" alt>
            <p>法人身份证正面</p>
          </div>
          <div class="imgd" style="margin-left:1.6rem;">
            <input @change="handlerUploadtwo($event)" class="shangchuan" type="file">
            <img class="imgdimg" v-if="tutwo" src="../../assets/images/2e2baa027daa9643d4966125eb2b4b9.jpg" alt>
            <img class="imgdimg" v-else :src="'http://www.lliangche.com'+this.urllisttwo" alt>
            <p>法人身份证反面</p>
          </div>
        </div>
        <!-- <van-cell-group>
          <van-field label="备注"/>
        </van-cell-group> -->
        <div class="shangchuanbtn" @click="shenhetijiao">提交审核</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import {Toast} from 'vant'
import request from "@/utils/request";
export default {
  data() {
    return {
      account:'',
      name:'',
      a1:false,
      a2:false,
      urllist: "",
      urllisttwo: "",
      tuone: true,
      tutwo: true,
      mobile:'',
      yinhangkahao: "",
      kaihuyinhang:'',
      fullheight: document.documentElement.clientHeight
    };
  },
  methods: {
     get(){
      request.post(this.$api+"/Wechat/GetUserInfo",{

      }).then(res=>{
        this.name=res.data.Data.Username
         this.account=res.data.Data.UserAccount
      }).catch(err=>{

      })
    },
    handlerUploadone(event) {
       Indicator.open('加载中...');
      let file = event.target.files[0];

      let param = new FormData();
      param.append("file", file, file.name);
      console.log(param.get("file"));
      let config = {
        headers: { "Content-Type": "multipart/form-data;" }
      };
      request
        .post(this.$api+"/Wechat/UploadUserImg", param, config)
        .then(res => {
         
         if(res.data.Data.IsSuccess==false){
           this.a1=false
           Indicator.close();
           Toast('不支持的图片类型')
         }else{
          this.a1=true
          let name = res.data.Data.Message;
          this.urllist = res.data.Message;
          this.tuone=false
          request
            .post(this.$api+"/Wechat/SetUserIDCardImg", {
              PhotoUrl: name
            })
            .then(res => {
              if(res.data.IsSuccess==true){
                  setTimeout(() =>{
        Indicator.close();
        
      }, 1500);
              //  Toast('设置成功')
              }
            })
            .catch(err => {
              console.log(err);
            });
         }
         
        })
        .catch(err => {
          console.log(err);
        });
    },
    handlerUploadtwo(event) {
      Indicator.open('加载中...');
      let file = event.target.files[0];

      let param = new FormData();
      param.append("file", file, file.name);
      console.log(param.get("file"));
      let config = {
        headers: { "Content-Type": "multipart/form-data;" }
      };
      request
        .post(this.$api+"/Wechat/UploadUserImg", param, config)
        .then(res => {
             
          if(res.data.Data.IsSuccess==false){
            this.a2=false
             Indicator.close();
            Toast('不支持的图片类型')
            
          }else{
            this.a2=true
let name = res.data.Data.Message;
          this.urllisttwo = res.data.Message;
          this.tutwo=false
          request
            .post(this.$api+"/Wechat/SetUserIDCardImg2", {
              PhotoUrl: name
            })
            .then(res => {
              if(res.data.IsSuccess==true){
               setTimeout(() =>{
        Indicator.close();
        
      }, 1500);
              //  Toast('设置成功')
              }
            })
            .catch(err => {
              console.log(err);
            });
          }
          
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    shenhetijiao() {
if(this.a1==false || this.a2 ==false){
  Toast('信息不完善')
}else{
var patrn= /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi
if(!patrn.exec(this.kaihuyinhang)){
     Toast('开户支行是中文')
 }else if(patrn.exec(this.yinhangkahao)){
   Toast('银行卡号不能是中文')
 }
//  else if(patrn.exec(this.mobile)){
//    Toast('手机号不是中文')
//  }else if(this.mobile.length !==11){
//    Toast('手机号为11位')
//  }
 else if(this.yinhangkahao.length !==16){
   Toast('银行卡号16位')
 }else{
 request.post(this.$api+"/Wechat/UpdateUser",{
       Name:this.name,
      //  IdCard:this.shenfen,
       Account:this.account,
      //  Tel:'',
       
      //  Mobile:window.localStorage.getItem('account'),
       Form:this.yinhangkahao,
       FormSubBranch:this.kaihuyinhang
     }).then(res=>{
       if(res.data.IsSuccess==true){
         Toast('提交成功')
          request
        .post(this.$api+"/Wechat/SetUserStatus", {})
        .then(res => {
          this.$router.replace('/look')
        })
        .catch(err => {
          console.log(err);
        });
       }else{
         Toast('提交失败')
       }
     }).catch(err=>{})
 }
}

    
  // request
  //       .post(this.$api+"/Wechat/SetUserStatus", {})
  //       .then(res => {
  //         this.$router.replace('/look')
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
    }
  },
  mounted() {
    this.get()
    this.$refs.audit.style.height = this.fullheight + "px";
  }
};
</script>
<style scoped>
.username {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #f5f5f5;
}
input {
  border: none;
  font-size: 15px;
}
.van-nav-bar__left ::before {
  color: black;
}
.audit {
  width: 100%;
  background: #ffffff;
}
.content {
  width: 90%;
  margin: 0 auto;
}
.imgcontent {
  display: flex;
  width: 100%;
}
.imgc {
  position: relative;
  text-align: center;
  display: inline-block;
  width: 40%;
  height: 7rem;
  overflow: hidden;
}
.imgcimg {
  display: block;
  width: 100%;
  height: 5rem;
  background-size:100% 100%;
  background-repeat:repeat; 
}
.imgd {
  position: relative;
  text-align: center;
  display: inline-block;
  width: 40%;
  height: 7rem;
  overflow: hidden;
}
.imgdimg {
  display: block;
  width: 100%;
  height: 5rem;
   background-size:100% 100%;
  background-repeat: no-repeat; 
}
.imgc p {
  font-size: 14px;
}
.imgd p {
  font-size: 14px;
}

.shangchuanbtn {
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
.shangchuan {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5rem;
  opacity: 0;
}
</style>