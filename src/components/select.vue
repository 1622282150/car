<template>
  <div style="width:100%;height:auto;background:#ffffff" ref="certy">
    <van-nav-bar title="购车方案详情" left-arrow @click-left="onClickLeft" fixed/>
    <div style="width:100%;height:2rem;background:#ffffff;"></div>
<div  v-show="quanbu">
    <div class="title">
      <div class="ball"></div>
      <div class="title-font" >全款购车</div>
    </div>
    <p style="font-size:12px;text-align:center;color:#666666;">全款购车，一键下单，全程陪购</p>
    <div class="zhifu" @click="quankuan">支付全款定金</div>
</div>
    <div class="title">
      <div class="ball"></div>
      <div class="title-font">点击选择更多金融方案</div>
    </div>
    <!-- 板块 -->
    <p class="shoufu"></p>
    <div
      v-for="(i,index) in  showinfo"
      :key="index"
      :class="activeindex===index?'shoufuactive':'shoufuone'"
      @click="xuanze(index)"
    >
      <div :class="activeindex===index?'shoufuimg':''"></div>
      <div class="shoufuleft">
        <p class="ptop">{{i.FirstPayment}}万</p>
        <p class="pbottom">首付</p>
      </div>
      <div class="shoufumiddle">
        <p class="ptop">{{i.MonthPay}}元</p>
        <p class="pbottom">月供</p>
      </div>
      <div class="shoufuright">
        <p class="ptop">{{i.Month}}月</p>
        <p class="pbottom">期数</p>
      </div>
    </div>

   
    <!-- <div class="title">
      <div class="ball"></div>
      <div class="title-font">购车须知</div>
    </div>
    <div class="wenben">
      <div class="wenbenson">
        <p class="wenbentitle">使用性质</p>
        <p class="wenbenmain">仅限本人申请，不能替他人申请</p>
        <p class="wenbenmain">按揭期间，不能将车辆用于租赁，抵押，买卖，经营（如网约车等）</p>
      </div>
      <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">车辆所有权</p>
        <p class="wenbenmain">首年车辆所有权归车筑公司所有，一年按揭到期支付尾款，过户到个人名下，过户及所产生的税费由量辆车承担（落档费用出外）</p>
      </div>
      <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">申请资料</p>
        <p class="wenbenmain">提供支付宝账户，有效驾驶证，身份证</p>
      </div>
   
      <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="title">
        <div class="ball"></div>
        <div class="title-font">其他说明</div>
      </div>
      <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">牌照说明</p>
        <p class="wenbenmain">限牌城市购车用户，提供周边城市车牌（例如：北京上廊坊牌照，天津上唐山牌照，上海上南京牌照）</p>
        <p class="wenbenmain">非限牌城市购车用户，大部分可提供当地车牌，详情可通过app查询</p>
      </div>
      <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">保险</p>
        <p class="wenbenmain">
          量辆车送首年保险，包括交强险、第三者责任险（30万）、驾乘人员意外伤害保险（每座5万）、车损险及以上几项险种的不计免赔险，详情以租赁协议及保单为准；
          提供盗抢险和涉水险同等理赔服务；
        </p>
        <p class="wenbenmain">如需增加其他保险类型的险种，可通过量辆车App或4008－010－010客服热线办理，新增部分费用用户自行承担。</p>
      </div>
      <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">事故处理和保险理赔</p>
        <p class="wenbenmain">出险车辆需到大搜车指定或者认可的品牌4S店进行维修；</p>
        <p class="wenbenmain">
          客户出险请拨打交警电话和对应投保公司进行报案，同时需要拨打量辆车官方热线（4008－010－010）或通过量辆车App备案；
          违章需在发生之日起一个月内到交警部门处理；
        </p>
        <p class="wenbenmain">月租、保险、里程、违章（仅支持无罚分违章，有罚分违章需要去交管所处理）相关车辆事宜均可通过量辆车APP申请线上处理。</p>
      </div>
       <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">车辆保养</p>
        <p class="wenbenmain">日常保养要求请査看随车提供的《保养手册》，尽可能到指定4S店进行保养。</p>
        
      </div>
       <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">车辆异常损耗</p>
        <p class="wenbenmain">车辆被认定为事故车（事故车认定标准参看《大搜车事故车认定标准》）或因非正常损耗，造成资产减值的，具体赔偿细则以合同约定为准。</p>
        
      </div>
       <div style="width:100%;height:1px;background:#e6e6e6;"></div>
      <div class="wenbenson">
        <p class="wenbentitle">上牌</p>
        <p class="wenbenmain">上牌手续由量辆车负责办理，客户无需支付任何费用</p>
        
      </div>

    </div> -->

    <div  @click="queren" class="bottom">
      <div>确认</div>
    </div>
  </div>
