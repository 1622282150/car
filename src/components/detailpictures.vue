<template>
  <div ref="paging" style="width:100%;background:#ffffff;">
    <i
      @click="$router.go(-1)"
      style="position:fixed;top:.5rem;left:.5rem;"
      class="iconfont"
    >&#xe60b;</i>
    <div class="top">
      <span class="titlename">{{name}}</span>
    </div>
    <!-- 选项卡 -->
    <van-tabs v-model="active" title-active-color="black" color="#feef5e">
      <van-tab title="外观" >

       <div class="main" >
       
             <img v-for="(i,index) in listone" :key="index" class="main-img" :src="'http://www.lliangche.com'+i.ImgUrl" alt>
     
        </div>
         
     
        <div class="btn" @click="datuyi">点击查看大图</div>
      </van-tab>
      <van-tab title="中控">
        <div class="main" >
       
             <img v-for="(i,index) in listtwo" :key="index" class="main-img" :src="'http://www.lliangche.com'+i.ImgUrl" alt>
     
        </div>
        <div class="btn" @click="datuer">点击查看大图</div>
      </van-tab>
      <van-tab title="座椅">
        <div class="main" >
       
             <img v-for="(i,index) in listthree" :key="index" class="main-img" :src="'http://www.lliangche.com'+i.ImgUrl" alt>
     
        </div>
        <div class="btn" @click="datusan">点击查看大图</div>
      </van-tab>
      <van-tab title="细节">
       <div class="main" >
       
             <img v-for="(i,index) in listfour" :key="index" class="main-img" :src="'http://www.lliangche.com'+i.ImgUrl" alt>
     
        </div>
         <div class="btn" @click="datusi">点击查看大图</div>
      </van-tab>
     
    </van-tabs>
  </div>
</template>
<script>
import request from "@/utils/request";
import { Tab, Tabs } from "vant";
export default {
  data() {
    return {
      active: 0,
      fullheight: document.documentElement.clientHeight,
      carid: 0,
      name: "",
      listone: [],
      listtwo: [],
      listthree: [],
      listfour: []
    };
  },
  methods: {
    // 查看大图、
    datuyi() {
      this.$router.push({
        path:'/datu',
        query:{
          carid:this.carid,
          name:this.name,
          active:0

        }
      })
    },
        datuer() {
      this.$router.push({
        path:'/datu',
        query:{
          carid:this.carid,
          name:this.name,
          active:1
        }
      })
    },
        datusan() {
      this.$router.push({
        path:'/datu',
        query:{
          carid:this.carid,
          name:this.name,
active:2
        }
      })
    },
        datusi() {
      this.$router.push({
        path:'/datu',
        query:{
          carid:this.carid,
          name:this.name,
           active:3

        }
      })
    },
    // 获取图片接口
    pictureone() {
      request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId: this.carid,
          Page: 1,
          Rows: 9,
          Type: "关注"
        })
        .then(res => {
          this.listone = res.data.Data.list;
        })
        .catch(err => {});
    },
    picturetwo() {
      request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId: this.carid,
          Page: 1,
          Rows: 9,
          Type: "中控"
        })
        .then(res => {
          this.listtwo = res.data.Data.list;
        })
        .catch(err => {});
    },
    picturethree() {
      request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId: this.carid,
          Page: 1,
          Rows: 9,
          Type: "座椅"
        })
        .then(res => {
          this.listthree = res.data.Data.list;
        })
        .catch(err => {});
    },
    picturefour() {
      request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId: this.carid,
          Page: 1,
          Rows: 9,
          Type: "细节"
        })
        .then(res => {
          this.listfour = res.data.Data.list;
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.$refs.paging.style.height = this.fullheight + "px";
    this.carid = this.$route.query.carid;
    this.name = this.$route.query.name;
    this.pictureone(),
      this.picturetwo(),
      this.picturethree(),
      this.picturefour();
  }
};
</script>
<style scoped>
.btn {
  width: 40%;
  height: 2rem;
  line-height: 2rem;
  color: white;
  text-align: center;
  margin: 2rem auto;
  border-radius: 20px;
  font-size: 14px;
  background: #ffaa00;
  opacity: 0.8;
}
.top {
  width: 100%;
  height: 1.7rem;
  line-height: 1.7rem;
  background: #ffffff;
  text-align: center;
}
.titlename {
  font-size: 16px;
  font-weight: 600;
}
.mainson{
  width: 100%;
  display: flex;
  flex-flow: wrap;
}
.main-img{
  width: 30%;
  height: 3rem;
  background: 100% 100%;
  margin-top: .6rem;
  margin-left: .4rem;
  border-radius: 10px;
}
</style>