<template>
  <div>
    <!-- 头部 -->
    <div style="position: fixed;
  top: 0;
  z-index: 1000;width:100%;background:#ffffff;height:1.7rem;;">
      <div class="head">
       <span class="topspan" @click="showpopup">
          <span style="font-size:12px;margin:auto">{{choosename | diqu}}</span>
        </span>
        <!-- <van-search class="inputbox" shape="round" v-model="value" @click="search"/> -->
        <input type="text" class="inputbox" v-model="value" @click="searchershou" placeholder="搜索更多好车">

        <i @click="fuwu" style="font-szie:18px;margin-top:0.5rem;margin-left:0.6rem" class="iconfont">&#xe605;</i>
      </div>
    </div>
    <div style="width:100%;height:1.7rem;background:#ffffff;"></div>
    <!-- 标签 -->
     <div class="tabbarr" ref="ull">
      <div class="tabbarrul"   @click="toptu1">
        
        <div class="sonone">0首付</div>
        <div class="sontwo">首付低至0元</div>
      </div>
      <div class="tabbarrultwo" @click="toptu2">
<div class="sonone">热门SUV</div>
        <div class="sontwo">城市越野</div>
      </div>
      <div class="tabbarrulthree" @click="toptu3">
<div class="sonone">高档车</div>
        <div class="sontwo">高品质面子足</div>
      </div>
      <div class="tabbarrulfour" @click="toptu4">
<div class="sonone">自驾游</div>
        <div class="sontwo">越野车性能王</div>
      </div>
    </div>
    <!-- <div style="clear:both"></div> -->
    <!-- 主体 -->
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
        <li @click="$router.push('/usedxuan')">
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

