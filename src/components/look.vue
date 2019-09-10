<template>
  <div>
    <van-nav-bar title="查询进度" left-arrow @click-left="onClickLeft" fixed/>

    <div   v-show="status=='UnAudited'" >
      <div class="false">
        <div class="false-img"></div>
        <p>正在审核，请耐心等待</p>
        <div class="refresh" @click="shuaxin">刷新</div>
      </div>
    </div>
    <div   v-show="status=='Unapprove'" >
      <div class="true">
        <div class="true-img"></div>
        <p>审核未通过,请<span style="color:red" @click="chongxin">点击重新提交资料...</span></p>
        <div class="refresh-two" @click="shuaxin">刷新</div>
      </div>
    </div>
    <!-- <van-cell style="margin-top:2rem" title="联系客服" is-link/> -->
    <div style="width:100%;height:1.7rem;background:#ffffff;margin-top:2rem;text-align:center"><a style="font-size:14px;color:black" href="tel:0571-87612992">联系客服</a></div>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      id: 0,
      status:'',
     
    };
  },
  methods: {
    // 重新提交资料
    chongxin(){
     this.$router.push('/paging')
     
    },
    shuaxin(){
     this.getstatus()
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    getstatus() {
      request
        .post(this.$api+"/Wechat/GetUserInfo",{
          
        })
        .then(res => {
          // console.log(res.data.Data);
          this.status=res.data.Data.Status
        })
        .catch(err => {
          console.log(err);
        });
    },
    panduantiao(){
     
      // this.$router.push('/distributorlist')
      //  if(this.normal='UnAudited'){
      //    this.status=true
      //  }
      //   else if(this.normal='Unapprove'){
      //       this.status=false
      //  }
      //  else{
      //    this.$router.push('/distributorlist')
      //  }
    }
  },
  mounted() {
    this.getstatus();
    // this.panduantiao();
  }
};
</script>
<style scoped>
.van-nav-bar__left ::before {
  color: black;
}
.false {
  text-align: center;
  padding-top: 2.8rem;
  width: 100%;
  height: 9rem;
  background-color: #ffffff;
}
.false-img {
  margin-left: 6.6rem;
  width: 3rem;
  height: 3rem;
  background: url("../assets/images/99b07e228c90afbddc642586b5179cc.jpg")
    no-repeat;
}
.true {
  text-align: center;
  padding-top: 2.8rem;
  width: 100%;
  height: 9rem;
  background-color: #ffffff;
}
.true-img {
  margin-left: 6.6rem;
  width: 3rem;
  height: 3rem;
  background: url("../assets/images/c05c113fa5ccfdb946599d72620939e.png");
  background-size: 100% 100%;
}
.refresh {
  width: 6rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background: #fe9900;
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
  margin: 0rem auto;
}
.refresh-two {
  width: 6rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background: red;
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
  margin: 1rem auto;
}
</style>
