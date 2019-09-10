<template>
  <div>
    <van-nav-bar title="平台优势" left-arrow @click-left="onClickLeft" fixed/>
    <div style="width:100%;height:2rem"></div>
    <div class="bgtop">
      <div class="title">
        <div class="ball"></div>
        <div class="title-font">公司简介</div>
      </div>
      <div class="describe">
        &nbsp; &nbsp; &nbsp; &nbsp;公司成立于2018年，是国家商务部和国家税务总局特批的内资融资租赁试点企业。
        <br>&nbsp; &nbsp; &nbsp; &nbsp;至2018年实缴注册资金3000万元人民币，计划实收资本投资50亿元。目前旗下拥有百余家分公司，依托母公司中浩国际租赁（深圳）有限公司强大的实力和经济背景，全面提供金融产品和服务。针对不同客户需求，客户条件，量身定制购车金融方案，为终端和企业汽车用户提供包括整车买卖（新车，二手车），汽车批发，汽车分期，已租代购等立体化服务，满足不同人群的购车需求
      </div>
    </div>
    <div style="width:100%;height:.8rem;background:#f5f5f5"></div>
    <div class="title">
      <div class="ball"></div>
      <div class="title-font">公司简介</div>
    </div>
    <img src="../assets/images/3b4ee10f839d656781aabd8ffc18a03.png" class="imgtwo" alt>
    <!-- <img src="../assets/images/bff633c2bd77e2a5bd693ad016b8552.png" class="imgone" alt=""> -->
    <div style="width:100%;height:2rem;background:#ffffff;"></div>
    <div style="width:100%;height:.8rem;background:#f5f5f5"></div>
    <div class="title">
      <div class="ball"></div>
      <div class="title-font">量辆车的优势</div>
      
    </div>
     <img src="../assets/images/3ecb4385285aa72bbc2949f92accac9.png" class="imgone" alt="">
     <div style="width:100%;height:2rem;background:#ffffff;"></div>
    <div style="width:100%;height:.8rem;background:#f5f5f5"></div>
    <div class="title">
      <div class="ball"></div>
      <div class="title-font">如何加入量辆车</div>
    </div>
    <div style="font-size:13px;color:#666666;text-align:center;width:100%;height:9rem;background:#ffffff;">
    <p style="margin-top:0;">只要你怀揣梦想，有创业激情，有一定的资源脉</p>   
    <p>(有社交群、微商管理货汽车行业从业经验更佳)</p>     
    <p>欢迎随时与我们联系</p>
    <p>财富热线：0571-87612992</p>

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
    }
  }
};
</script>
<style scoped>
.van-nav-bar__left ::before {
  color: black;
}
.bgtop {
  width: 100%;
  height: 12rem;
  background: #ffffff;
}
.title {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background-color: #ffffff;
  text-align: center;
  /* display: flex; */
}
.ball {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #ffb238;
}
.title-font {
  display: inline-block;
  font-size: 18px;
}
.describe {
  letter-spacing: 1px;
  font-size: 14px;
  width: 90%;
  height: 8rem;
  margin: 0 auto;
  color:#666666;
}
.imgone {
  display: block;
  width: 100%;
  height: 12rem;
  margin: 0 auto;
  background-size: 100% 100%;
}
.imgtwo {
  display: block;
  width: 100%;
  height: 9rem;
  margin: 0 auto;
  background-size: 100% 100%;
}
</style>