</template>
<script>
import {Toast} from 'vant'
import request from "@/utils/request";
export default {
  data() {
    return {
      aa:0,
      quanbu:false,
      activeindex: -1,
      fullheight: document.documentElement.clientHeight,
      id: 0,
      carid: 0,
      planid: 0,
      userid: 0,
      show: true,
      showquan:[],
      showinfo: [],
      xianshi: false
    };
  },
  methods: {
    // 全款购车
    quankuan(){
      this.planid = this.showquan[0].Id;
      this.carid = this.showquan[0].CarId;
 request
        .post(this.$api+"/Wechat/AddSaleOrder", {
          Id: this.id,
          CarId: this.carid,
          UserId: this.userid,
          PurchasePlanId: this.planid,
          SaleCount: 1,
          Type: 1,
          Status: 1
        })
        .then(res => {
          this.$router.push({
            path: "/dingjin",
            query: {
              userid: this.userid,
              carid: this.carid,
              planid: this.planid
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击确认按钮，传递id生成订单
    queren() {
 if(this.aa !=1){
   Toast('请选择金融方案')
 }else{
request
        .post(this.$api+"/Wechat/AddSaleOrder", {
          Id: this.id,
          CarId: this.carid,
          UserId: this.userid,
          PurchasePlanId: this.planid,
          SaleCount: 1,
          Type: 1,
          Status: 1
        })
        .then(res => {
          this.$router.push({
            path: "/dingjin",
            query: {
              userid: this.userid,
              carid: this.carid,
              planid: this.planid
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
 }

      
    },
    getplanlist() {
      request
        .post(this.$api+"/Wechat/GetPurchasePlanlist", {
          id: this.id
        })
        .then(res => {
          // console.log(res.data.Data.list);
          // this.showinfo = res.data.Data.list;
          var arr=res.data.Data.list;
          arr.forEach(item => {
              console.log(item)
              if(item.MonthPay==0 && item.Month==0){
                this.showquan.push(item);
                this.quanbu=true;
              }else if(item.MonthPay !=0 || item.Month != 0){
                this.showinfo.push(item)
                
              }
          });
          console.log(this.showquan)
          console.log(this.showinfo)
        })
        .catch(err => {
          console.log(err);
        });
    },
    xuanze(index) {
      this.aa=1;
      this.activeindex = index;
      this.planid = this.showinfo[index].Id;
      this.carid = this.showinfo[index].CarId;

     
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    // 获取userid
    getuserid() {
      request
        .post(this.$api+"/Wechat/CarDetail", {
          id: this.id
        })
        .then(res => {
          // console.log('uuuu'+res.data.Data.info.UserId);
          this.userid = res.data.Data.info.UserId;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$refs.certy.style.minHeight = this.fullheight + "px";
    this.id = this.$route.query.id;
    // console.log(this.id)
    this.getplanlist();
    this.getuserid();
  }
};
</script>
<style scoped>
.wenben {
  width: 92%;
  height:65rem;
  margin: 0 auto;
  background: #ffffff;
}
.wenbentitle {
  font-size: 16px;
  font-weight: 500;
}
.wenbenmain {
  font-size: 14px;
  color: #666666;
}
.ptop {
  margin: 0;
  font-size: 20px;
  color: red;
}
.pbottom {
  margin: 0;
  font-size: 14px;
  color: #666666;
}
.van-nav-bar__left ::before {
  color: black;
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
  font-size: 15px;
}
.zhifu {
  width: 70%;
  height: 1.5rem;
  margin: 0.8rem auto;
  font-size: 16px;
  line-height: 1.5rem;
  background: #ffa23e;
  text-align: center;
  border-radius: 20px;
}
.shoufu {
  font-size: 14px;
  color: #666666;
  margin-left: 1.3rem;
  overflow: hidden;
  box-sizing: border-box;
}
.shoufuimg {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 0;
  border-top-right-radius: 10px;
  background: url("../assets/images/d5f1c7fd0ffbe050b62a570a1c675a5.png")
    no-repeat;
  background-size: 100% 100%;
}
.shoufuone {
  position: relative;
  width: 80%;
  height: 3rem;
  background: #f5f5f5;
  margin:.5rem auto;
  border-radius: 15px;
  border: 1px solid #f5f5f5;
  display: flex;
}
.shoufuactive {
  position: relative;
  width: 80%;
  height: 3rem;
  background: #f5f5f5;
  margin: 1rem auto;
  border-radius: 15px;
  border: 1px solid red;
  display: flex;
}
.shoufuleft {
  width: 33%;
  height: 2rem;
  margin-top: 0.5rem;
  text-align: center;
}
.shoufumiddle {
  width: 33%;
  height: 2rem;
  margin-top: 0.5rem;
  text-align: center;
}
.shoufuright {
  width: 33%;
  height: 2rem;
  margin-top: 0.5rem;
  text-align: center;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background: #ffffff;
}
.bottom > div {
  width: 70%;
  height: 1.6rem;
  line-height: 1.6rem;
  background: #ffa23e;
  margin: 0.2rem auto;
  font-size: 15px;
  text-align: center;
  border-radius: 20px;
}
</style>