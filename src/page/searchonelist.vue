<template>
  <div>
      <i @click="onleft" style="position:fixed;top:.5rem;left:.5rem;color:black;z-index:333333;" class="iconfont">&#xe60b;</i>
    <div class="head" @click="headd">
    
      <span @click="onleft">
        <span class="left"></span>
      </span>
      <i class="iconfont">&#xe7de;</i>
      <input @click="dianji" ref="username" class="inputbox" placeholder="限量抢" v-model="value">
    </div>
    <div style="width:100%;height:3.4rem;"></div>
    <!-- 身体 -->
    <div class="newcartop">
      <ul class="newcartopul">
        <li @click="showmoren" ref="morenpaixu">
          <span>{{morentitle}}</span>
          <span class="iconfont">&#xe606;</span>
        </li>
        <li @click="showfu" ref="shoufu">
          <span>首付</span>
          <span class="iconfont">&#xe606;</span>
        </li>
        <li @click="showyue" ref="yuegong">
          <span>月供</span>
          <span class="iconfont">&#xe606;</span>
        </li>
        <li @click="$router.push('/listxuan')">
          <span>品牌</span>
          <span class="iconfont">&#xe606;</span>
        </li>
        <li @click="showgeng" ref="shaixuan">
          <span>{{shaixuantitle}}</span>
          <span class="iconfont">&#xe606;</span>
        </li>
      </ul>
    </div>
    <!-- 蒙曾 -->
    <div @click="mengcengone" v-show="show" class="morenshaixuan" ref="paging" style="width:100%"></div>
    <!-- 默认value. -->
    <transition name="slider">
      <div class="morenvalue" v-show="morenvalue">
        <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div ref="oneone" @click="oneone"
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >默认</div>
        </div>
        <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div ref="onetwo"  @click="onetwo"
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >车价最低</div>
        </div>
        <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div ref="onethree"  @click="onethree"
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >车价最高</div>
        </div>
         <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div ref="onefour" @click="onefour "
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >销量最低</div>
        </div>
         <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div ref="onefive" @click="onefive"
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >销量最高</div>
        </div>
        <div style="width:100%;height:1rem;background:#feef5e;z-index:30"></div>
      </div>
    </transition>

    <!-- 首付 -->
    <transition name="slider">
      <div class="shoufuvalue" v-show="shoufuvalue">
        <div class="shoufuson" ref="twoone" @click="twoone">不限</div>
        <div class="shoufuson" ref="twotwo" @click="twotwo">一万以下</div>
        <div class="shoufuson" ref="twothree" @click="twothree">1-2万</div>
        <div class="shoufuson" ref="twofour" @click="twofour">2-3万</div>
        <div class="shoufuson" ref="twofive" @click="twofive">3-4万</div>
        <div class="shoufuson" ref="twosix" @click="twosix">4万以上</div>
        <div style="width:100%;height:1rem;background:#feef5e;z-index:30"></div>
      </div>
    </transition>

    <!-- 月供 -->
    <transition name="slider">
      <div class="shoufuvalue" v-show="yuegongvalue">
        <div class="shoufuson" ref="threeone" @click="threeone">不限</div>
        <div class="shoufuson" ref="threetwo" @click="threetwo">2000以内</div>
        <div class="shoufuson" ref="threethree" @click="threethree">2000-3000元</div>
        <div class="shoufuson" ref="threefour" @click="threefour">3000-4000元</div>
        <div class="shoufuson" ref="threefive" @click="threefive">4000-5000元</div>
        <div class="shoufuson" ref="threesix" @click="threesix">5000以上</div>
        <div style="width:100%;height:1rem;background:#feef5e;z-index:30"></div>
      </div>
    </transition>

    <!-- 更多 -->
    <transition name="slider">
      <div class="gengduovalue" v-show="gengvalue">
        <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div
            @click="fiveone"
            ref="fiveone"
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >汽油</div>
        </div>
        <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div
            @click="fivetwo"
            ref="fivetwo"
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >油电混合</div>
        </div>
        <div class="yihang">
          <div style="width:5%;height:1.7rem;display: inline-block;"></div>
          <div
            @click="fivethree"
            ref="fivethree"
            style="width:95%;height:1.7rem;line-height:1.7rem;display: inline-block;font-size:16px;border-bottom:1px solid #e6e6e6"
          >柴油</div>
        </div>

        <div style="width:100%;height:1rem;background:#feef5e;z-index:30"></div>
      </div>
    </transition>
    <!-- 主题 -->


    <ul  class="newcarcontent">
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>

      <li class="newcarlist">
        <div
          v-for="(i,index) in onelist"
          :key="index"
          @click="tomore(i.Id)"
          class="newcarlist-content"
        >
          <img :src="'http://www.lliangche.com/'+i.BannerImg" class="newcarlist-left" alt>
          <div class="newcarlist-right">
            <p style="font-size:14px;font-weight:700">
              {{i.Name}}
              <span>{{i.CarModel}}</span>
            </p>

   <p class="car-piece"  style="color:red;margin-top:0.1rem;font-size:15px;margin-left:1.6rem">优惠价:<span style="font-size:22px">{{i.InsidePrice| xiaoshu}}</span>万</p>
            <p class="car-month"  style="color:#666666;margin-top:0.1rem;font-size:12px">指导价:{{i.GuidePrice| xiaoshu}}万<span style="margin-left:.6rem;color:black">↓{{i.GuidePrice-i.InsidePrice | xiaoshu}}万</span></p>
            <!-- <p
              v-for="(item,index) in i.PurchasePlanList.slice(0,1)"
              :key="index"
              style="font-size:16px;color:red "
            >
              首付
              <span style="font-size:20px">{{item.FirstPayment}}</span>万
              <span>月供{{item.MonthPay}}元</span>
            </p> -->
            <p style="font-size:16px;">
              <span class="cartag" v-for="(t,index) in i.TagNameList.slice(0,3)" :key="index">{{t}}</span>
            </p>
          </div>
        </div>
      </li>
       </van-list>
    </ul>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      name:'',
       loading: false,
      finished: false,
      shaixuantitle: "筛选",
      morentitle: "默认",
      page: 1,
      gengvalue: false,
      yuegongvalue: false,
      morenvalue: false,
      shoufuvalue: false,
      fullheight: document.documentElement.clientHeight,
      show: false,
      id: "",
      value: "",
      onelist: [],
      showinfo: []
    };
  },
   filters:{
        xiaoshu(value) {
     if(value<10){
       return '0'+ value.toFixed(2)
     }
      return value.toFixed(2);

    },
    carmodel(val){
     if(val.length>10){
       return val.slice(0,10) + '...'
     }else{
       return val
     }}
    
  },
  methods: {
    // 异步加载数据
     onLoad() {
      // 异步更新数据
     
         this.page+=1

          if(this.id==undefined){
this.gettwolist();
    }else{
 this.getonelist();
    }
        // 加载状态结束
       

        // 数据全部加载完成
        // if (this.getonelist.length >= 40) {
        //   this.finished = true;
        // }
     
    },
 
    dianji() {
      this.$router.push("/search");
    },
    // 请求点击事件one系列
    oneone() {
      this.$refs.oneone.style.color = "#feef5e";
      this.$refs.onetwo.style.color = "black";
      this.$refs.onethree.style.color = "black";
      this.$refs.onefour.style.color = "black";
      this.$refs.onefive.style.color = "black";
      this.morenvalue = false;
      this.show = false;
      this.morentitle = "默认";
      request
        .post(this.$api+"/Wechat/GetNewCarList", {})
        .then(res => {
          this.page=1
          this.getonelist();
        })
        .catch(err => {});
    },
    onetwo() {
      this.$refs.onetwo.style.color = "#feef5e";
      this.$refs.oneone.style.color = "black";
      this.$refs.onethree.style.color = "black";
      this.$refs.onefour.style.color = "black";
      this.$refs.onefive.style.color = "black";

      this.morenvalue = false;
      this.show = false;
      this.morentitle = "车价最低";
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
          page:1,Rows:10,
          BrandId: this.id,
          Sort: "InsidePrice",
          Order: "asc"
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    onethree() {
      this.$refs.onethree.style.color = "#feef5e";
      this.$refs.onetwo.style.color = "black";
      this.$refs.oneone.style.color = "black";
      this.$refs.onefour.style.color = "black";
      this.$refs.onefive.style.color = "black";

      this.morenvalue = false;
      this.show = false;
      this.morentitle = "车价最高";
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          Sort: "InsidePrice",
          Order: "desc"
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    onefour() {
      this.$refs.onefour.style.color = "#feef5e";
      this.$refs.onetwo.style.color = "black";
      this.$refs.onethree.style.color = "black";
      this.$refs.oneone.style.color = "black";
      this.$refs.onefive.style.color = "black";

      this.morentitle = "销量最低";
      this.morenvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          Sort: "QuantitySold",
          Order: "ase"
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    onefive() {
      this.$refs.onefive.style.color = "#feef5e";
      this.$refs.onetwo.style.color = "black";
      this.$refs.onethree.style.color = "black";
      this.$refs.onefour.style.color = "black";
      this.$refs.oneone.style.color = "black";

      this.morenvalue = false;
      this.show = false;
      this.morentitle = "销量最高";
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          Sort: "QuantitySold",
          Order: "desc"
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    // 请求点击事件two系列
    twoone() {
      this.$refs.twoone.style.background = "#fff9e6";
      this.$refs.twoone.style.border = "1px solid #fec400";
      this.$refs.twotwo.style.background = "#f5f5f5";
      this.$refs.twotwo.style.border = "1px solid #f5f5f5";
      this.$refs.twothree.style.background = "#f5f5f5";
      this.$refs.twothree.style.border = "1px solid #f5f5f5";
      this.$refs.twofour.style.background = "#f5f5f5";
      this.$refs.twofour.style.border = "1px solid #f5f5f5";
      this.$refs.twofive.style.background = "#f5f5f5";
      this.$refs.twofive.style.border = "1px solid #f5f5f5";
      this.$refs.twosix.style.background = "#f5f5f5";
      this.$refs.twosix.style.border = "1px solid #f5f5f5";
      this.shoufuvalue = false;
      this.show = false;
      this.page=1
      this.getonelist();
    },
    twotwo() {
      this.$refs.twotwo.style.background = "#fff9e6";
      this.$refs.twotwo.style.border = "1px solid #fec400";
      this.$refs.twoone.style.background = "#f5f5f5";
      this.$refs.twoone.style.border = "1px solid #f5f5f5";
      this.$refs.twothree.style.background = "#f5f5f5";
      this.$refs.twothree.style.border = "1px solid #f5f5f5";
      this.$refs.twofour.style.background = "#f5f5f5";
      this.$refs.twofour.style.border = "1px solid #f5f5f5";
      this.$refs.twofive.style.background = "#f5f5f5";
      this.$refs.twofive.style.border = "1px solid #f5f5f5";
      this.$refs.twosix.style.background = "#f5f5f5";
      this.$refs.twosix.style.border = "1px solid #f5f5f5";
      this.shoufuvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          FirstPaymentStart: 0,
          FirstPaymentEnd: 1
        })
        .then(res => {
          this.onelist = res.data.Data.list;
          // 此处做处理
        })
        .catch(err => {});
    },
    twothree() {
      this.$refs.twothree.style.background = "#fff9e6";
      this.$refs.twothree.style.border = "1px solid #fec400";
      this.$refs.twoone.style.background = "#f5f5f5";
      this.$refs.twoone.style.border = "1px solid #f5f5f5";
      this.$refs.twotwo.style.background = "#f5f5f5";
      this.$refs.twotwo.style.border = "1px solid #f5f5f5";
      this.$refs.twofour.style.background = "#f5f5f5";
      this.$refs.twofour.style.border = "1px solid #f5f5f5";
      this.$refs.twofive.style.background = "#f5f5f5";
      this.$refs.twofive.style.border = "1px solid #f5f5f5";
      this.$refs.twosix.style.background = "#f5f5f5";
      this.$refs.twosix.style.border = "1px solid #f5f5f5";
      this.shoufuvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          FirstPaymentStart: 1,
          FirstPaymentEnd: 2
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    twofour() {
      this.$refs.twofour.style.background = "#fff9e6";
      this.$refs.twofour.style.border = "1px solid #fec400";
      this.$refs.twoone.style.background = "#f5f5f5";
      this.$refs.twoone.style.border = "1px solid #f5f5f5";
      this.$refs.twothree.style.background = "#f5f5f5";
      this.$refs.twothree.style.border = "1px solid #f5f5f5";
      this.$refs.twotwo.style.background = "#f5f5f5";
      this.$refs.twotwo.style.border = "1px solid #f5f5f5";
      this.$refs.twofive.style.background = "#f5f5f5";
      this.$refs.twofive.style.border = "1px solid #f5f5f5";
      this.$refs.twosix.style.background = "#f5f5f5";
      this.$refs.twosix.style.border = "1px solid #f5f5f5";
      this.shoufuvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          FirstPaymentStart: 2,
          FirstPaymentEnd: 3
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    twofive() {
      this.$refs.twofive.style.background = "#fff9e6";
      this.$refs.twofive.style.border = "1px solid #fec400";
      this.$refs.twoone.style.background = "#f5f5f5";
      this.$refs.twoone.style.border = "1px solid #f5f5f5";
      this.$refs.twothree.style.background = "#f5f5f5";
      this.$refs.twothree.style.border = "1px solid #f5f5f5";
      this.$refs.twotwo.style.background = "#f5f5f5";
      this.$refs.twotwo.style.border = "1px solid #f5f5f5";
      this.$refs.twofour.style.background = "#f5f5f5";
      this.$refs.twofour.style.border = "1px solid #f5f5f5";
      this.$refs.twosix.style.background = "#f5f5f5";
      this.$refs.twosix.style.border = "1px solid #f5f5f5";
      this.shoufuvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          FirstPaymentStart: 3,
          FirstPaymentEnd: 4
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    twosix() {
      this.$refs.twosix.style.background = "#fff9e6";
      this.$refs.twosix.style.border = "1px solid #fec400";
      this.$refs.twoone.style.background = "#f5f5f5";
      this.$refs.twoone.style.border = "1px solid #f5f5f5";
      this.$refs.twothree.style.background = "#f5f5f5";
      this.$refs.twothree.style.border = "1px solid #f5f5f5";
      this.$refs.twotwo.style.background = "#f5f5f5";
      this.$refs.twotwo.style.border = "1px solid #f5f5f5";
      this.$refs.twofour.style.background = "#f5f5f5";
      this.$refs.twofour.style.border = "1px solid #f5f5f5";
      this.$refs.twofive.style.background = "#f5f5f5";
      this.$refs.twofive.style.border = "1px solid #f5f5f5";
      this.shoufuvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          FirstPaymentStart: 4
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    // 请求点击事件three系列
    threeone() {
      this.$refs.threeone.style.background = "#fff9e6";
      this.$refs.threeone.style.border = "1px solid #fec400";
      this.$refs.threetwo.style.background = "#f5f5f5";
      this.$refs.threetwo.style.border = "1px solid #f5f5f5";
      this.$refs.threethree.style.background = "#f5f5f5";
      this.$refs.threethree.style.border = "1px solid #f5f5f5";
      this.$refs.threefour.style.background = "#f5f5f5";
      this.$refs.threefour.style.border = "1px solid #f5f5f5";
      this.$refs.threefive.style.background = "#f5f5f5";
      this.$refs.threefive.style.border = "1px solid #f5f5f5";
      this.$refs.threesix.style.background = "#f5f5f5";
      this.$refs.threesix.style.border = "1px solid #f5f5f5";
      this.page=1;
      this.getonelist();
    },
    threetwo() {
      this.$refs.threetwo.style.background = "#fff9e6";
      this.$refs.threetwo.style.border = "1px solid #fec400";
      this.$refs.threeone.style.background = "#f5f5f5";
      this.$refs.threeone.style.border = "1px solid #f5f5f5";
      this.$refs.threethree.style.background = "#f5f5f5";
      this.$refs.threethree.style.border = "1px solid #f5f5f5";
      this.$refs.threefour.style.background = "#f5f5f5";
      this.$refs.threefour.style.border = "1px solid #f5f5f5";
      this.$refs.threefive.style.background = "#f5f5f5";
      this.$refs.threefive.style.border = "1px solid #f5f5f5";
      this.$refs.threesix.style.background = "#f5f5f5";
      this.$refs.threesix.style.border = "1px solid #f5f5f5";
      this.yuegongvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          MonthPayStart: 0,
          MonthPayEnd: 2000
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    threethree() {
      this.$refs.threethree.style.background = "#fff9e6";
      this.$refs.threethree.style.border = "1px solid #fec400";
      this.$refs.threeone.style.background = "#f5f5f5";
      this.$refs.threeone.style.border = "1px solid #f5f5f5";
      this.$refs.threetwo.style.background = "#f5f5f5";
      this.$refs.threetwo.style.border = "1px solid #f5f5f5";
      this.$refs.threefour.style.background = "#f5f5f5";
      this.$refs.threefour.style.border = "1px solid #f5f5f5";
      this.$refs.threefive.style.background = "#f5f5f5";
      this.$refs.threefive.style.border = "1px solid #f5f5f5";
      this.$refs.threesix.style.background = "#f5f5f5";
      this.$refs.threesix.style.border = "1px solid #f5f5f5";
      this.yuegongvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          MonthPayStart:2000,
          MonthPayEnd:3000
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    threefour() {
      this.$refs.threefour.style.background = "#fff9e6";
      this.$refs.threefour.style.border = "1px solid #fec400";
      this.$refs.threeone.style.background = "#f5f5f5";
      this.$refs.threeone.style.border = "1px solid #f5f5f5";
      this.$refs.threethree.style.background = "#f5f5f5";
      this.$refs.threethree.style.border = "1px solid #f5f5f5";
      this.$refs.threetwo.style.background = "#f5f5f5";
      this.$refs.threetwo.style.border = "1px solid #f5f5f5";
      this.$refs.threefive.style.background = "#f5f5f5";
      this.$refs.threefive.style.border = "1px solid #f5f5f5";
      this.$refs.threesix.style.background = "#f5f5f5";
      this.$refs.threesix.style.border = "1px solid #f5f5f5";
      this.yuegongvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          MonthPayStart: 3000,
          MonthPayEnd: 4000
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    threefive() {
      this.$refs.threefive.style.background = "#fff9e6";
      this.$refs.threefive.style.border = "1px solid #fec400";
      this.$refs.threeone.style.background = "#f5f5f5";
      this.$refs.threeone.style.border = "1px solid #f5f5f5";
      this.$refs.threethree.style.background = "#f5f5f5";
      this.$refs.threethree.style.border = "1px solid #f5f5f5";
      this.$refs.threetwo.style.background = "#f5f5f5";
      this.$refs.threetwo.style.border = "1px solid #f5f5f5";
      this.$refs.threefour.style.background = "#f5f5f5";
      this.$refs.threefour.style.border = "1px solid #f5f5f5";
      this.$refs.threesix.style.background = "#f5f5f5";
      this.$refs.threesix.style.border = "1px solid #f5f5f5";
      this.yuegongvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
            page:1,Rows:10,
          BrandId: this.id,
          MonthPayStart:4000,
          MonthPayEnd:5000
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    threesix() {
      this.$refs.threesix.style.background = "#fff9e6";
      this.$refs.threesix.style.border = "1px solid #fec400";
      this.$refs.threeone.style.background = "#f5f5f5";
      this.$refs.threeone.style.border = "1px solid #f5f5f5";
      this.$refs.threethree.style.background = "#f5f5f5";
      this.$refs.threethree.style.border = "1px solid #f5f5f5";
      this.$refs.threetwo.style.background = "#f5f5f5";
      this.$refs.threetwo.style.border = "1px solid #f5f5f5";
      this.$refs.threefour.style.background = "#f5f5f5";
      this.$refs.threefour.style.border = "1px solid #f5f5f5";
      this.$refs.threefive.style.background = "#f5f5f5";
      this.$refs.threefive.style.border = "1px solid #f5f5f5";
      this.yuegongvalue = false;
      this.show = false;
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
          Page:1,
          Rows:10,
          BrandId: this.id,
          MonthPayStart:5000
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    // 请求点击事件five系列
    fiveone() {
      this.$refs.fiveone.style.color = "#feef5e";
      this.$refs.fivetwo.style.color = "black";
      this.$refs.fivethree.style.color = "black";

      this.gengvalue = false;
      this.show = false;
      this.shaixuantitle = "汽油";
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
          Page:1,
          Rows:10,
          EnergyType: "汽油",
          BrandId: this.id
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    fivetwo() {
      this.$refs.fivetwo.style.color = "#feef5e";
      this.$refs.fiveone.style.color = "black";
      this.$refs.fivethree.style.color = "black";

      this.gengvalue = false;
      this.show = false;
      this.shaixuantitle = "油电混合";
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
          Page:1,
          Rows:10,
          EnergyType: "油电混合",
          BrandId: this.id
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    fivethree() {
      this.$refs.fivethree.style.color = "#feef5e";
      this.$refs.fivetwo.style.color = "black";
      this.$refs.fiveone.style.color = "black";

      this.gengvalue = false;
      this.show = false;
      this.shaixuantitle = "柴油";
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
          Page:1,
          Rows:10,
          EnergyType: "柴油",
          BrandId: this.id
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    headd() {
      this.show = false;
      this.morenvalue = false;
      this.shoufuvalue = false;
      this.yuegongvalue = false;
      this.gengvalue = false;
    },

    mengcengone() {
      this.show = false;
      this.morenvalue = false;
      this.shoufuvalue = false;
      this.yuegongvalue = false;
      this.gengvalue = false;
    },

    showmoren() {
      //  this.$refs.morenpaixu.style.color='#feef5e'
      //  this.$refs.morenpaixutwo.style.color='#feef5e'

      if (this.show == true && this.morenvalue !== true) {
        this.shoufuvalue = false;
        this.yuegongvalue = false;
        this.gengvalue = false;
        this.morenvalue = true;
      } else if (this.show == true && this.morenvalue == true) {
        this.morenvalue = false;
        this.show = false;
      } else {
        this.morenvalue = !this.morenvalue;
        this.show = !this.show;
      }

      // this.$refs.paging.style.height = this.fullheight + "px";
    },
    showfu() {
      if (this.show == true && this.shoufuvalue !== true) {
        this.morenvalue = false;
        this.yuegongvalue = false;
        this.gengvalue = false;
        this.shoufuvalue = true;
      } else if (this.show == true && this.shoufuvalue == true) {
        this.shoufuvalue = false;
        this.show = false;
      } else {
        this.shoufuvalue = !this.shoufuvalue;
        this.show = !this.show;
      }
    },

    showyue() {
      if (this.show == true && this.yuegongvalue !== true) {
        this.morenvalue = false;
        this.shoufuvalue = false;
        this.gengvalue = false;
        this.yuegongvalue = true;
      } else if (this.show == true && this.yuegongvalue == true) {
        this.yuegongvalue = false;
        this.show = false;
      } else {
        this.yuegongvalue = !this.yuegongvalue;
        this.show = !this.show;
      }
    },
    showgeng() {
      if (this.show == true && this.gengvalue !== true) {
        this.morenvalue = false;
        this.shoufuvalue = false;
        this.yuegongvalue = false;
        this.gengvalue = true;
      } else if (this.show == true && this.gengvalue == true) {
        this.gengvalue = false;
        this.show = false;
      } else {
        this.gengvalue = !this.gengvalue;
        this.show = !this.show;
      }
    },

    getonelist() {
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
          Page: this.page,
          Rows:10,
          BrandId: this.id
        })
        .then(res => {
          // console.log(res.data.Data.list);
          // this.onelist = res.data.Data.list;
          this.loading=false;
          if(res.data.Data.list.length){
            this.onelist=res.data.Data.list
          }else{
            this.finished=true
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    gettwolist(){
      request
        .post(this.$api+"/Wechat/GetNewCarList", {
          Page: this.page,
          Rows:10,
          Name: this.name
        })
        .then(res => {
          // console.log(res.data.Data.list);
          // this.onelist = res.data.Data.list;
          this.loading=false;
          if(res.data.Data.list.length){
            var arr=res.data.Data.list
                for(let i=0;i<arr.length;i++){
                  this.onelist.push(arr[i])
                }
          }else{
            this.finished=true
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onleft() {
      this.$router.back(-1);
    },
    tomore(id) {
      this.$router.push({
        path: `/particulars/${id}`
      });
    }
  },
  mounted() {
    this.$refs.paging.style.height = this.fullheight + "px";
    this.id = this.$route.query.BrandId;
    this.name=this.$route.query.name
    
   
    
    if(this.id==undefined){
this.gettwolist();
    }else{
 this.getonelist();
    }
  }
};
</script>
<style scoped>
.slider-enter-active,
.slider-leave-active {
  transition: all 0.6s;
}
.slider-enter,
.slider-leave-to {
  transform: translateY(-100%);
}

/* 蒙曾 */
.gengduovalue {
  width: 100%;
  /* height: 4.5rem; */
  position: fixed;
  top: 3.4rem;
  background: #ffffff;
  z-index: 30;
}
.morenvalue {
  width: 100%;
  /* height: 7rem; */
  position: fixed;
  top: 3.4rem;
  background: #ffffff;
  z-index: 30;
}
.shoufuvalue {
  width: 100%;
  /* height: 6rem; */
  position: fixed;
  top: 3.4rem;
  background: #ffffff;
  z-index: 30;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-content: space-around; */
}
.shoufuson {
  width: 30%;
  height: 1.4rem;
  line-height: 1.4rem;
  background: #f5f5f5;
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  border: 1px solid #f5f5f5;
}
.morenshaixuan {
  position: fixed;
  top: 0;
  width: 100%;
  height: 9rem;
  background: rgba(26, 24, 24, 0.849);
  opacity: 0.8;
  z-index: 12;
}
.yihang {
  width: 100%;
  height: 1.7rem;
  display: flex;
  /* z-index: 144; */
}
.head {
  /* position: relative; */
  display: flex;
  width: 100%;
  height: 1.7rem;
  margin: 0 auto;
  background: #ffffff;
  position: fixed;
  top: 0;
  z-index: 122;
  /* border: 1px solid red; */
}
.head i {
  position: fixed;
  left: 3rem;
  top: 0.3rem;
  font-size: 20px;
}
.left {
  display: inline-block;
  width: 2rem;
  height: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
}
.inputbox {
 display: inline-block !important;
  width: 70%;
  height: 0.9rem;
  margin-top: 0.3rem;
  border-radius: 20px;
  border: none;
  background:#f5f5f5;
  font-size: 12px;
  text-align: center;
}
/* 主体 */
.newcartop {
  position: fixed;
  top: 1.7rem;
  width: 100%;
  height: 1.7rem;
  background-color: #ffffff;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  z-index: 122;
}
.newcartopul {
  width: 90%;
  height: 1.7rem;
  margin: 0 auto;
  display: flex;
}
.newcartopul li {
  width: 25%;
  text-align: center;
}

.newcartopul li span {
  font-size: 12px;
}
.newcarcontent {
  /* margin-bottom: 3rem; */
  background-color: #ffffff;
}
.newcarlist {
  width: 100%;
  /* height: 9rem; */
}
.newcarlist-content {
  width: 100%;
  height: 5rem;
  margin: 0rem auto;
  display: flex;
  padding: 0.6rem 0rem;

  border-bottom: 1px solid silver;
}
.newcarlist-left {
  display: inline-block;
  width:38%;
  height: 3.6rem;
  margin-top: .7rem;
  /* margin-left: 0.6rem; */
  background-size: 100% 100%;
}
.newcarlist-right {
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  height: 5rem;
  /* background-color: aquamarine; */
}
.newcarlist-right p {
  margin: 0 0 0 0.5rem;
}
.cartag {
  display: inline-block;
  width: 2.8rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  font-size: 10px;
  border: 1px solid red;
  color: red;
  border-radius: 10px;
  margin-left: 0.1rem;
}
</style>