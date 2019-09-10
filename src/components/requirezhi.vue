<template>
  <div>
    <div class="bgcolor">
      <span @click="left" style="margin-left:.6rem;"><</span>
      <p style="margin-left:.6rem;color:white">未支付账单</p>
      <div class="main">
        <p style="font-size:14px;color:silver;padding-top:.2rem;margin-left:.3rem">
          <i class="iconfont">&#xe61b;</i>
          <span>账单详情</span>
        </p>
        <div class="main-top">
          <div class="son">
            <span class="sonone">申请编号</span>
            <span class="sontwo">{{list.OrderId}}</span>
          </div>
          <div class="son">
            <span class="sonone">车名</span>
            <span class="sontwo">{{list.Name}}</span>
          </div>
          <div class="son">
            <span class="sonone">品牌</span>
            <span class="sontwo">{{list.CarModel}}</span>
          </div>
          <div class="son">
            <span class="sonone">购置税</span>
            <span class="sontwo">{{list.PurchasePlan.PurchaseTax}}</span>
          </div>
          <div class="son">
            <span class="sonone">月供</span>
            <span class="sontwo">{{list.PurchasePlan.MonthPay}}</span>
          </div>
          <div class="son">
            <span class="sonone">期数</span>
            <span class="sontwo">{{list.PurchasePlan.Month}}</span>
          </div>
        </div>

        <!-- mubu -->
        <div class="mubu">
          <div class="son-son">
            <span class="sonone" style="color:silver">购车顾问</span>
            <span class="sontwo">小李</span>
          </div>
          <div class="son-son">
            <span class="sonone" style="color:silver">联系方式</span>
            <span class="sontwo">13121313</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dibu">
         <span style="margin-left:16px" class="heji">定金￥</span>
         <span class="shuzi">{{list.SalePrice }}</span>
         <span class="tozhifu" @click="tozhifu">去支付</span>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'

export default {
  data() {
    return {
      id:0,
      carid:0,
      userid:0,
      list:[],
      sum:0
    };
  },
 
  methods: {
    // 支付

    tozhifu() {
     this.$router.replace({
         path:'/geiqiantwo',
         query:{
             id:this.id,
             carid:this.carid,
             userid:this.userid
         }
     })
    },
      left(){
          this.$router.back(-1)
      },
      // 获取账单详细信息
      getlist(){
        request.post(this.$api+"/Wechat/SaleOrderDetail",{
          id:this.id
        }).then(res=>{
          console.log(res.data.Data.info)
          this.list=res.data.Data.info
          this.userid=res.data.Data.info.UserId
          this.carid=res.data.Data.info.CarId
        }).catch(err=>{
          console.log(err)
        })
      }

  },
  mounted(){
      this.id=this.$route.query.id
  this.getlist()
  }
};
</script>
<style scoped>
.bgcolor {
  width: 100%;
  height: 9rem;
  background: url("../assets/images/4feef2afc434f98cf0bd0d08c045334.jpg");
  background-size: 100% 100%;
  /* position: relative; */
}
.main {
  width: 90%;
  height: 18rem;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #ffffff;
}
.main-top {
  width: 90%;
  margin: 0.6rem auto;
}
.son {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background-color: #ffffff;
  display: flex;
}
.son-son {
  position: relative;
  top: 6px;
  width: 90%;
  margin: 0rem auto;
  height: 2rem;
  line-height: 2rem;
  background-color: #ffffff;
  display: flex;
}
.sonone {
  font-size: 18px;
  font-weight: 400;
  display: inline-block;
  width: 30%;
  height: 2rem;
}
.sontwo {
  display: inline-block;
  width: 70%;
  height: 2rem;
  text-align: right;
  font-size: 15px;
  overflow: hidden;
}
.mubu {
  width: 100%;
  height: 5.5rem;
  background: url("../assets/images/5073856f1dcb541580256b9c0ae9a84.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.dibu {
  width: 100%;
  height: 3rem;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  padding-top: 1.2rem;
  font-size: 16px;
}
.tozhifu{
    display: inline-block;
    width: 6rem;
    height: 1.3rem;
    line-height: 1.3rem;
    border-radius: 20px;
    background: #feef5e;
    text-align: center;
    color: #ffffff;
    /* margin-left: 2rem; */
}
.shuzi{
  display: inline-block;
  width: 5rem;
}
</style>