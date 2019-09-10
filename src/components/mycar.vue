<template>
  <div>
    <!-- <div class="tabbar">
      <span @click="left" style="font-weight:500;font-size:20px;margin-left:1rem"><</span>
      <span style="margin-left:5rem">我的车辆</span>
    </div>-->
    <van-nav-bar style="background:#ffab3b" title="卖出车辆" left-arrow @click-left="onClickLeft" fixed/>
    <div class="bg">
      <van-tabs color="#ffa63d" background="#ffa63d" style="margin-top:2rem">
        <van-tab title="卖出车辆">
          <div class="content">
            <div v-if="list.length==0" style="margin:2rem auto;font-size:16px;text-align:center">
                 暂无数据..
            </div>
            <div v-else class="content-son" v-for="(i,index) in list" :key=index>
              <img :src="i.BannerImg" alt>
              <div class="content-right">
                <p v-text="i.Name"></p>
                <p style="font-size:14px;" v-text="i.CarModel"></p>
                <p style="font-size:12px;color:#666666" v-text="i.OrderId"></p>
              </div>
              <!-- <div style="width:5%;height:7rem;line-height:7rem">></div> -->
            </div>
          </div>
        </van-tab>
        <van-tab title="我的车辆">
         
          <div  class="content">
              <div v-if="listtwo.length==0" style="margin:2rem auto;font-size:16px;text-align:center">
                 暂无数据..
            </div>
            <div v-else class="content-son" v-for="(i,index) in listtwo" :key=index>
              <img :src="i.img" alt>
              <div class="content-right">
                 <p v-text="i.Name"></p>
                <p style="font-size:12px;" v-text="i.CarModel"></p>
                <p style="font-size:12px;color:#666666" v-text="i.OrderId"></p>
              </div>
              <!-- <div style="width:5%;height:7rem;line-height:7rem">></div> -->
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      list: [
       
      ],
      listtwo:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    // 获取我的脉卖出
    maichu(){
 request.post(this.$api+"/Wechat/GetMySellOutList",{
       Type:1,
       Page:1,
       Rows:15
      }).then(res=>{
      this.list=res.data.Data.list
      this.listtwo=res.data.Data.list
      }).catch(err=>{

      })
    },
    //获取我的批发
  pifa(){
 request.post(this.$api+"/Wechat/GetMySellOutList",{
       Type:2,
       Page:1,
       Rows:15
      }).then(res=>{
       
      }).catch(err=>{

      })
  }
  },
  mounted(){
this.maichu()
  }
};
</script>
<style scoped>
.van-hairline--bottom::after{
  border:none;
}
.van-nav-bar__left ::before {
  color: black;
}
/* .tabbar {
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: 16px;
  background: linear-gradient(to right, #ffb936, #ffa63d);
  border-bottom:none;
} */
.van-tabs__wrap .van-hairline--top-bottom {
  border: none;

}
.bg {
  width: 100%;
  height: 8rem;
  background: #ffa63d;
  margin-top: -2px;
  position: relative;
}
.content {
  position: absolute;
  top: 3rem;
  /* background: red; */
  width: 100%;
  /* height: 66rem; */
}
.content-son {
  width: 90%;
  height: 7rem;
  margin: 0.5rem auto;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
}
.content-son img {
  display: inline-block;
  width: 35%;
  height: 3rem;
  margin-left: 0.6rem;
  margin-top: 2rem;
}
.content-son p {
  margin: 0.4rem auto 0 0.6rem;
  font-size: 16px;
}
.content-right {
  width: 50%;
  margin-top: 1.2rem;
}
</style>