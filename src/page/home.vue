<template>
  <div>
   
    <!-- 头部搜索导航 -->
    <div
      id="toolbar"
      style="position: fixed;
  top: 0;
  color:#ffffff;
  z-index: 100;width:100%;height:1.5rem;;"
    >
      <div class="head">
        <span @click="showpopup" class="topspan">
          <span style="font-size:12px;" >{{choosename | diqu}}</span>
        </span>
        <input type="text" id="inputbox"  class="inputbox" v-model="value" @click="search" placeholder="搜索更多好车">
        <i @click="fuwu" style="margin-top:0.3rem;font-size:20px;margin-left:0.6rem" class="iconfont">&#xe605;</i>
        <!-- <i style="margin-top:0.3rem;font-size:22px;margin-left:0.5rem" class="iconfont" >&#xe623;</i> -->
      </div>
    </div>
   


  


 <van-pull-refresh :head-height="70" v-model="isLoading" @refresh="onRefresh">
    <!-- 轮播图 -->
    <van-swipe :height="200" :autoplay="3000" indicator-color="#ec9000">
      <van-swipe-item v-for="(item,index) in lunbotu" :key="index">
       <a :href="item.Url"><img style="width:100%;height:200px;background-size:100% 100%;" :src="item.Icon" alt></a> 
      </van-swipe-item>
    </van-swipe>

    <!-- 商标 -->
    <div class="brand">
      <div>
        <div class="brand-card" @click="$router.push('/newcar')">
          <img class="car-icon" src="../assets/images/汽车(1).png" alt>
          <p class="sort">量新车</p>
        </div>
        <div class="brand-card" @click="$router.push('/usedcar')">
          <img class="car-icon" src="../assets/images/二手车.png" alt>
          <p class="sort">二手车</p>
        </div>
        <div class="brand-card" @click="paging">
          <img class="car-icon" src="../assets/images/车商.png" alt>
          <p class="sort">量车商</p>
        </div>
        <div class="brand-card"  @click="fuwu">
          <img class="car-icon" src="../assets/images/客服[转换].png" alt>
          <p class="sort">车服务</p>
        </div>
      </div>
    </div>
    <div style="width:100%;height:.6rem;background:#f5f5f5"></div>
    <!-- 新车优选 -->
    <div style="width:100%;background:#ffffff">
      <div class="newcar">
        <div class="newcar-top">
          <span style="font-size:17px;font-weight:bold">品牌优选</span>
          <span class="newcar-right" @click="toshaixuan('')">全部品牌</span>
        </div>
        <ul class="newcar-label" style="margin-top:0.3rem">
          <li v-for="(i,index) in titletoplist" :key="index" @click="toshaixuantop(i.href)">{{i.text}}</li>
        </ul>
        <div
          style="font-size:12px;color:#666666;text-align:center"
          v-if="this.pinpailist==''"
        >正在加载中...</div>
        <ul v-else class="brandcar">
          <li
            v-for="(i,index) in pinpailist"
            :key="index"
            @click="toshaixuanbrand(i.Id)"
            class="brandcar-li"
          >
            <img class="brandcar-img" :src="'http://www.lliangche.com/'+i.BrandImg" alt>
            <div class="brandcar-font">{{i.Name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div style="width:100%;height:.6rem;background:#f5f5f5"></div>
    <!-- 为你推荐 -->
    <div style="width:100%;background:#ffffff">
      <div class="recommend" >
        <div class="newcar-top" >
          <span style="font-size:17px;font-weight:bold;" >为你推荐</span>
          <span class="newcar-right" @click="toshaixuan">更多</span>
        </div>

        <scroller :bounce="false" lock-y :scrollbar-x="false">
          <div class="box1">
            <div class="box1-item" style="width:5.9rem;margin-top:0" v-for="(i,index) in weinilist.slice(0,8)" :key="index" @click="tomore(i.Id)">
              <img class="car-img"  style="height:3.5rem" :src="'http://47.110.11.114:80'+i.BannerImg" alt="">
               <p class="car-name" >{{i.Name}}</p>
              <div>
             
              <!-- <p class="car-piece">首付<span>{{item.FirstPayment}}</span>万</p>
              <p class="car-month" >月供<span>{{item.MonthPay}}</span>元</p> -->
              
              <p class="car-piece" style="text-align:left;margin-left:.4rem;font-size:13px;margin-top:.1rem;">优惠价:<span style="font-size:20px">{{i.InsidePrice}}</span>万</p>
              <p class="car-month" style="text-align:left;margin-left:.2rem;font-size:11px">指导价:{{i.GuidePrice}}万<span style="color:margin-left:0rem;">↓{{i.GuidePrice-i.InsidePrice | xiaoshu}}万</span></p>
              </div>

            </div>
          </div>
        </scroller>
      </div>
    </div>
    <div style="width:100%;height:.6rem;background:#f5f5f5"></div>
    <!-- 热门 -->
    <div style="width:100%;background:#ffffff">
      <ul class="remen">
        <img @click="guangone" class="renmenimg-one" src="../assets/images/aca6dac5342483ed30bb8ecbc8e8d7f.png" alt>
        <img @click="guangtwo" class="renmenimg-two" src="../assets/images/zijia.png" alt>
        <img @click="guangthree" class="remenimg-three" src="../assets/images/gaopin.png" alt>
        <li style="border-right:1px solid #f5f5f5" @click="guangone">
          <p class="remen-pone">热门suv</p>
          <p class="remen-ptwo">安全&nbsp;气派&nbsp;空间大&nbsp;</p>
        </li>
        <li style="border-bottom:1px solid #f5f5f5" @click="guangtwo">
          <p class="remen-pone" style="color:blue;margin-left:.5rem;" >自驾游</p>
          <p class="remen-ptwo" style="margin-left:.5rem;">轻松游世界</p>
        </li>
        <li style="border-right:1px solid #f5f5f5" >

        </li>
        <li @click="guangthree">
          <p class="remen-pone" style="color:#ffb32a;margin-left:.5rem;">高品质车</p>
          <p class="remen-ptwo" style="margin-left:.5rem;">轻松生活</p>
        </li>
      </ul>
    </div>
    <div style="width:100%;height:.6rem;background:#f5f5f5"></div>
    <!-- 超低首付 -->
    <div class="lower-firstwai">
      <div  class="lower-first">
        <div class="lower-firsttop" @click="$router.push('/downpayment')">
          <p
            style="color:#ffffff;font-size:12px;margin-left:0.5rem;margin-top:0.8rem;margin-bottom:0"
          >限量好车&nbsp;强势来袭</p>
          <p style="margin-left:0.5rem;margin-top:0.3rem;margin-bottom:0">
            <span style="font-size:28px;color:#ffffff;  position: relative;top:-.8rem;">超低首付</span>
            <span style="margin-left:1.3rem;color:#ffffff;font-size:16px"><span style="font-size:40px;margin-right:0rem;font-weight:900">0-10%</span>首付</span>
          </p>
          <div class="jike" style="position: relative;top:-.8rem;background:#ffffff;color:#feb52b">即刻开走></div>
        </div>

        <scroller :bounce="false" lock-y :scrollbar-x="false">
          <div class="box1">
            <div class="box1-item" v-for="(i,index) in firstlist" :key="index" @click="tomore(i.Id)">
                <img class="car-img" :src="'http://47.110.11.114:80/'+i.BannerImg" alt="">
                 <p class="car-name" v-text="i.Name" ></p>
              <div v-for="(item,index) in i.PurchasePlanList.slice(0,1)"
              :key="index">
             
             
              <p class="car-piece">首付<span>{{item.FirstPayment}}</span>万</p>
              <p class="car-month" >月供<span>{{item.MonthPay}}</span>元</p>
                 
              </div>
            </div>
          </div>
        </scroller>
      </div>
    </div>
    <div style="width:100%;height:.6rem;background:#f5f5f5"></div>
    <!-- 超低月供 -->
    <div class="lower-afterwai">
      <div class="lower-after">
        <div class="lower-firsttop"  @click="$router.push('/monthfor')">
          <p
            style="color:#ffffff;font-size:12px;margin-left:0.5rem;margin-top:0.8rem;margin-bottom:0"
          >毫无压力&nbsp;轻松月供</p>
          <p style="margin-left:0.5rem;margin-top:0.3rem;margin-bottom:0">
            <span style="font-size:28px;color:#ffffff;  position: relative;top:-.8rem;">最低月供</span>
            <span style="margin-left:2rem;color:#ffffff;font-size:16px"><span style="font-size:40px;margin-right:0.2rem;font-weight:1000">5000</span>以下</span>
          </p>
          <div class="jike" style="position: relative;top:-.8rem;">即刻开走></div>
        </div>

        <scroller :bounce="false" lock-y :scrollbar-x="false">
          <div class="box1">
            <div class="box1-item" v-for="(i,index) in secondlist" :key="index" @click="tomore(i.Id)">
                <img class="car-img" :src="'http://47.110.11.114:80'+i.BannerImg" alt="">
                  <p class="car-name" v-text="i.Name" ></p>
              <div v-for="(item,index) in i.PurchasePlanList.slice(0,1)"
              :key="index">
             
            
              <p class="car-piece">首付<span>{{item.FirstPayment}}</span>万</p>
              <p class="car-month" >月供<span>{{item.MonthPay}}</span>元</p>
                 
              </div>
            </div>
          </div>
        </scroller>
      </div>
    </div>

    <div style="width:100%;height:0.6rem;background:#f5f5f5"></div>
    <!-- showlistinfo -->
    <div style="width:100%;background:#ffffff">
      <div class="showlistinfo">
        <p style="text-align:center;font-size:17px;color:#ec9000;margin-top:0;margin-bottom:0.3rem;position:relative;top:2px;">猜你喜欢</p>
        <ul class="showlist">
            <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
          <li v-for="(i,index) in showlist " :key="index" @click="tomore(i.Id)" >
           
            <img class="showlistimg" :src="'http://47.110.11.114:80'+i.BannerImg" alt="">
            <p style="margin:0;font-size:14px;font-weight:600" v-text="i.Name"></p>
            <p
              style="width:100%;height:16px;margin-top:0.3rem;margin-bottom:0rem;font-size:12px;color:silver;overflow:hidden"
            >{{i.CarModel | carmodel}}</p>
              
            <p class="car-piece"  style="text-align:left;margin-left:0.65rem;margin-top:0.1rem;font-size:15px">优惠价:<span style="font-size:21px">{{i.InsidePrice| xiaoshu}}</span>万</p>
            <p class="car-month"  style="margin-top:0.1rem;font-size:12px">指导价:{{i.GuidePrice| xiaoshu}}万<span style="margin-left:.1rem;">↓{{i.GuidePrice-i.InsidePrice | xiaoshu}}万</span></p>
             
             <!-- <p v-else style="font-size:12px;color:red;margin:0">首付
              <span style="font-size:12px;color:red;">
                
                <span style="font-size:15px;">0</span>万&nbsp;&nbsp;
              </span>
              <span style="font-size:12px;color:red">
                月供
                <span >0</span>元
              </span>
            </p> -->
          </li>
 </van-list>

        </ul>
      </div>
    </div>
 </van-pull-refresh>
    <!-- 底部4 -->
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
import { Dialog } from 'vant';
// import  {locatio}  from '@/utils/utils'
import { Scroller } from "vux";
import request from "@/utils/request";
import { setTimeout } from 'timers';
export default {
  components: {
    Scroller
  },
  name: "home",
  data() {
    return {
      nowwhere:[],
      xiangjian:0,
      page:1,
       loading: false,
      finished: false,
     xihuanyue:0,
     xihuanshou:0,
      isLoading: false,
      offsetTop: 0,
      choosename: "地区",
      show: false,
      value: "",
      active: 0,
      lunbotu: [],
      pinpailist: [],
      titletoplist: [],
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
      carlist: [
       
      ],
      firstlist: [],
      secondlist: [],
     weinilist:[],
      showlist: [],
      isshang:'',
      IsAdmin:'',
      status:''
    };
  },
 filters:{
     xiaoshu(value) {
     if(value<10){
       return '0'+ value.toFixed(2)
     }
      return value.toFixed(2);

    },
    price(value){
      if(value==undefined){
      return 0
      }else{
   return value
    }},
    diqu(value){
    if(value.length>3){
   return value.slice(0,3)
    }else{
   return value
    }
 
     },
  carmodel(val){
     if(val.length>16){
       return val.slice(0,16) + '...'
     }else{
       return val
     }
  }
 },
  created() {
   this.getLocation()
  // console.log(this.$api)
    this.shenfen();
    this.lunbo();
    // this.address();
    this.pinpai();
    this.weinituijian()
    this.titletop();
    this.shou();
    this.yue();
    this.xihuan()
  },
  methods: {
//  活动也

    fuwu(){
 window.location.href = 'https://www16.53kf.com/m.php?kf_sign=TI5MTMTU1Oc5NDExMjQzMzY0ODgxMDA1NzIxMzQwNzY%3D&cid=72134076&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=0fd2a4c029cf14ee9e8f2b159a599573&u_stat_id=&talktitle=Document&tfrom=50&device=&zdkf_type=1&kf=&kflist=off'
// window.location.href="https://www5.53kf.com/m.php?kf_sign=TI4ODMTU1OI4OTExMjQzMzY0ODgxMDA1NjI3MjE2NTk%3D&cid=62721659&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=1b08c0fadd8afac0ca716e0ffa57256f&u_stat_id=&talktitle=Document&tfrom=51&device=&zdkf_type=1&kf=zlpxm1%40126.com&kflist=off&is_minchat=1&historylen=10&locahref=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&fromopen=1#http://localhost:8080/static/kefu.html"
    },
    // 广告链接
    //1热门suv
    guangone(){
        this.$router.push('/suv')
    },
    //2自驾游
    guangtwo(){
this.$router.push({
          path:'/searchonelistalone',
          query:{
            TagId:355
          }
        })
    },
    //3高品质车
     guangthree(){
this.$router.push({
          path:'/searchonelistalone',
          query:{
            TagId:356
          }
        })
    },
    // 下拉刷新
    onRefresh(){
    setTimeout(()=>{
      this.isLoading=false
      this.shenfen();
    // this.address();
    this.pinpai();
    this.titletop();
    this.shou();
    this.yue();
    
    },500)
    },

    // 确认身份{}
    shenfen(){
       request
        .post(this.$api+"/Wechat/GetUserInfo", {})
        .then(res =>{
         if(res.data.IsSuccess==true){
        this.isshang=res.data.Data.CourseCommentFlag;
        this.IsAdmin=res.data.Data.IsAdmin
        this.status=res.data.Data.Status
         }
       
       
        
      
        })
        .catch(err => {
          console.log(err);
        });
    },
        paging() {
// console.log(this.IsAdmin)
          if(this.IsAdmin==true){
            this.$router.push('/distributorlist')
          }
          else if(this.status=='Unapprove' || this.status=='UnAudited' ){
            this.$router.push('/look')
          }
          else{
             this.$router.push('/paging')
          }

    },
    // 进入详情
    tomore(id){
      this.$router.push({
        path:`/particulars/${id}`
      })
    },
 
    // 搜索框点击
    search() {
      this.$router.push("/search");
    },
   

    // 品牌详情筛选
toshaixuantop(id){
 
 this.$router.push({
        path:'/searchonelistalone',
        query:{
          TagId:id
        }
      })
},



toshaixuanbrand(id){
 this.$router.push({
        path:'/searchonelist',
        query:{
          BrandId:id
        }
      })
},
// 为你推荐按钮
toshaixuan(id){
    this.$router.push({
      path:'/searchonelistalone',
      query:{
         TagId:360
        }
      })

    },
    // 标签头
    titletop() {
      request
        .get(this.$api+"/Wechat/TagComboTree?type=5", {
          IsHome:1,
          Rows:5
        })
        .then(res => {
          // console.log(res.data.Data);
          if(res.data.Data.length>4){
           this.titletoplist = res.data.Data.slice(0,4);
          }else{
            this.titletoplist = res.data.Data
          }
         
        })
        .catch(err => {
          console.log(err);
        });
    },
    // onChange(picker, value, index) {
    //   this.message = value;
    // },
    // onCancel() {
    //   this.show = false;
    // },
    // onConfirm(picker, value, index) {
    //   console.log(picker);
    //   this.choosename = picker;
    //   localStorage.setItem("picker", picker);
    //   this.show = false;
    // },
    // 选择地区
    showpopup() {
      this.$router.push('/showpopup')

    },

    // brand
    pinpai() {
      request
        .post(this.$api+"/Wechat/GetBrandList", {
          IsHome:1,
          Rows:12
        })
        .then(res => {
          // console.log(res.data);
          this.pinpailist = res.data.Data.list;
          // this.id = res.data.Data.list.Id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // address() {
    //   request
    //     .post(this.$api+"/Wechat/GetCityCodeList", {
    //       IsHome:1
    //     })
    //     .then(res => {
    //       // console.log(res.data.Data.list);
    //       var arr = res.data.Data.list;
    //       // this.columns.push(res.data.Data.list.CityName)
    //       for (var i = 0; i < arr.length; i++) {
    //         // console.log(arr[i].CityName);
    //         this.columns.push(arr[i].CityName);
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    // 轮播图方法
    lunbo() {
      request
        .post(this.$api+'/Mobile/GetLink', {
          IsHome:1,
          LinkType: "IndexBannerList"
        })
        .then(res => {
          // console.log(res.data.Data);
          this.lunbotu= res.data.Data;
          // for (var i = 0; i < arr.length; i++) {
          //   this.lunbotu.push(arr[i].Icon);
          // }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 超低首付
    shou() {
      request
        .post(this.$api+"/Wechat/GetTagCarList", {
         TagId:358,
          IsHome:1,
          Page:1,
          Rows:6
        })
        .then(res => {
          // console.log(res.data.Data);
          this.firstlist = res.data.Data.list
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 为你推荐
    weinituijian(){
        request.post(this.$api+"/Wechat/GetTagCarList",{
         TagId:360,
         IsHome:1,
           Page:1,
            Rows:6
        }).then(res=>{
     this.weinilist=res.data.Data.list
     
        }).catch(err=>{

        })
    },
    // 月供
    yue() {
      request
        .post(this.$api+"/Wechat/GetTagCarList", {
         TagId:359,
          IsHome:1,
           Page:1,
            Rows:6
        })
        .then(res => {
          // console.log(res.data.Data);
          this.secondlist = res.data.Data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 猜你喜欢
       // 上拉加载
     onLoad() {
      // 异步更新数据
     
         this.page+=1
        this.xihuan()
     }
      ,
    xihuan() {
      request
        .post(this.$api+"/Wechat/GetYouLikeCarList", {
          IsHome:1,
          Page:this.page,
         Rows:6
        })
        .then(res => {
          
          // console.log(res.data.Data);
           this.loading=false;
          if(res.data.Data.list.length){
            var arr=res.data.Data.list
                for(let i=0;i<arr.length;i++){
                  this.showlist.push(arr[i])
                }
            // this.showlist.concat(res.data.Data.list)
            // console.log(this.showlist)
        
          }else{
            this.finished=true
          }
      

        })
        .catch(err => {
          console.log(err);
        });
    
    
    },
    // 滚动监听
    handleFun() {
      var inputbox=document.getElementById('inputbox')
      var toolbar = document.getElementById("toolbar");
      this.offsetTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(this.offsetTop);
      if (this.offsetTop > 36) {
        // console.log("没超过");
        toolbar.style.background = "#ffffff";
        toolbar.style.color = "black";
        inputbox.style.background= "#f5f5f5"
      } else {
        // console.log("超狗了");
        toolbar.style.background = "none";
        toolbar.style.color = "#ffffff";
        inputbox.style.background="#ffffff"
      }
    },
    getLocation(){ // 从高德地图api获取浏览器定位
    const that = this
    AMap.plugin('AMap.Geolocation', function() {
      let geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000
      })

      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', onComplete)
      AMap.event.addListener(geolocation, 'error', onError)

      function onComplete (data) {
        
        // data是具体的定位信息
        // console.log('第一'+data)
      console.log(data.addressComponent.city)
      that.choosename=data.addressComponent.city
      window.localStorage.setItem('name',data.addressComponent.city)
      }

      function onError (data) {
        // 定位出错
        that.getLatLngLocation()
      }
    })
  },
  getLatLngLocation(){
    AMap.plugin('AMap.CitySearch', function () {
      let citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          // 查询成功，result即为当前所在城市信息
          AMap.plugin('AMap.Geocoder', function() {
            let geocoder = new AMap.Geocoder({
              // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
              city: result.adcode
            })
            let lnglat = result.rectangle.split(";")[0].split(",")
            geocoder.getAddress(lnglat, function(status, data) {
              if (status === 'complete' && data.info === 'OK') {
                // data为对应的地理位置详细信息
               
              }
            })
          })
        }
      })
    })
  }

  
  },
 
  mounted() {
    
    // console.log(window.localStorage.getItem('token'))
    window.addEventListener("scroll", this.handleFun);
 
   
    // console.log(window.localStorage.getItem('picker'))
    if(window.localStorage.getItem('name')==null||window.localStorage.getItem('name')==''||window.localStorage.getItem('name')==undefined){
         
     
    
     this.choosename='地区'
    //  window.localStorage.setItem('name',this.choosename)


      // utils.ip(e=>{
      //        this.choosename=e
      //        window.localStorage.setItem('name',e)
      //        window.localStorage.setItem('dingweicity',e)
      //      },data=>{
      //      alert(data)
      //      })
      
    }else{
      this.choosename= window.localStorage.getItem('name')
    }
    
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleFun);
  }
};
</script>
<style scoped>
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
  margin-top: 0.25rem;
  border-radius: 20px;
  border: none;
  background:#ffffff;
  font-size: 12px;
  text-align: center;
}


/* 商标 */
.brand {
  width: 100%;
  height: 3.5rem;
  background-color: #ffffff;
  /* border: 1px solid red; */
  /* padding: 0.5rem auto; */
}
.brand > div {
  /* border: 1px solid green; */
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.brand-card {
  text-align: center;
  display: inline-block;
  width: 25%;
  height: 3.5rem;
  /* border: 1px solid blue; */
}
.car-icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  border-radius: 50%;
  background-size: 100% 100%;
}
.sort {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
}
/* 新车优选 */
.newcar {
  width: 90%;
  height: 9rem;
  /* border: 1px solid rebeccapurple; */
  margin: 0 auto;
  overflow: hidden;
}
.newcar-top {
  height: 1.7rem;
  border-bottom: 1px solid #e6e6e6;
}
.newcar-right {
  font-size: 14px;
  line-height: 1.7rem;
  color: #e6e6e6;
  float: right;
}
.newcar-right::after {
  display: inline-block;
  content: ">";
  position: relative;
  top: -1px;
}
.newcar-label {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  /* background: red; */
  display: flex;
}
.newcar-label li {
  width: 25%;
  text-align: center;
  font-size: 15px;
}
.brandcar {
  width: 100%;
  height: 6rem;
  /* background: blue; */
  display: flex;
  flex-wrap: wrap;
}
.brandcar-li {
  /* font-size: 18px; */
  width: 25%;
  height: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  /* display: flex; */
}
.brandcar-img {
  /* position: relative;
  top: 0.2rem; */
  vertical-align: middle;
  display: inline-block;
  /* padding-top: .5em; */
  width: 0.82rem;
  height: 0.82rem;
  background-size: 100% 100%;
}
.brandcar-font {
  display: inline-block;
height: 1.7rem;
  line-height: 1.7rem;
  font-size: 14px;
  margin-left: -4px;
}
/* 为你推荐 */
.recommend {
  width: 90%;
  height: 8.6rem;
  /* border: 1px solid rebeccapurple; */
  margin: 0 auto;
}

.box1 {
  height: 6.8rem;
  position: relative;
  width: 40rem;
}
.box1-item {
  width: 5rem;
  height: 6rem;
  background-color: #ffffff;
  border-radius: 7px;
  /* display: inline-block; */
  margin-top: 0.5rem;
  margin-left: 0rem;
  margin-right: 0.5rem;
  float: left;
  text-align:center;
}
.car-img{
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  width:100%;
  height: 3rem;
  background-size: 100% 100%;
}
.car-name {
  width:100%;
  height: .7rem;
  overflow: hidden;
  margin-top: 0rem;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 0;
}
.car-piece {
  font-size: 13px;
  color: red;
  margin: 0;
}
.car-month {
  font-size: 13px;
  color: silver;
  margin: 0;
}
/* 广告 */
.renmenimg-one {
  display: inline-block;
  width: 47%;
  height: 4rem;
  background-size: 100% 100%;
  position: absolute;
  top: 3rem;
}
.renmenimg-two {
  display: inline-block;
  width: 25%;
  height: 2.6rem;
  background-size: 100% 100%;
  position: absolute;
  top: 1.1rem;
  right: 0.09rem;
}
.remenimg-three {
  display: inline-block;
  width:25%;
  height: 2.6rem;
  background-size: 100% 100%;
  position: absolute;
  top: 4.8rem;
  right: 0.09rem;
}
.remen {
  width: 90%;
  height: 8rem;
  /* border: 1px solid red; */
  margin: 0rem auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.remen li {
  width: 49%;
  height: 4rem;
  /* border-left: 1px solid #e6e6e6; */
  /* background-color:silver; */
}
.remen-pone {
  font-size: 17px;
  color: red;
  font-weight: blod;
  margin-top: 0.6;
  margin-bottom: 0;
}
.remen-ptwo {
  margin-top: .2rem;
  font-size: 13px;
  color: silver;
}
/* 超低首付 */
.lower-firsttop{
  height: 4rem;
}
.lower-first {

  width: 90%;
  height: 11rem;
  margin: 0 auto;
  /* border: 1px solid slateblue; */
}
.lower-firstwai {
  width: 100%;
  height: 12rem;
  background: url("../assets/images/4feef2afc434f98cf0bd0d08c045334.jpg")
    no-repeat;
  background-size: 100% 100%;
  padding-top: 0.5rem;
}
.jike {
  display: inline-block;
  width: 4rem;
  margin-left: 0.5rem;
  text-align: center;
  margin-bottom: 0.8rem;
  font-size: 14px;
  border: 1px solid silver;
  /* padding: 2px; */
  border-radius: 10px;
  color: red;
  background-color: aliceblue;
}

/* 超低月供 */
.lower-after {
  width: 90%;
  height: 11rem;
  margin: 0 auto;

  /* border: 1px solid slateblue; */
}
.lower-afterwai {
  width: 100%;
  height: 12rem;
  background: url("../assets/images/a8309e2b9eafec8e0f1d1f8d5e09bf7.jpg")
    no-repeat;
  background-size: 100% 100%;
  padding-top: 0.5rem;
}
/* showlist */
.showlistinfo {
  width: 90%;
  
  margin: 0 auto;
  margin-bottom: 2.6rem;
}
.showlist {
  width: 100%;
  display: flex;
  flex-flow: wrap;
 
}
.showlist li {
  position: relative;
  text-align: left;
  width: 49%;
  height: 7.6rem;
  display: inline-block;
  /* border-bottom: 1px solid #e6e6e6; */
  /* margin-left: 6px;
  margin-bottom: 0.5rem; */
}

.showlistimg{
  display:inline-block;
  width: 80%;
  height: 3.45rem;
  margin-left: .6rem;
  background-size: 100% 100%;
}
</style>


