<template>
  <div>
    <div class="bgcolor">
      <span @click="left" style="margin-left:.6rem;"><</span>
      <p style="margin-left:.6rem;color:white">请支付以下费用</p>
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
            <span class="sontwo">{{planlist.PurchaseTax}}元</span>
          </div>
          <div class="son">
            <span class="sonone">月供</span>
            <span class="sontwo">{{planlist.MonthPay}}元</span>
          </div>
          <div class="son">
            <span class="sonone">期数</span>
            <span class="sontwo">{{planlist.Month}}月</span>
          </div>
        </div>

        <!-- mubu -->
        <div class="mubu">
          <div class="son-son">
            <span class="sonone" style="color:silver">购车顾问</span>
            <span class="sontwo">汽车产业园</span>
          </div>
          <div class="son-son">
            <span class="sonone" style="color:silver">联系方式</span>
            <span class="sontwo">0571-87612992</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dibu">
         <span style="margin-left:16px" class="heji">定金￥</span>
         <span class="shuzi">{{list.Deposit }}</span>
         <span class="tozhifu" @click="tozhifu">去支付</span>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'

export default {
  data() {
    return {
      userid:0,
      carid:0,
      planid:0,
      list:[],
      planlist:{},
      sum:0
    };
  },
  // filters:{
  
  //  model:function(value){
    
  //     value= value.substring(0,5)
  //     return  value
    
  //  }
  // },
  methods: {
    // 支付
 // 点击确认按钮，传递id生成订单
    tozhifu() {
      // this.$router.replace({
        
      //   path:'/geiqian',
      //   query:{
      //     carid:this.carid,
      //     userid:this.userid,
      //     planid:this.planid,
      //   }
      //   })
       request
        .post(this.$api+"/Wechat/AddSaleOrder", {
          // Id: this.id,
          CarId: this.carid,
          UserId: this.userid,
          PurchasePlanId: this.planid,
          // SaleCount: 1,
          Type: 1,
          // Status: 1
        })
        .then(res => {
        // 生成预约
        request.post(this.$api+"/Wechat/AddMyConcern",{
          CarId: this.carid,
          CarUserId: this.userid,
        
          Type:3
        }).then(res=>{
          //跳扫码
           var xiang=res.data.Data
           this.$router.replace({
             path:'/saoma',
             query:{
               xiang:xiang
             }
           })

        }).catch(err=>{
       
        })



    
        })
        .catch(err => {
          console.log(err);
        });
        
    },
      left(){
          this.$router.back(-1)
      },
      // 获取预生成详细信息
      getlist(){
        request.post(this.$api+"/Wechat/GetSaleOrderPreview",{
          PurchasePlanId:this.planid,
          CarUserId:this.userid,
          CarId:this.carid
        }).then(res=>{
          console.log(res.data.Data.info.PurchasePlanList)
          this.list=res.data.Data.info
          var arr=res.data.Data.info.PurchasePlanList
          arr.forEach(element => {
            if(element.Id==this.planid){
              this.planlist=element
            }
          });
          console.log(this.planlist)
        }).catch(err=>{
          console.log(err)
        })
      }

  },
  mounted(){
  this.userid=this.$route.query.userid;
  this.carid=this.$route.query.carid;
  this.planid=this.$route.query.planid;
  console.log('woshi'+this.userid+this.carid+this.planid)
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