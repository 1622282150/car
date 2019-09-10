<template>
  <div>
    <div class="mybalance-top">
        <div class="left" @click="onClickLeft"><</div>
        <div class="mybalance-title">我的余额</div>
      <div class="mybalance-middle">
        <div class="mybalanced-middleleft">￥0.00</div>
        <div class="mybalanced-middleright">
          <div @click="tixian">提现</div>
        </div>
      </div>
    </div>
    <div class="mingxi">
        <div class="qiu"></div>
        <div style="font-size:18px;margin-left:.5rem;margin-top:.4rem">明细</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    tixian(){
      this.$router.push('/tixian')
    }
  }
};
</script>
<style scoped>
.mybalance-top {
  width: 100%;
  height: 10rem;
  background: url("../assets/images/4feef2afc434f98cf0bd0d08c045334.jpg");
  background-size: 100% 100%;
  position: relative;
}
.mybalance-title{
    width: 100%;
    height: 2rem;
      font-size: 16px;
    font-weight: 500;
    text-align: center;
    position: absolute;
    top: 0.4rem;
}
.mybalance-middle {
  display: flex;
  position: absolute;
  top: 7rem;
  left: 0.9rem;
  width: 90%;
  height: 6rem;
  border-radius: 10px;
  background: #ffffff;
}
.mybalanced-middleleft {
  width: 40%;
  height: 6rem;
  line-height: 6rem;
  font-size: 28px;
  text-align: center;
  color: #666666;
}
.mybalanced-middleright {
  width: 4rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 18px;
  background: #ffc852;
  text-align: center;
  border-radius: 20px;
  margin: auto auto auto 3rem;
}
.mingxi {
  width: 100%;
  height: 2rem;
  background: #ffffff;
  margin-top: 4rem;
  display: flex;
}
.qiu{
    width: .5rem;
    height: .5rem;
    background: #fedb3b;
    border-radius: 50%;
    margin-top: .7rem;
    margin-left: .9rem;
    
}
.left{
    z-index: 1000;
    position: fixed;
    top: .1rem;
    left: .7rem;
}
</style>