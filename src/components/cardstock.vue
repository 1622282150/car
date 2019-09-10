<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="余额卡劵" fixed left-arrow @click-left="onClickLeft"/>

    <div class="card-middle">
      <div class="card-left" @click="mybalance">
        <i style="font-size:26px;display:block;margin-top:0.8rem" class="iconfont">&#xe64f;</i>
        <p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:16px;">余额</p>
        <p style="margin:0;font-size:8px;color:#716c66">￥*****元</p>
      </div>
      <div class="card-right">
        <i style="font-size:26px;display:block;margin-top:0.8rem" class="iconfont">&#xe626;</i>
        <p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:16px;">卡劵</p>
        <p style="margin:0;font-size:8px;color:#716c66">￥*****元</p>
      </div>
    </div>


    <!-- 我的卡片 -->
    <div class="my-card">
       <p>
           <i style="font-size:21px;margin-left:0.8rem;" class="iconfont">&#xe772;</i>
           <span style="font-size:21px;margin-left:0.5rem;">我的卡片</span>
       </p>
       <!-- card -->
       <div class="main-card">

       </div>
       <div class="second-card">

       </div>
       <div class="three-card">

       </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods:{
      onClickLeft(){
          this.$router.back(-1)
      },
      mybalance(){
        this.$router.push('/mybalance')
      }
  }
};
</script>
<style scoped>
.van-nav-bar__left i::before {
  color: black;
}
.card-middle {
  width: 90%;
  height: 6rem;
  margin: 3rem auto 0.8rem auto;
  border-radius: 20px;
  background: linear-gradient(to right, #ffc13c, #ffa81b);
}
.card-left {
  width: 5rem;
 
  display: inline-block;
  text-align: center;
 
  margin-left: 1.3rem;
}
.card-right {
  width: 5rem;
 
  display: inline-block;
  text-align: center;
  
  margin-left: 1.3rem;
}
.my-card{
    position: relative;
    width: 100%;
    height: 18.4rem;
    background-color: #ffffff;
}
.my-card p{
    height: 2rem;
    line-height: 2rem;
}
.main-card{
    position: absolute;
    top: 4rem;
    left: 0.8rem;
    width:90%;
    height: 6rem;
    background-color: #ffc13c;
    border-radius: 20px;
    z-index: 3;
}
.second-card{
    position: absolute;
    top: 3.6rem;
    left: 1.1rem;
    width:86%;
    height: 6rem;
    border: 1px solid silver;
    border-radius: 20px;
    z-index: 2;
     opacity: 0.6;
}
.three-card{
     position: absolute;
    top: 3.2rem;
    left: 1.4rem;
    width:82%;
    height: 6rem;
     border: 1px solid silver;
    border-radius: 20px;
    z-index: 1;
    opacity: 0.3;
}
</style>