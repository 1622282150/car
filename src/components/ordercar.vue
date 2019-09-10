<template>
  <div>
    <!-- 轮播图 -->
    <div class="top">
      <span @click="left"><</span>
      <van-swipe :height="180" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            style="width:100%;height:180px;background-size:100% 100%;"
            src="../assets/images/9365706baadb3bc89d772d3eafc3c53.jpg"
            alt
          >
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
      </van-swipe>
    </div>
    <div class="username">
      <p style="margin-top:0;margin-bottom:0;font-size:19px;color:red">￥00.000.00</p>
      <p style="margin-top:.6rem;margin-bottom:0;font-size:19px;color:red">起亚KXCRSS2017款</p>
      <p style="font-size:14px;color:silver">
        已售:
        <span>10</span>台
        <span style="margin-left:6rem;">
          库存:
          <span>70</span>台
        </span>
      </p>
    </div>
    <div style="width:100%;height:.8rem;background:#f5f5f5"></div>
    <div class="fahuo">
      <p
        style="margin-left:.5rem;margin-top:0;margin-bottom:0;font-size:16px;padding-top:.5rem;color:silver"
      >
        发货
        <i class="iconfont">&#xe601;</i>
        <span style="color:black">杭州</span>
      </p>
      <p
        style="margin-left:.5rem;margin-top:0;margin-bottom:0;font-size:16px;padding-top:.5rem;color:silver"
      >
        优惠
        <i class="iconfont">&#xe772;</i>
        <span style="color:black">使用优惠卷</span>
      </p>
    </div>
    <div style="width:100%;height:.8rem;background:#f5f5f5"></div>
    <div class="jiajian">
      <p
        style="margin-top:0;padding-top:.5rem;margin-left:.5rem;font-size:16px;color:silver"
      >请选择颜色与数量</p>

      <div class="one">
        <span style="font-size:16px;margin-left:.8rem;margin-right:.4rem;margin-top:.3rem;">黑色</span>
        <van-stepper v-model="value"/>
        <span style="font-size:16px;margin-left:1.3rem;margin-right:.4rem;margin-top:.3rem;">白色</span>
        <van-stepper v-model="value"/>
      </div>
      <div class="one">
        <span style="font-size:16px;margin-left:.8rem;margin-right:.4rem;margin-top:.3rem;">黑色</span>
        <van-stepper v-model="value"/>
      </div>
    </div>
    <div style="width:100%;height:.8rem;background:#f5f5f5"></div>
    <div class="last">
      <p style="font-size:16px;margin-left:.8rem;padding-top:.2rem">用户须知</p>
      
    </div>
     <div class="bottom">
           <div class="bottom-button" @click="zhifu">联系客服  |  支付定金</div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1
    };
  },
  methods: {
    left() {
      this.$router.back(-1);
    },
    zhifu(){
        this.$router.push('/zhifu')
    }
  }
};
</script>
<style  scoped>
.top {
  position: relative;
}
.top span {
  position: absolute;
  top: 0.6rem;
  left: 0.8rem;
  z-index: 100000;
}
.username {
  width: 100%;
  height: 5rem;
  background: #ffffff;
}
.username p {
  margin-left: 0.9rem;
}
.fahuo {
  width: 100%;
  height: 3rem;
  background: #ffffff;
}
.jiajian {
  width: 100%;
  height: 6rem;
  background: #ffffff;
}
.one {
  display: flex;
  width: 100%;
  height: 1.5rem;
  background: #ffffff;
}
.last {
  width: 100%;
  height: 4rem;
  background: #ffffff;
}
.bottom{
    width: 100%;
    height: 2rem;
    position: fixed;
    bottom: 0;
    background: #ffffff;
}
.bottom-button{
    width: 70%;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    font-size: 16px;
    background: #feef5e;
    color: #ffffff;
    border-radius: 20px;
    margin: 0 auto;
}
</style>