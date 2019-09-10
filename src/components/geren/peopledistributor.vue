<template>
  <div>
    <div class="maintop">
      <div class="lingdang">
        <i class="iconfont" style="font-size:18px">&#xe600;</i>
      </div>
      <div style="width:100%;height2rem;display:flex">
        <div class="headphoto"></div>
        <div style="margin-left:.8rem;">
          <p class="username">我是个人分销商</p>
         <p  class="uaddress">杭州拱墅区汽车电商园</p>
        </div>
        
      </div>

      <p style="margin-bottom:0;margin-top:.5rem;font-size:16px;margin-left:1.2rem"><span @click="$router.push('/secondary')">我的分销伙伴</span><span  @click="mycar" style="margin-left:6rem;">我的车辆</span></p>
 

      <div class="smallbox">
        <div class="smallbox-left">
          <p>本月收益</p>
          <p>+0元</p>
        </div>
        <div class="smallbox-right" @click="mybalance">
         <p>账户余额</p>
          <p>+0元</p>
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
            <div class="main">
              <div style="position:relative;" v-for="i in mysell" class="main-son">
                <p>{{i.name}}</p>
                <p style="margin-top:.4rem;">{{i.describe}}</p>
                <p style="font-size:13px;color:silver; margin-top:.6rem;">{{i.time}}</p>
                <span class="toright">></span>
              </div>
            </div>
          </van-tab>
          <van-tab title="二级分销卖出">
            <div class="main">
              <div style="position:relative;" v-for="i in twosell" class="main-son">
                <p>{{i.name}}</p>
                <p style="margin-top:.4rem;">{{i.describe}}</p>
                <p style="font-size:13px;color:silver; margin-top:.6rem;">{{i.time}}</p>
                <p style="font-size:13px;color:red; margin-top:.6rem;">
                  返利：
                  <span>{{i.one}}</span>元 利息:
                  <span>{{i.two}}</span>元
                </p>
                <span class="toright">></span>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!-- 底部导航 -->
    <van-tabbar active-color="black" v-model="active">
      <van-tabbar-item to="/peoplelist">
        <span>列表</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/peopledistributor">
        <span>个人</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.one : icon.two">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activee: 0,
      active: 1,

      icon: {
        normal: require("../../assets/images/f637d363df0dee6cf574c4fff2729ef.png"),
        active: require("../../assets/images/37b2c41355bff1ed25fc1b9db3005a9.png"),
        one: require("../../assets/images/30307be0832c7c6777c43ddc731507e.png"),
        two: require("../../assets/images/df32ed2be7724ce3dfbcc393bba51a2.png")
      },
      mysell: [
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00"
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00"
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00"
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00"
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00"
        }
      ],
      twosell: [
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00",
          one: 15,
          two: 16
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00",
          one: 15,
          two: 16
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00",
          one: 15,
          two: 16
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00",
          one: 15,
          two: 16
        },
        {
          name: "起亚CROSS",
          describe: "2017款 1.4L",
          time: "2019.06.15 14:00",
          one: 15,
          two: 16
        }
      ]
    };
  },
  methods: {
    mycar(){
      this.$router.push('/mycar')
    },
    mybalance(){
  this.$router.push('/mybalance')

    }
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
  background: url("../../assets/images/141e3c7f5f6f006fb16513553ee69f4.png")
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
  background: darkslateblue;
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