<!-- 蒙曾 -->

    <!-- 内容 -->
     <!-- <div v-if="this.usedcarlist==''" style="font-size:14px;color:#666666;text-align:center;margin-top:2rem">
        暂时没数据...
       </div> -->
    <ul class="newcarcontent">
             <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
      <li class="newcarlist">
         <div v-for="(i,index) in usedcarlist" :key="index"  @click="tomore(i.Id)" class="newcarlist-content"      >
            <img :src="'http://www.lliangche.com/'+i.BannerImg" class="newcarlist-left" alt="">
            <div class="newcarlist-right">
               <p style="font-size:14px;font-weight:700">{{i.Name}}<span>{{i.CarModel}}</span></p>
               <p style="font-size:12px;color:#666666;">{{i. ManufactureDate}}月 | {{i.CarUserNumber}}公里</p>
               <p  v-for="(item,index) in i.PurchasePlanList.slice(0,1)" :key="index" style="font-size:16px;color:red ">首付<span style="font-size:20px">{{item.FirstPayment}}</span>万<span>  月供{{item.MonthPay}}元</span></p>
               <p style="font-size:16px;">
              <span class="cartag" v-for="(t,index) in i.TagNameList.slice(0,3)" :key="index">{{t}}</span>
            </p>

            </div>
          </div>
      </li>
             </van-list>
    </ul>

    <!-- 底部 -->
    <van-tabbar v-model="active" active-color="#ffb936">
      <van-tabbar-item :replace=true to="/">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item :replace=true to="/newcar">
        <span>新车</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.second : icon.secondtwo">
      </van-tabbar-item>
      <van-tabbar-item :replace=true to="/usedcar">
        <span>二手车</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.three: icon.threetwo">
      </van-tabbar-item>
      <van-tabbar-item :replace=true to="/main">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.four : icon.fourtwo">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  data() {
    return {
         page:1,
       loading: false,
      finished: false,
      name:'',
      choosename:'',
         shaixuantitle: "筛选",
      morentitle: "默认",
      gengvalue:false,
      yuegongvalue:false,
      morenvalue: false,
      shoufuvalue: false,
      fullheight: document.documentElement.clientHeight,
      show: false,
      address:"",
      id:'',
      value: "",
      active: 2,
      icon: {
        normal: require("../assets/images/形状-1@2x.png"),
        active: require("../assets/images/形状-1-拷贝-2@2x.png"),
        second: require("../assets/images/形状-2-拷贝-2@2x.png"),
        secondtwo: require("../assets/images/形状-2@2x.png"),
        three: require("../assets/images/形状-3-拷贝-2@2x.png"),
        threetwo: require("../assets/images/形状-3@2x.png"),
        four: require("../assets/images/形状-4-拷贝-2@2x.png"),
        fourtwo: require("../assets/images/形状-4@2x.png")
      },
      usedcarlist: []
    };
  },
  filters:{
    
     diqu(value){
        if(value.length>3){
          return value.slice(0,3)
        }else{
          return value
        }
     }
  },
  methods: {
     fuwu(){
 window.location.href = 'https://www16.53kf.com/m.php?kf_sign=TI5MTMTU1Oc5NDExMjQzMzY0ODgxMDA1NzIxMzQwNzY%3D&cid=72134076&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=0fd2a4c029cf14ee9e8f2b159a599573&u_stat_id=&talktitle=Document&tfrom=50&device=&zdkf_type=1&kf=&kflist=off'
// window.location.href="https://www5.53kf.com/m.php?kf_sign=TI4ODMTU1OI4OTExMjQzMzY0ODgxMDA1NjI3MjE2NTk%3D&cid=62721659&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=1b08c0fadd8afac0ca716e0ffa57256f&u_stat_id=&talktitle=Document&tfrom=51&device=&zdkf_type=1&kf=zlpxm1%40126.com&kflist=off&is_minchat=1&historylen=10&locahref=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&fromopen=1#http://localhost:8080/static/kefu.html"
    },
    // 顶部图点击事件
    toptu1(){
       request
        .post(this.$api+"/Wechat/GetTagCarList", {
          Type:2,
          TagId:118
        })
        .then(res => {
         this.usedcarlist=res.data.Data.list
        })
        .catch(err => {});
    },
       toptu2(){
       request
        .post(this.$api+"/Wechat/GetTagCarList", {
          Type:2,
          TagId:354
        })
        .then(res => {
          this.usedcarlist=res.data.Data.list
        })
        .catch(err => {});
    },
       toptu3(){
       request
        .post(this.$api+"/Wechat/GetTagCarList", {
           Type:2,
          TagId:351
        })
        .then(res => {
          this.usedcarlist=res.data.Data.list
        })
        .catch(err => {});
    },
       toptu4(){
       request
        .post(this.$api+"/Wechat/GetTagCarList", {
           Type:2,
          TagId:355
        })
        .then(res => {
         this.usedcarlist=res.data.Data.list
        })
        .catch(err => {});
    },
     showpopup() {
      this.$router.push('/showpopup')

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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {})
        .then(res => {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
          BrandId: this.id,
          Sort: "QuantitySold",
          Order: "desc"
        })
        .then(res => {
          this.onelist = res.data.Data.list;
        })
        .catch(err => {});
    },
    // onesix() {
    //   this.$refs.onesix.style.color = "#feef5e";
    //   this.$refs.onetwo.style.color = "black";
    //   this.$refs.onethree.style.color = "black";
    //   this.$refs.onefour.style.color = "black";
    //   this.$refs.onefive.style.color = "black";
    //   this.$refs.oneone.style.color = "black";
    //   this.morenvalue = false;
    //   this.show = false;
    //   this.morentitle = "月供最低";
    //    request.post(this.$api+"/GetNewCarList",{

    //   }).then(res=>{

    //   }).catch(err=>{

    //   })
    // },

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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
        .post(this.$api+"/Wechat/GetSecondHandCarList", {
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
      this.yuegongvalue=false
      this.gengvalue=false
    },

    mengcengone() {
      this.show = false;
      this.morenvalue = false;
      this.shoufuvalue = false;
      this.yuegongvalue=false
      this.gengvalue=false
    },

    showmoren() {
       this.$refs.ull.style.display='none'
      if(this.show==true&&this.morenvalue!==true){
        this.shoufuvalue = false;
        this.yuegongvalue=false
        this.gengvalue=false
          this.morenvalue =true
      }else if(this.show==true&&this.morenvalue==true){
        this.morenvalue=false;
        this.show=false
      }
      else{
      this.morenvalue = !this.morenvalue;
      this.show = !this.show;
      }
     
      // this.$refs.paging.style.height = this.fullheight + "px";
    },
    showfu() {
       this.$refs.ull.style.display='none'
      if (this.show==true&&this.shoufuvalue!==true) {
        this.morenvalue = false;
        this.yuegongvalue=false
        this.gengvalue=false
        this.shoufuvalue = true;
      }else if(this.show==true&&this.shoufuvalue==true){
        this.shoufuvalue=false;
        this.show=false
      }
      else {
        this.shoufuvalue = !this.shoufuvalue;
        this.show = !this.show;
      }
    },
    showyue(){
       this.$refs.ull.style.display='none'
    if (this.show == true&&this.yuegongvalue!==true) {
        this.morenvalue = false;
        this.shoufuvalue =false;
        this.gengvalue=false
        this.yuegongvalue=true
      } 
      else if(this.show==true&&this.yuegongvalue==true){
        this.yuegongvalue=false;
        this.show=false
      }
      else {
        this.yuegongvalue = !this.yuegongvalue;
        this.show = !this.show;
      }
    },
    showgeng(){
       this.$refs.ull.style.display='none'
          if (this.show == true&&this.gengvalue!==true) {
        this.morenvalue = false;
        this.shoufuvalue =false;
        this.yuegongvalue=false
        this.gengvalue=true
      } 
       else if(this.show==true&&this.gengvalue==true){
        this.gengvalue=false;
        this.show=false
      }
      else {
        this.gengvalue = !this.gengvalue;
        this.show = !this.show;
      }
    },


    xiaoshi(){
       this.$refs.ull.style.display='none'
    },


    // 搜索框点击
    searchershou() {
      this.$router.push("/searchershou");
    },
  onLoad() {
      // 异步更新数据
     
         this.page+=1
        this.getusedcar()
     }
      ,

    getusedcar() {
       request
          .post(this.$api+"/Wechat/GetSecondHandCarList", {
            page: this.page,
            rows:5
          })
          .then(res => {
        
            this.loading=false;
          if(res.data.Data.list.length){
            var arr=res.data.Data.list
                for(let i=0;i<arr.length;i++){
                  this.usedcarlist.push(arr[i])
                }
          }else{
            this.finished=true
          }
          })
          .catch(err => {
            console.log(err);
          });
    },
    getusedcarbyid(){
 request
          .post(this.$api+"/Wechat/GetSecondHandCarList", {
           BrandId:this.brandid,
            page:this.page,
            rows: 5
          })
          .then(res => {
         
           this.loading=false;
          if(res.data.Data.list.length){
            var arr=res.data.Data.list
                for(let i=0;i<arr.length;i++){
                  this.usedcarlist.push(arr[i])
                }
          }else{
            this.finished=true
          }
          })
          .catch(err => {
            console.log(err);
          });
    },
       getusedcarbyname(){
 request
          .post(this.$api+"/Wechat/GetSecondHandCarList", {
           Name:this.name,
            page: this.page,
            rows: 5
          })
          .then(res => {
             this.loading=false;
          if(res.data.Data.list.length){
            var arr=res.data.Data.list
                for(let i=0;i<arr.length;i++){
                  this.usedcarlist.push(arr[i])
                }
          }else{
            this.finished=true
          }
          })
          .catch(err => {
            console.log(err);
          });
    },
     tomore(id){
      this.$router.push({
        path:`/particulars/${id}`
      })
    }
  },
  created() {
     this.brandid = this.$route.query.BrandId;
     this.name=this.$route.query.name
     console.log('id'+this.brandid)
     console.log('name'+this.name)
    if(this.name==undefined){
      this.getusedcarbyid()
    }else if(this.brandid==undefined){
      this.getusedcarbyname()
    }else if(this.name==undefined&&this.brandid==undefined){
       this.getusedcar() 
    }
   
  }
  ,mounted(){
     this.$refs.paging.style.height = this.fullheight + "px";
      if(window.localStorage.getItem('name')==null){
      this.choosename='地区'
    }else{
      this.choosename= window.localStorage.getItem('name')
    }
  }
};
</script>
<style scoped>
/* 蒙曾 */

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

