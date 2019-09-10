<template>
  <div>
    <!-- 审核 -->
    <div class="audit" ref="audit">
      <van-nav-bar title="上传企业审核资料" left-arrow @click-left="onClickLeft"/>
      <div class="content">
        <p style="font-size:10px;color:silver;">填写身份信息</p>
        <div class="imgcontent">
          <div class="imgc">
            <input @change="handlerUploadone($event)" class="shangchuan" type="file">
            <img
              class="imgcimg"
              v-if="tuone"
              src="../assets/images/2e2baa027daa9643d4966125eb2b4b9.jpg"
              alt
            >
            <img class="imgcimg" v-else :src="'http://www.lliangche.com/'+this.urllistone" alt>
            <p>法人身份证正面</p>
          </div>
          <div class="imgd" style="margin-left:1.6rem">
            <input @change="handlerUploadtwo($event)" class="shangchuan" type="file">
            <img
              class="imgdimg"
              v-if="tutwo"
              src="../assets/images/2e2baa027daa9643d4966125eb2b4b9.jpg"
              alt
            >
            <img class="imgdimg" v-else :src="'http://www.lliangche.com/'+this.urllisttwo" alt>
            <p>法人身份证反面</p>
          </div>
          <div class="imge">
            <input @change="handlerUploadthree($event)" class="shangchuan" type="file">
            <img
              class="imgeimg"
              v-if="tuthree"
              src="../assets/images/2e2baa027daa9643d4966125eb2b4b9.jpg"
              alt
            >
            <img class="imgeimg" v-else :src="'http://www.lliangche.com/'+this.urllistthree" alt>
            <p>企业资质图</p>
          </div>
        </div>
        <!-- <van-cell-group>
          <van-field
            v-model="message"
            label="备注"
            type="textarea"
            placeholder="请输入留言"
            rows="1"
            autosize
          />
        </van-cell-group>-->
        <div class="shangchuanbtn" @click="shenhetijiao">提交审核</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import { Toast } from "vant";
import request from "@/utils/request";
export default {
  data() {
    return {
      a1: false,
      a2: false,
      a3: false,
      message: "",
      urllistone: "",
      urllisttwo: "",
      urllistthree: "",
      tuone: true,
      tutwo: true,
      tuthree: true,
      username: "",
      fullheight: document.documentElement.clientHeight
    };
  },
  methods: {
    // 正面
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
          if (res.data.Data.IsSuccess == false) {
            Indicator.close();
            Toast("不支持的图片类型");
            this.a1 = false;
          } else {
            this.a1 = true;
            let name = res.data.Data.Message;

            this.urllistone = res.data.Message;
            this.tuone = false;
            request
              .post(this.$api+"/mobile/SetUserIDCardImg", {
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
    // 反面
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
          if (res.data.Data.IsSuccess == false) {
            Indicator.close();
            this.a2 = false;
            Toast("不支持的图片类型");
          } else {
            this.a2 = true;
            //  console.log(res.data);
            let name = res.data.Data.Message;
            this.urllisttwo = res.data.Message;
            this.tutwo = false;
            request
              .post(this.$api+"/mobile/SetUserIDCardImg2", {
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
    // 企业资质
    handlerUploadthree(event) {
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
          if (res.data.Data.IsSuccess == false) {
            Indicator.close();
            this.a3 = false;
            Toast("不支持的图片类型");
          } else {
            this.a3 = true;
            // console.log(res.data);
            let name = res.data.Data.Message;
            this.urllistthree = res.data.Message;
            this.tuthree = false;
            request
              .post(this.$api+"/mobile/SetUserQualificationImg", {
                PhotoUrl: name
              })
              .then(res => {
                if(res.data.IsSuccess==true){
                Indicator.close();
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
      if (this.a1 == true && this.a2 == true && this.a3 == true) {
        request
          .post(this.$api+"/Wechat/SetUserStatus", {})
          .then(res => {
            this.$router.replace("/look");
          })
          .catch(err => {
            console.log(err);
          });
      }else{
        Toast('信息不完整')
      }
    }
  },
  mounted() {
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
  height: 14rem;
  flex-flow: wrap;
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
  background-size: 100% 100%;
  background-repeat: repeat;
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
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imge {
  position: relative;
  text-align: center;
  display: inline-block;
  width: 40%;
  height: 7rem;
  overflow: hidden;
}
.imgeimg {
  display: block;
  width: 100%;
  height: 5rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgc p {
  font-size: 14px;
}
.imgd p {
  font-size: 14px;
}
.imge p {
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