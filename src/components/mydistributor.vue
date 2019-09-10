<template>
  <div>
    <div class="maintop">
      <!-- <div class="lingdang">
        <i class="iconfont" style="font-size:18px">&#xe600;</i>
      </div> -->
      <div style="width:100%;height2rem;display:flex">
        <!-- <div class="headphoto"></div> -->
        <img class="headphoto" :src="'http://www.lliangche.com/Content/Upload/Image/User/'+touxiang" alt="">
        <div style="margin-left:.8rem;">
          <p class="username">{{GroupName}}</p>
         <p  class="uaddress">{{HomeAddress}}</p>
        </div>
        
      </div>

      <p style="margin-bottom:0;margin-top:.5rem;font-size:16px;margin-left:1.2rem"><span>总收益</span><span  @click="mycar" style="margin-left:8rem;">我的车辆</span></p>
      <p style="margin-bottom:0;margin-top:.3rem;font-size:16px;margin-left:1.2rem">{{zongshouyi}}元</p>

      <div class="smallbox">
        <div class="smallbox-left">
          <p>本月收益</p>
          <p>{{yueshouyi}}元</p>
        </div>
        <div class="smallbox-right">
         <p>账户余额</p>
          <p>{{yue}}元</p>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="sellout">
      <!-- 二级导航 -->
      <div style="width:100%;height:2rem;background:#ffffff"></div>
      <div>
        <van-tabs color="#feef5e" sticky v-model="activee">
          <van-tab title="我的卖出">
            <div v-if='mysell.length==0' style="margin:2rem auto;font-size:16px;text-align:center">暂无数据..</div>
            <div v-else  class="main">
              <div style="position:relative;" v-for="(i,index) in mysell" :key=index class="main-son">
                <p>{{i.Name}}</p>
                <p style="margin-top:.4rem;">{{i.CarModel}}</p>
                <p style="font-size:13px;color:silver; margin-top:.6rem;">{{i.OrderId}}</p>
                <!-- <span class="toright">></span> -->
              </div>
            </div>
          </van-tab>
          <van-tab title="二级分销卖出">
            <div v-if="twosell.length==0" style="margin:2rem auto;font-size:16px;text-align:center">
                 暂无数据..
            </div>
            <div v-else class="main">
              <div style="position:relative;" v-for="(i,index) in twosell" :key=index class="main-son">
                <p>{{i.Name}}</p>
                <p style="margin-top:.4rem;">{{i.CarModel}}</p>
                <p style="font-size:13px;color:silver; margin-top:.6rem;">{{i.OrderId}}</p>
                <p style="font-size:13px;color:red; margin-top:.6rem;">
                  返利：
                  <span>{{i.one}}</span>元 利息:
                  <span>{{i.two}}</span>元
                </p>
                <!-- <span class="toright">></span> -->
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!-- 底部导航 -->
    <van-tabbar active-color="black" v-model="active">
      <van-tabbar-item to="/distributorlist">
        <span>列表</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/mydistributor">
        <span>个人</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.one : icon.two">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      yue:'',
      zongshouyi:'',
      yueshouyi:'',
      shower:true,
      touxiang:'',
      GroupName:'',
      HomeAddress:'',
      activee: 0,
      active: 1,

      icon: {
        normal: require("../assets/images/f637d363df0dee6cf574c4fff2729ef.png"),
        active: require("../assets/images/37b2c41355bff1ed25fc1b9db3005a9.png"),
        one: require("../assets/images/30307be0832c7c6777c43ddc731507e.png"),
        two: require("../assets/images/df32ed2be7724ce3dfbcc393bba51a2.png")
      },
      mysell: [
       
      ],
      twosell: [
       
      ]
    };
  },
  methods: {
    // 获取我的卖出
    maichu(){
      request.post(this.$api+"/Wechat/GetMySellOutList",{
       Type:1,
       Page:1,
       Rows:15
      }).then(res=>{
       this.mysell=res.data.Data.list
      }).catch(err=>{

      })
    },
    // 获取二级分销卖出
    ermaichu(){
 request.post(this.$api+"/Wechat/GetMyTwoSellOutList",{
       Type:1,
       Page:1,
       Rows:15
      }).then(res=>{
       this.twosell=res.data.Data.list
      }).catch(err=>{

      })
    },
      wode() {
      request
        .post(this.$api+"/Wechat/GetCarUserInfo", {})
        .then(res => {
        this.touxiang=res.data.Data.UserPhoto
        this.GroupName=res.data.Data.Username;
        this.HomeAddress=res.data.Data.HomeAddress
        this.yue=res.data.Data.Points
        this.zongshouyi=res.data.Data.TotalTevenue
        this.yueshouyi=res.data.Data.MonthTevenue
          
          
        })
        .catch(err => {
          console.log(err);
        });
    },
    mycar(){
      this.$router.push('/mycar')
    }
  },
  mounted(){
    
    this.wode()
    this.maichu()
    this.ermaichu()
  }
};
</script>
<style scoped>
.smallbox {
  position: absolute;
  top: 7rem;
  left: 3.1rem;
  width: 60%;
  height: 4rem;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  display: flex;
}
.smallbox-left {
  display: inline-block;
  width: 40%;
  height: 4rem;
  text-align: center;
}
.smallbox-left p {
  font-size: 14px;
  margin-top: 0.5rem;
}
.smallbox-right {
  display: inline-block;
  width: 60%;
  height: 4rem;
  text-align: center;
}
.smallbox-right p {
  font-size: 14px;
  margin-top: 0.5rem;
}
.maintop {
  position: relative;
  width: 100%;
  height: 9rem;
  /* display: flex; */
  background: url("../assets/images/141e3c7f5f6f006fb16513553ee69f4.png")
    no-repeat;
  background-size: 100% 100%;
}
.lingdang {
  position: fixed;
  right: 0.5rem;
}
.headphoto {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin-top:.8rem;
  margin-left: 1rem;
  /* background: darkslateblue; */
  background-size: 100% 100%;
  border-radius: 50%;
}
.username {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
}
/* 卖出 */
.sellout {
  width: 100%;
  height: 13rem;
  /* background: red; */
}
.main {
  width: 100%;
  background: #ffffff;
  margin-bottom: 2rem;
}
.main-son {
  width: 85%;
  margin: 0 auto;
  height: 5rem;
  /* background: red; */
  border-bottom: 1px solid silver;
  padding-top: 0.6rem;
}
.main-son p {
  margin: 0;
  font-size: 16px;
}
.toright {
  position: absolute;
  right: 0.5rem;
  top: 1.8rem;
}
.username{
  margin-top: 1.2rem;
  margin-bottom: 0;

  font-size: 18px;
}
.uaddress{
  font-size: 14px;
  color:#666666;
}
</style>
