<template>
  <div>
    <!-- 图片 -->
    <div class="storeimg">
      <!-- 向左箭头 -->
      <span @click="toleft" style="margin-left:.8rem"><</span>
      <div class="storemain">
        <p style="font-size:17px;margin-bottom:0;margin-left:0.8rem;">查看个人分销商</p>
        <p style="font-size:14px;margin-top:0.5rem;margin-left:0.8rem;color:silver">杭州市拱墅区石祥路525号</p>
      </div>
      <div class="concern">关注</div>
    </div>

    <van-search
      background="#f2f2f2"
      class="inputbox"
      input-align="center"
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
    />
    <van-tabs style="width:90%;margin:0 auto;" color="#ffef5e"  v-model="active" sticky>
      <van-tab  title="新车">
        <div class="list-son">
            <div  @click="ordercar"  class="main-block" v-for="i in list" :key="i.name">
            <div class="block-img"></div>
            <div class="block-right" >
                <p style="font-size:16px;margin:0"  v-text="i.name"></p>
                <p style="font-size:15px;color:silver;margin-top:0.3rem;margin-bottom:0.3rem" v-text="i.describe"></p>
                <p style="font-size:16px;color:#e12c2c;margin-top:0;margin-bottom:0.3rem">首付<span v-text="i.num"></span>万</p>
                <p style="color:#fda4a4;font-size:16px;margin:0">月供<span v-text="i.money"></span>元</p>
                
            </div>
         </div>
        </div>
      </van-tab>
      <van-tab title="二手车">
         <div class="list-son">
            <div class="main-block" v-for="i in list" :key="i.name">
            <div class="block-img"></div>
            <div class="block-right" >
                <p style="font-size:16px;margin:0"  v-text="i.name"></p>
                <p style="font-size:15px;color:silver;margin-top:0.3rem;margin-bottom:0.3rem" v-text="i.describe"></p>
                <p style="font-size:16px;color:#e12c2c;margin-top:0;margin-bottom:0.3rem">首付<span v-text="i.num"></span>万</p>
                <p style="color:#fda4a4;font-size:16px;margin:0">月供<span v-text="i.money"></span>元</p>
                
            </div>
         </div>
        </div>
      </van-tab>
    </van-tabs>
    <!-- 底部 -->
    <div class="storebottom">
      <div>马上咨询</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       active:0,
        list: [
        {
          name: "起KX CROSS",
          describe: "2017款1.4L AT GLS",
          num: 0.42,
          money: 2988
        },
        {
          name: "起KX CROSS",
          describe: "2017款1.4L AT GLS",
          num: 0.42,
          money: 2988
        },
        {
          name: "起KX CROSS",
          describe: "2017款1.4L AT GLS",
          num: 0.42,
          money: 2988
        },
        {
          name: "起亚K CROSS",
          describe: "2017款1.4L AT GLS",
          num: 0.42,
          money: 2988
        },
        {
          name: "起亚KX CROS",
          describe: "2017款1.4L AT GLS",
          num: 0.42,
          money: 2988
        },
        {
          name: "起亚KX CRSS",
          describe: "2017款1.4L AT GLS",
          num: 0.42,
          money: 2988
        }
      ]
    };
  },
  methods: {
    toleft() {
      this.$router.back(-1);
    },
    ordercar(){
      this.$router.push('/ordercar')
    }
  }
};
</script>
<style scoped>
.storeimg {
  position: relative;
  width: 100%;
  height: 9rem;
  background: url("../../assets/images/96d86aaa7bea864906818732d78ac70.png");
}
.storebottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.4rem;
  background: #ffffff;
}
.storebottom > div {
  text-align: center;
  font-size: 14px;
  width: 50%;
  height: 1.2rem;
  margin: 0.6rem auto 0.6rem auto;
  line-height: 1.2rem;
  border-radius: 20px;
  color: #858585;
  background: linear-gradient(to right, #ffef5e, #ffa81b);
}
.storemain {
  position: absolute;
  top: 6rem;
  left: 0.8rem;
  width: 90%;
  height: 7rem;
  background: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.concern {
  position: absolute;
  right: 2rem;
  top: 7rem;
  width: 3rem;
  font-size: 14px;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  background: linear-gradient(to right, #ffef5e, #ffa81b);
  border-radius: 20px;
}
.inputbox {
  width: 60% !important;
  margin: 0 auto;
}
.van-search .van-cell {
  background: #f2f2f2;
  border-radius: 20px;
}

.van-tabs__line{
  background: #ffef5e !important;
}

/* 内容 */
.list-son{
  margin-bottom: 2rem;
}
.main-block{
    width: 100%;
    height: 6rem;
    margin: 0 auto;
    background: #ffffff;
    /* border-bottom: 1px solid silver; */
}
.block-img{
    display: inline-block;
    width: 30%;
    height: 4rem;
    margin-left: 0.4rem;
}
.block-right{
    margin-left: 0.6rem;
    display: inline-block;
    width: 60%;
    height: 4rem;
}
</style>