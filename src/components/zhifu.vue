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
            <span class="sonone">订单单号</span>
            <span class="sontwo">{{haoma}}</span>
          </div>
          <div class="son">
            <span class="sonone">品牌</span>
            <span class="sontwo">{{haoma}}</span>
          </div>
          <div class="son">
            <span class="sonone">颜色</span>
            <span class="sontwo">{{color}}</span>
          </div>
          <div class="son">
            <span class="sonone">数量</span>
            <span class="sontwo">{{num}}</span>
          </div>
          <div class="son">
            <span class="sonone">全款</span>
            <span class="sontwo">{{quan}}</span>
          </div>
          <div class="son">
            <span class="sonone">订金</span>
            <span class="sontwo">{{ding}}</span>
          </div>
        </div>

        <!-- mubu -->
        <div class="mubu">
          <div class="son-son">
            <span class="sonone" style="color:silver">服务费</span>
            <span class="sontwo">{{ding}}</span>
          </div>
          <div class="son-son">
            <span class="sonone" style="color:silver">运费</span>
            <span class="sontwo">{{ding}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dibu">
         <span style="margin-left:16px" class="heji">合计￥</span>
         <span>150000000</span>
         <span class="tozhifu">去支付</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      haoma: 2019478878,
      name: "艾迪",
      color: "蓝色",
      num: 15,
      quan: 10000,
      ding: 30000
    };
  },
  methods: {
      left(){
          this.$router.back(-1)
      }
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
  width: 40%;
  height: 2rem;
}
.sontwo {
  display: inline-block;
  width: 60%;
  height: 2rem;
  text-align: right;
  font-size: 15px;
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
    margin-left: 2rem;
}
</style>