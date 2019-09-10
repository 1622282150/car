<template>
  <div>
    <van-nav-bar title="热门suv" fixed left-arrow @click-left="onClickLeft" />
    <div style="width:100%;height:1.7rem;"></div>
    <div ref="paging"  style="" class="bigimg" >
      <!-- 轮播消息 -->
      <div class="guanggao">
        <swiper auto height="30px" direction="vertical" :interval=3000 class="text-scroll" :show-dots="false">
          <swiper-item><p>1357****258的用户给了好评</p></swiper-item>
          <swiper-item><p>1384****649的用户成功下单</p></swiper-item>
          <swiper-item><p>1350****345的用户给了好评</p></swiper-item>
          <swiper-item><p>1587****458的用户成功下单</p></swiper-item>
          <swiper-item><p>1577****295的用户给了好评</p></swiper-item>
          <swiper-item><p>1397****666的用户成功下单</p></swiper-item>
        </swiper>
      </div>
      <!-- 抬头量辆车 -->
      <div class="taitou">
          <div class="main-block" v-for="(i,index) in listtop" :key="index"  @click="tomore(i.Id)">
            <img class="block-img" :src="'http://www.lliangche.com'+i.BannerImg" alt="">
            <div class="block-right" v-for="(item,index) in i.PurchasePlanList.slice(0,1)" :key="index">
                <p style="font-size:15px;margin:0;font-weight:600;color:rgb(40,40,40)"  v-text="i.Name"></p>
                <p style="font-size:12px;color:rgb(102,102,102);margin:0;" v-text="i.CarModel"></p>
                <p style="font-size:12px;font-weight:600;color:rgb(229,86,86);margin:0;margin-bottom:0;">首付<span>{{item.FirstPayment}}</span>万</p>
                <p style="color:rgb(252,84,84);font-size:11px;margin:0;margin-bottom:0;">月供<span>{{item.MonthPay}}</span>元</p>
                
                <div class="goto">立即开走</div>
            </div>
         </div>
          
      </div>
      <div class="taimain">
         <!-- <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
> -->
          <div style="height:4.5rem;paddign-top:.5rem;" class="main-block" v-for="(i,index) in list" :key="index"  @click="tomore(i.Id)">
            <img class="block-img" :src="'http://47.110.11.114:80'+i.BannerImg" alt="">
            <div class="block-right" v-for="(item,index) in i.PurchasePlanList.slice(0,1)" :key="index">
                <p style="font-size:15px;margin:0;font-weight:600;color:rgb(40,40,40)"  v-text="i.Name"></p>
                <p style="font-size:12px;color:rgb(102,102,102);margin:0;" v-text="i.CarModel"></p>
                <p style="font-size:12px;font-weight:600;color:rgb(229,86,86);margin:0;margin-bottom:0;">首付<span>{{item.FirstPayment}}</span>万</p>
                <p style="color:rgb(252,84,84);font-size:11px;margin:0;margin-bottom:0;">月供<span>{{item.MonthPay}}</span>元</p>
                
                <div class="goto">立即开走</div>
            </div>
         </div>
         <!-- </van-list> -->
      </div>
      <!-- <div class="payment-top">
        <p class="xianliang">
          限量好车
          <span class="qiangshi">强势来袭</span>
        </p>
        <p style="font-size:17px">钜惠风暴</p>
        <p>
          <span style="font-size:30px">0-10%</span>
          <span style="font-size:17px">首付</span>
        </p>
      </div> -->
      <!-- <div class="payment-main" >
         <div class="main-block" v-for="(i,index) in list" :key="index"  @click="tomore(i.Id)">
            <img class="block-img" :src="'http://47.110.11.114:80'+i.BannerImg" alt="">
            <div class="block-right" v-for="(item,index) in i.PurchasePlanList.slice(0,1)" :key="index">
                <p style="font-size:16px;margin:0"  v-text="i.Name"></p>
                <p style="font-size:15px;color:silver;margin-top:0.3rem;margin-bottom:0.3rem" v-text="i.BodyWorkType"></p>
                <p   style="font-size:16px;color:red;margin-top:0;margin-bottom:0.3rem">首付<span>{{item.FirstPayment}}</span>万</p>
                <p style="color:red;font-size:16px;margin:0">月供<span>{{item.MonthPay}}</span>元</p>
                
                <div class="goto">立即开走</div>
            </div>
         </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { Swiper,SwiperItem } from 'vux'
import request from '@/utils/request'
// import func from '../../vue-temp/vue-editor-bridge';
export default {
   components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      page:1,
      loading: false,
      finished: false,
      fullheight: document.documentElement.clientHeight,
      list: [
         
      ],
      listtop:[

      ]
    };
  },


  methods: {
      tomore(id){
       this.$router.push({
        path:`/particulars/${id}`
      })
    },
    onClickLeft() {
      this.$router.push('/');
    },
     onLoad() {
      // 异步更新数据
     
        this.page+=1
   
        this.getlist()
     },
    getlist(){
    request.post(this.$api+'/Wechat/GetTagCarList',{
   TagId:117,
   Page:1,
   Rows:20
    }).then(res=>{
      this.listtop=res.data.Data.list.slice(0,2)
      this.list=res.data.Data.list.slice(2)
    }).catch(err=>{

    })
    },
    handlefun(){
let ofsetTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        // console.log(ofsetTop)
        if(900 <ofsetTop){
      // this.$refs.paging.style.height=100+'rem'
    }
    }
    
  },
  created(){
   
    this.getlist()
  },
  mounted(){
    window.addEventListener("scroll", this.handlefun);
    //  this.$refs.paging.style.height = this.fullheight + "px";
  }
 ,
 destroyed(){
      window.removeEventListener("scroll", this.handlefun);
 }
};
</script>
<style scoped>
.text-scroll p{
  margin:0;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
}
.van-nav-bar__left i::before {
  color: black;
}
.bigimg {
  position: relative;
  width: 100%;
 height:70rem;
  /* height:100%; */
  background: url('../assets/images/changeq.png') ;
  background-size: 100% 100%;
}
.guanggao{
  position: absolute;
  left: 15%;
  top: 15.3rem;
  width: 70%;
  height: 30px;
  /* background: red; */
}
/* 头图高度为li为4rem */
.taitou{
position: absolute;
top: 17.6rem;
left: 10%;
/* background: red; */
width: 80%;
height: 8rem;
}
.taimain{
  position: absolute;
  top:29.8rem;
  left: 10%;
  width: 80%;
  height: 38rem;
  /* background: red; */
  overflow: auto;
}

.main-block{
    position: relative;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
}
.block-img{

    display:block;
    width: 42%;
    height:4rem;
    /* margin-left: 0.4rem; */
    /* margin-top: .7rem; */
}
.block-right{
    margin-left: 0.6rem;
    display: block;
    width: 56%;
    height: 4rem;
     display: flex;
  flex-direction: column;
  justify-content: space-around;
    /* margin-top: .5rem; */
}
.goto{
  position:absolute;
  right: .1rem;
  bottom: .1rem;
    font-size: 10px;
    color: #ffffff;
    text-align: center;
    width: 2.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    /* margin-top: 0.2rem;
    margin-left: 6rem; */
    border-radius: 20px;
      background: linear-gradient(to right,#ffc13c, #ffa81b);

}
</style>