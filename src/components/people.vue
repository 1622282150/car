<template>
  <div>
    <!-- 蒙曾 -->
    <!-- <div ref="certy" style="position:fixed;top:0;left:0;width:100%;background:#4b4b4b;z-index:2"></div> -->
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" fixed/>
    <div class="upload">
      <i style="font-size:30px;position:absolute;top:1.6rem;left:1.4rem;" class="iconfont">&#xe957;</i>
      <span style="font-size:18px;color:#666666;position:absolute;top:1.8rem;left:4.2rem;">点左侧上传头像</span>
      <span class="up">
        <input class="shangchuan" type="file" @change="handlerUpload($event)">
        <img
          class="upimg"
          :src="'http://www.lliangche.com/Content/Upload/Image/User/'+list.UserPhoto"
          alt
        >

        <!-- <van-uploader  class="shangchuan" :after-read="onRead">
        <img class="head-img" ref="goodsImg">
        </van-uploader>-->
        <span class="username">编辑头像</span>
      </span>
    </div>
    <div style="margin-top:.6rem;position:relative">
      <button
        v-show="chulai"
        :disabled="disabled"
        @click="sendcode"
        style="z-index:111;position: absolute;
     right: 0.6rem;
     top: 2.3rem;
    font-size: 14px;
  color: red;"
      >{{btntxt}}</button>
      <van-cell-group>
        <van-field disabled v-model="mobile" label="手机号"/>
        <van-field v-show="chulai" v-model="code" label="验证码"/>
      </van-cell-group>
    </div>
    <!-- <div class="ti" @click="tijiao">提交信息</div> -->
  </div>
</template>
<script>
import { Indicator } from "mint-ui";
import axios from "axios";
import request from "@/utils/request";
import { Toast } from "vant";
export default {
  data() {
    return {
      fullheight: document.documentElement.clientHeight,
      nicheng: "",
      code: "",
      btntxt: "获取验证码",
      disabled: false,
      time: 0,
      chulai: false,
      username: "",
      mobile: "",
      firstsrc: "",
      urlone: "",
      list: []
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
          .post(this.$api + "/Wechat/SendMsg", {
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
    xianshi() {
      this.chulai = true;
    },
    //  提交信息
    tijiao() {
      request
        .post(this.$api + "/Wechat/UpdateUser", {
          Name: this.username,
          IdCard: "",
          SmgCode: this.code,
          Account: window.localStorage.getItem("account"),
          Tel: "",
          Mobile: this.mobile,
          HomeAddress: ""
        })
        .then(res => {
          Toast("提交成功");
          this.$router.push("/main");
        })
        .catch(err => {});
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    // 获取个人信息
    getlist() {
      request
        .post(this.$api + "/Wechat/GetUserInfo", {})
        .then(res => {
          // console.log(res.data.Data)
          this.list = res.data.Data;
          this.username = res.data.Data.Username;
          this.mobile = res.data.Data.UserAccount;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handlerUpload(event) {
      Indicator.open("加载中...");
      //  定时器
      // setTimeout(() =>{
      //   Indicator.close();

      // }, 3000);
      let file = event.target.files[0];

      let param = new FormData();
      param.append("file", file, file.name);
      // console.log(param.get("file"));
      let config = {
        headers: { "Content-Type": "multipart/form-data;" }
      };
      request
        .post(this.$api + "/Wechat/UploadUserImg", param, config)
        .then(res => {
          if (res.data.Data.IsSuccess == false) {
            Indicator.close();
            Toast("不支持的图片类型");
          } else {
            let name = res.data.Data.Message;
            request
              .post(this.$api + "/mobile/SetUserPhoto", {
                PhotoUrl: name
              })
              .then(res => {
                if (res.data.IsSuccess == true) {
                  this.getlist();
                  //  Indicator.close();
                  //  Toast('设置成功')
                  //  定时器
                  setTimeout(() => {
                    Indicator.close();
                  }, 1500);
                }
              })
              .catch(err => {
                Indicator.close();
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    //  console.log(this.chulai)
    this.nicheng = window.localStorage.getItem("nicheng");
    this.getlist();
  },
  mounted() {
    // this.$refs.certy.style.height = this.fullheight + "px";
    //  Indicator.open('加载中...');
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
.upload {
  position: relative;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  background: #ffffff;
  display: flex;
}
.up {
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  width: 3rem;
  height: 3rem;
  /* text-align: center;
  line-height: 3rem; */
  position: relative;
  border-radius: 50%;
  border: 1px solid silver;
  overflow: hidden;
}
.shangchuan {
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  opacity: 0;
}
.upimg {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  /* text-align: center; */
  /* line-height: 3rem; */
  border-radius: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.username {
  position: absolute;
  right: 7rem;
  top: 1rem;
  display: inline-block;
  font-size: 18px;
}
.ti {
  width: 40%;
  height: 2rem;
  line-height: 2rem;
  font-size: 16px;
  color: white;
  margin: 1rem auto;
  text-align: center;
  background: #feef5e;
  border-radius: 10px;
}
</style>