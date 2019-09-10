<template>
  <div>
    <!-- 头部  -->
    <img class="touxiang" src="../assets/images/客服[转换] (2).png" alt="">
    <i @click="left" class="iconfont" style="position:fixed;top:.5rem;left:.5rem;">&#xe60b;</i>
     <div class="service-top">
       <p  style="margin-top:0;padding-top:2.6rem">您好</p>
       <p>我们将为您提供更多帮助</p>
       <img src="" alt="">
     </div>

    <!-- 主体 -->
    <div class="service-main">
     <p style="font-size:17px;padding-left:0.6rem;margin-top:0.2rem;">猜你想问</p>
     <p style="font-size:13px;color:silver;padding-left:0.6rem;">车辆过户问题？</p>
     <p style="font-size:13px;color:silver;padding-left:0.6rem;">金融方案？</p>
     <p style="font-size:13px;color:silver;padding-left:0.6rem;">申请资料？</p>
     </div>
    
     <ul>
       <li>购车流程</li>
       <li>支付问题</li>
       <li>金融方案</li>
       <li>如何提车</li>
     </ul>

    <!-- 底部 -->
    <div class="service-bottom">
        <input type="text" placeholder="请输入您的问题">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    left() {
      this.$router.back(-1);
    }
  }
};
</script>
<style scoped>
ul{
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content:space-around;
  position: fixed;
  bottom:2rem;
  
}
li{
  width: 3rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 20px;
  background: #ffffff;
  text-align: center;
  font-size: 13px;
}
.service-top{
  width: 100%;
  height: 9rem;
  background: url('../assets/images/kefu.jpg') no-repeat;
  background-size: 100% 100%;
}
.service-top p{
  font-size: 18px;
  color: white;
  margin-left: .8rem;
}
.service-bottom{
    position: fixed;
    bottom:0;
    width: 100%;
    height: 2rem;
   background: #ffffff;

}
.service-bottom >input{
    width: 70%;
    margin-left:1rem;
    height: 1.2rem;
     border-radius:20px;
     font-size: 15px;
     padding-left: 1rem;
    border: 1px solid silver;
    color: silver;
    background-color: #eeeeee;
}
.service-main{
    margin-top: .9rem;
    margin-left: 3rem;
    width: 55%;
    height: 6rem;
    background-color: #ffffff;
    border: 1px solid silver;
    border-radius: 20px;
}
.touxiang{
  position: fixed;
  top: 10rem;
  left: .8rem;
}
</style>