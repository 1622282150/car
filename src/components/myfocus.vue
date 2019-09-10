<template>
  <div>
    <van-nav-bar @click-left="onClickLeft" title="我的收藏车" left-arrow fixed/>
    <div style="width:100%;height:2rem;"></div>
     <!-- 主题 -->
         <div v-if="this.onelist==''" style="font-size:14px;color:#666666;text-align:center;margin-top:2rem">
       暂无数据...
       </div>
    <ul v-else class="newcarcontent">
       <li class="newcarlist">
        <div
          v-for="(i,index) in onelist"
          :key="index"
          @click="tomore(i.CarId)"
          class="newcarlist-content"
        >
          <img :src="'http://www.lliangche.com'+i.CarBannerImg" class="newcarlist-left" alt>
          <div class="newcarlist-right">
            <p style="font-size:14px;font-weight:700">
              {{i.CarName}}
            </p>
             <p class="car-piece"  style="font-size:12px;color:#666666">{{i.CarModel}}</p>
             <p style="font-size:14px;color:red">首付：{{i.PurchasePlan[0].FirstPayment}}万 月供：<span>{{i.PurchasePlan[0].MonthPay}}</span>元</p>
            <!-- <p class="car-month"  style="margin-top:0.1rem;font-size:12px">指导价:{{i.GuidePrice}}万<span style="margin-left:.6rem;color:black">↓{{i.GuidePrice-i.InsidePrice }}万</span></p>
          <p style="font-size:16px;">
              <span class="cartag" v-for="(t,index) in i.TagNameList.slice(0,3)" :key="index">{{t}}</span>
            </p> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      id: "",
      value: "",
      onelist: [],

    };
  },
  filters:{
         xiaoshu(value) {
     if(value<10){
       return '0'+ value.toFixed(2)
     }
      return value.toFixed(2);

    },
    carmodel(val){
     if(val.length>10){
       return val.slice(0,10) + '...'
     }else{
       return val
     }},
     diqu(value){
        if(value.length>3){
          return value.slice(0,3)
        }else{
          return value
        }
     }
  },
  methods: {
    getonelist() {
      request
        .post(this.$api+"/Wechat/GetMyConcernList", {
  
          Type:2,
          Page:1,
          Rows:20
        })
        .then(res => {
          console.log(res.data.Data.list);
          this.onelist=res.data.Data.list
          
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.back(-1);
    },
       tomore(id){
      this.$router.push({
        path:`/particulars/${id}`
      })
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getonelist();
  }
};
</script>
<style scoped>
.van-icon-arrow-left:before{
  color:black;
}
.head {
  display: flex;
  width: 100%;
  height: 2rem;
  margin: 0 auto;
  background: #ffffff;
  /* border: 1px solid red; */
}
.head i {
  position: fixed;
  left: 3rem;
  top: 0.55rem;
  font-size: 20px;
}
.left {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height:2rem;
  text-align: center;
}
.inputbox {
  width: 10rem;
  height: 1.2rem;
  margin-top: 0.35rem;
  margin-left: 0.7rem;
  border-radius: 20px;
  border: none;
  background: #f5f5f5;
  padding-left: 1.3rem;
  font-size: 14px;
  color: #666666;
}
/* 主体 */
.newcartop{
  width: 100%;
  height: 1.7rem;
    background-color: #ffffff;
     border-top:1px solid silver;
  border-bottom: 1px solid silver;
}
.newcartopul{
width: 90%;
height: 1.7rem;
margin: 0 auto;
display: flex;

}
.newcartopul li{
  width: 25%;
  text-align: center;
}
.newcartopul li:hover{
    background: #f6f6f6;
}
.newcartopul li span{
  font-size: 12px;
}
.newcarcontent{
 /* margin-bottom: 3rem; */
  background-color: #ffffff;
}
.newcarlist{
  width: 100%;
  /* height: 9rem; */
  
}
.newcarlist-content{
  width: 100%;
  height: 5rem;
  margin: 0rem auto;
  display: flex;
  padding:0.8rem 0rem;
  
   
  border-bottom: 1px solid silver;
}
.newcarlist-left {
  display: inline-block;
  width: 38%;
  height: 3.6rem;
  margin-top: 0.7rem;
  margin-left: 0.6rem;
  background-size: 100% 100%;
}
.newcarlist-right {
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 55%;
  height: 5rem;
  /* background-color: aquamarine; */
}
.newcarlist-right p {
  margin: 0 0 0 0.5rem;
}
.cartag {
 display: inline-block;
  width: 2.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  font-size: 10px;
  border: 1px solid red;
  color: red;
  border-radius: 10px;
  margin-left: 0.1rem;
}
</style>