/* 头部 */
.topspan{
  /* display: flex; */
  display: inline-block;
  width: 13%;
}
.head {
  display: flex;
  width: 90%;
  height: 1.5rem;
  margin: 0 auto;
  /* border: 1px solid red; */
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
.van-search {
  height: 1.7rem !important;
  padding: 0 !important;
}
/* 标签 */
.tabbarr {
  width: 100%;
  height: 9rem;
  
   display: flex;
  flex-wrap: wrap;
}
.tabbarrul {
  position: relative;
 background-size: 100% 100%;
  width: 50%;
  height:4.5rem;
  background: url('../assets/images/21.png') no-repeat
}
.sonone{
position: absolute;
top: .3rem;
left: .4rem;
font-size: 18px;
font-weight:550;
}
.sontwo{
position: absolute;
top: 1.5rem;
left: .4rem;
color: silver;
font-size: 14px;
font-weight: 500;
}
.tabbarrultwo{
 position: relative;
  background-size: 100% 100%;
  width: 50%;
  height:4.5rem;
  background: url('../assets/images/22.png') no-repeat
}
.tabbarrulthree{
   position: relative;
  background-size: 100% 100%;
  width: 50%;
  height:4.5rem;
  background: url('../assets/images/23.png') no-repeat
}
.tabbarrulfour{
   position: relative;
   background-size: 100% 100%;
  width: 50%;
  height:4.5rem;
  background: url('../assets/images/24.png') no-repeat
}
/* 主体 */
.newcartop{
   width: 100%;
  height: 1.7rem;
  background-color: #ffffff;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
    position: -webkit-sticky;
  position: sticky;
  top:1.7rem;
   z-index: 122;
}
.newcartopul{
width: 90%;
height: 1.7rem;
margin: 0 auto;
display: flex;

}
.newcartopul li{
  width: 25%;
  text-align: center;
}

.newcartopul li span{
  font-size: 12px;
}

/* 内容 */
.newcarcontent{
 margin-bottom: 2.1rem;
  background-color: #ffffff;
}
.newcarlist{
  width: 100%;
  /* height: 9rem; */
  
}
.newcarlist-content{
  width: 100%;
  height: 5rem;
  margin: 0rem auto;
  display: flex;
  padding:0.6rem 0rem;
  
   
  border-bottom: 1px solid silver;
}
.newcarlist-left{
  display: inline-block;
  width: 38%;
  height: 3.6rem;
  margin-top: .7rem;
  /* margin-left: 0.6rem; */
 background-size: 100% 100%;
}
.newcarlist-right{
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 53%;
  height: 5rem;
  /* background-color: aquamarine; */

}
.newcarlist-right p{
  margin:0 0 0 .5rem;
}
.cartag{
   display: inline-block;
  width: 2.3rem;
  height: 0.7rem;
  line-height:0.7rem;
  text-align: center;
  font-size: 10px;
  border: 1px solid red;
  color: red;
  border-radius: 10px;
  margin-right: 0.1rem;
}
</style>