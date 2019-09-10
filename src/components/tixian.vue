<template>
  <div>
    <!-- 提现 -->
    <van-nav-bar title="提现" left-arrow @click-left="onClickLeft"/>
    <div class="top">
      <img class="touxiang" src="../assets/images/99b07e228c90afbddc642586b5179cc.jpg" alt>
      <div style="font-size:20px;margin-left:.8rem;">名字</div>
    </div>
    <div class="main">
      <div style="font-size:15px;margin-left:.6rem;padding-top:.5rem;">提现金额</div>
      <div style="margin-top:.6rem">
        <span style="font-size:26px;margin-left:.6rem;color:red">￥</span>
        <input type="text" v-model="money">
      </div>
    </div>
    <div
      style="font-size:14px;color:#666666;margin-top:.5rem;margin-left:.6rem;margin-bottom:3rem;"
    >
      {{me}}收款
      <span style="margin-left:6rem;color:#55d11e" @click="showDialog">更换</span>
    </div>
    <div class="yongjin">
      <p>佣金累计：998元</p>
    </div>
    <div class="yongjin">
      <p>佣金累计：998元</p>
    </div>

    <!-- 蒙曾 -->
    <van-popup v-model="show" position="bottom" :overlay="true">
      <div style="text-align:center;font-size:16px;margin-top:.8rem;">更换收款方式</div>
      <div class="weixin" @click="weixin">
        <div style="width:40%" >
          <i class="iconfont" style="color:#55d11e">&#xe635;</i>
          <span style="color:silver;margin-left:.5rem;">微信</span>
        </div>
        <div style="width:60%;text-align:right">
          <i class="iconfont" style="color:red" ref="wei">&#xe602;</i>
        </div>
      </div>

      <div class="weixin" @click="zhifu">
        <div style="width:40%">
          <i class="iconfont" style="color:#3ab5ff">&#xe636;</i>

          <span style="color:silver;margin-left:.5rem;">支付宝</span>
        </div>
        <div style="width:60%;text-align:right">
          <i class="iconfont" style="color:silver" ref="zhi">&#xe602;</i>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      me: "微信",
      money: "",
      show: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    showDialog() {
   
      this.show = true;
    },
    weixin() {
      console.log(1);
      this.me = "微信";
      this.$refs.wei.style.color = "red";
      this.$refs.zhi.style.color = "silver";
      this.show = false;
    },
    zhifu() {
      console.log(2);
      this.me = "支付宝";
      this.$refs.zhi.style.color = "red";
      this.$refs.wei.style.color = "silver";
      this.show = false;
    }
  }
};
</script>
<style scoped>
input {
  border: none;
}
.van-nav-bar__left ::before {
  color: black;
}
.top {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  display: flex;
}
.touxiang {
  width: 3rem;
  height: 3rem;
  margin-top: 0.5rem;
  margin-left: 0.8rem;
  border-radius: 50%;
  background-size: 100% 100%;
}
.main {
  width: 100%;
  height: 4rem;
  background: #ffffff;
}
.yongjin {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  background: #ffffff;
  font-size: 16px;
}
.yongjin p {
  margin: 0;
  margin-left: 0.8rem;
}
.weixin {
  width: 90%;
  height: 2.5rem;
  line-height: 2.5rem;
  margin: 0 auto;
  display: flex;
  font-size: 17px;
}
</style>