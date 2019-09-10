<template>
  <div>
    <!-- 弹窗 -->
    <van-action-sheet v-model="showfen" title="请选择方式">
      <div class="fenkuai">
        
        <div @click="fenxiangone" style="font-size:20px" class="fenkuai-son"><i class="iconfont" style="display:blcok;margin-top:10px;font-size:40px;height:60%;color:#03cf3c">&#xe635;</i><span style="display:block;font-size:11px;">微信</span></div>
        <div @click="fenxiangtwo" style="font-size:20px" class="fenkuai-son"><i class="iconfont" style="display:blcok;margin-top:10px;font-size:40px;height:60%;color:#03cf3c">&#xe621;</i><span style="display:block;font-size:11px;">朋友圈</span></div>
      </div>
    </van-action-sheet>

    <van-nav-bar
      style="height:2rem !important"
      title="车辆详情"
      fixed
      @click-left="onClickLeft"
      left-arrow
    ></van-nav-bar>
    <div class="top-right">
      <i class="iconfont" style="font-size:22px" @click="shouliebiao">&#xe660;</i>
      <i
        @click="fen"
        style="font-size:20px;margin-left:0.3rem;position:relative;top:-2px;"
        class="iconfont"
      >&#xe684;</i>
    </div>
    <div style="width:100%;height:2rem;background:#ffffff;"></div>
    <div class="particulars-bac" @click="datu(carid)">
      <div class="didi">{{current+ 1 }}/{{len}}</div>
      <van-swipe @change="onChange" style="height:250px;" :show-indicators="false">
        <van-swipe-item :height="250" v-for="(item,index) in topswiper" :key="index">
          <img
            style="width:100%;height:250px;background-size:100% 100%;z-index:34 !important"
            :src="'http://www.lliangche.com'+item.ImgUrl"
            alt
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 详情车名 -->
    <div class="particulars-name">
      <p
        style="margin-top:0;margin-left:0.35rem;font-size:18px;"
      >{{detailinfo.Name}} {{detailinfo.CarModel}}</p>
      <p v-if="type==1" style="margin-left:0.35rem;font-size:18px;color:red">
        优惠后价格：
        <span style="font-size:28.5px;">{{detailinfo.InsidePrice}}</span>万
      </p>
      <p
        v-else
        style="margin-left:0.35rem;font-size:15px;color:silver"
      >新车含税价：{{detailinfo.GuidePrice}}万</p>
      <p v-if="type==1" style="margin-left:0.35rem;font-size:15px;margin-top:.6;margin-bottom:0">
        厂商指导价：{{detailinfo.GuidePrice}}万
        <span
          style="margin-left:.3rem;margin-right:.3rem;margin-bottom:0;color:black"
        >
          <span style="color:black">↓</span>
          {{xiangjian | xiaoshu}}万
        </span>
      </p>
      <p
        v-else
        style="margin-left:0.35rem;font-size:15px;color:red;margin-top:.6;margin-bottom:0"
      >车主价格：{{detailinfo.InsidePrice}}万</p>
      <p v-if="type==1" style="margin-left:0.35rem;font-size:17px;color:silver;margin-bottom:0">
        含购置税
        <span style="margin-left:0.8rem;margin-right:0.8rem">|</span>含首年保险
        <span style="margin-left:2rem;">
          已售
          <span style="color:red">{{detailinfo.QuantitySold}}</span>台
        </span>
      </p>
      <p
        style="margin-left:0.35rem;font-size:17px;color:silver;margin-bottom:0"
        v-else
      >优惠：{{xiangjian | xiaoshu}}</p>
    </div>

    <!-- 粘性布局整体 -->
    <div style="width:100%;height:1rem;background:#f5f5f5"></div>
    <div class="message-main">
      <div class="nianxing">
        <span class="navItem" id="toolbar-one" @click="toorone">购车方案</span>
        <span class="navItem" id="toolbar-two" @click="toortwo">车辆信息</span>
        <span class="navItem" id="toolbar-three" @click="toorthree">车型亮点</span>
        <span class="navItem" id="toolbar-four" @click="toorfour">购车须知</span>
      </div>
      <div class="sign" @click="dingjin(id)">
        <div class="sign-one">
          <p class="sign-pone">{{pay.FirstPayment}}万</p>
          <p class="sign-ptwo">首付</p>
        </div>
        <div class="sign-two">
          <p class="sign-pone">{{pay.MonthPay}}元</p>
          <p class="sign-ptwo">月供</p>
        </div>
        <div class="sign-three">
          <p class="sign-pone">{{pay.Month}}期</p>
          <p class="sign-ptwo">期数</p>
        </div>
      </div>
      <!-- 购车门店 -->
      <div class="carshop">
        <div class="carmap">
          <!-- 地图放这里 -->
          <el-amap vid="amap" :center="center" :zoom="zoom" class="amap-demo">
            <el-amap-marker
              :position="marker.position"
              :visible="marker.visible"
              :draggable="marker.draggable"
            ></el-amap-marker>
          </el-amap>
          <div class="dianmain" @click="dianmain">
            <img
              class="dianleft"
              :src="'http://www.lliangche.com/Content/Upload/Image/User/'+shopimg"
              alt
            >
            <div class="dianright">
              <div class="diantop">{{shopname}}</div>
              <div class="dianbottom">{{shopaddress}}</div>
            </div>
            <div class="dianjian">></div>
          </div>
        </div>
        <!-- <p style="margin-left:0.7rem;">
          <span class="ball"></span>
          <span style="font-size:17px">购车门店</span>
          <span style="font-size:13px;color:silver;margin-left:8rem;" @click="allstore">全部门店></span>
        </p>
        <p style="font-size:17px;margin-left:1.5rem;">
          杭州市智檤汽车
          <span class="nearby">附近</span>
        </p>
        <p style="font-size:17px;margin-left:1.5rem;color:silver">地址:-----</p>
        <p
          style="font-size:17px;margin-left:1.5rem;margin-bottom:0.5rem;color:silver"
        >电话：400-666-6666</p>
        <i
          style=" position: absolute;top:2.6rem;right: 2rem;font-size: 28px;"
          class="iconfont"
        >&#xe603;</i>-->
      </div>
      <div ref="anchor0" id="jumpone" style="width:100%;height:1rem;background:#f5f5f5"></div>
      <!-- 购车方式对比 -->
      <div class="buypk" style="padding-top:1rem">
        <p style="margin-top:0;margin-left:0.7rem;">
          <span class="ball"></span>
          <span style="font-size:17px">购车方式对比</span>
        </p>
        <div class="buymethod">
          <div class="buyapp">APP购车</div>
          <div class="pk">pk</div>
          <div class="buyother">其他方式</div>
        </div>

        <div class="shopping-way">
          <div class="shopping-left">
            <p
              style="text-align:right;margin-right:0.4rem;color:#fcdd87;font-size:18px;margin-top:0rem;margin-bottom:0.3rem"
            >购车压力小</p>
            <p style="margin-left:0.9rem;font-size:15px;margin-top:0;margin-bottom:0rem;">定制专属购车方案，</p>
            <p style="margin-left:0.9rem;margin-top:0;font-size:15px;">坐等提车，省去烦恼</p>
            <p
              style="text-align:right;margin-right:0.4rem;color:#fcdd87;font-size:18px;margin-top:0.8rem;margin-bottom:0.3rem"
            >资质审核快</p>
            <p style="margin-left:0.9rem;font-size:15px;margin-top:0;margin-bottom:0rem;">在线提交资料查征信,</p>
            <p style="margin-left:0.9rem;margin-top:0;font-size:15px;">高通过率</p>
            <p
              style="text-align:right;margin-right:0.4rem;color:#fcdd87;font-size:18px;margin-top:0.8rem;margin-bottom:0.3rem"
            >省时省力</p>
            <p
              style="margin-left:0.9rem;font-size:15px;margin-top:0;margin-bottom:0rem;"
            >上牌,提车,交税,保险,</p>
            <p style="margin-left:0.9rem;margin-top:0;font-size:15px;">专员代办，等提新车</p>
          </div>
          <div class="shopping-right">
            <p
              style="margin-left:0.4rem;color:#747474;font-size:18px;margin-top:0rem;margin-bottom:0.3rem"
            >购车压力大</p>
            <p
              style="margin-left:0.4rem;color:#c1c1c1;font-size:15px;margin-top:0;margin-bottom:0rem;"
            >首付三成，购置税、</p>
            <p
              style="margin-left:0.4rem;margin-top:0;margin-bottom:0;color:#c1c1c1;font-size:15px;"
            >保险，服务,杂费超多</p>
            <p
              style="margin-left:0.4rem;color:#747474;font-size:18px;margin-top:0.8rem;margin-bottom:0.3rem"
            >资质审核繁琐</p>
            <p
              style="margin-left:0.4rem;color:#c1c1c1;font-size:15px;margin-top:0;margin-bottom:0rem;"
            >收费审查征信,审批苛刻</p>
            <p
              style="margin-left:0.4rem;margin-top:0;margin-bottom:0;color:#c1c1c1;font-size:15px;"
            >低通过率</p>
            <p
              style="margin-left:0.4rem;color:#747474;font-size:18px;margin-top:0.8rem;margin-bottom:0.3rem"
            >费时费力</p>
            <p
              style="margin-left:0.4rem;color:#c1c1c1;font-size:15px;margin-top:0;margin-bottom:0rem;"
            >上牌,提车,交税,保险,</p>
            <p style="margin-left:0.4rem;margin-top:0;color:#c1c1c1;font-size:15px;">事事自己办理</p>
          </div>
        </div>
        <div
          style="color:silver;width:90%;margin:0 auto;text-align:center;font-size:12px;"
        >＊首付成数由按揭方式提供服务，页面展示车型金融方案均按展示比例首付计算，实际方案以信用审核情况为准。</div>
      </div>
      <div style="width:100%;height:1rem;background:#f5f5f5" id="jumptwo" ref="anchor1"></div>
      <!-- 车辆信息 -->
      <div class="car-message" style="padding-top:1rem">
        <p style="margin-top:0;margin-bottom:0;margin-left:0.7rem;">
          <span class="ball"></span>
          <span style="font-size:17px">车辆信息</span>
        </p>
        <div class="message-cellmain">
          <div v-if="type==1" class="message-cell">
            <span>车身结构</span>
            <span v-text="detailinfo.BodyWorkType"></span>
          </div>
          <div v-else class="message-cell">
            <span>表显里程</span>
            <span v-text="detailinfo.CarUserNumber"></span>
          </div>
          <div v-if="type==1" class="message-cell">
            <span>发动机</span>
            <span v-text="detailinfo.Engine"></span>
          </div>
          <div v-else class="message-cell">
            <span>初次上牌</span>
            <span v-text="detailinfo.LicensePlateTime"></span>
          </div>
          <div v-if="type==1" class="message-cell">
            <span>变速箱</span>
            <span v-text="detailinfo.GearBox"></span>
          </div>
          <div v-else class="message-cell">
            <span>排放标准</span>
            <span v-text="detailinfo.TransfersCount"></span>
          </div>
          <div v-if="type==1" class="message-cell">
            <span>能源类型</span>
            <span v-text="detailinfo.EnergyType"></span>
          </div>
          <div v-else class="message-cell">
            <span>排量</span>
            <span v-text="detailinfo.Displacement"></span>
          </div>
          <div v-if="type==1" class="message-cell">
            <span>综合油耗</span>
            <span v-text="detailinfo.OilWear"></span>
          </div>
          <div v-else class="message-cell">
            <span>车身颜色</span>
            <span v-text="detailinfo.CarColor"></span>
          </div>
        </div>
        <div class="checkbutton" @click="allpeizhi(id)">查看全部配置</div>
      </div>
      <!-- <div style="width:100%;height:1rem;background:#f5f5f5" id="jumpthree" ref="anchor2"></div> -->
      <!-- 车辆亮点 -->

      <!-- <div class="brightport" style="padding-top:1rem">
        <p style="margin-top:0;margin-left:0.7rem;">
          <span class="ball"></span>
          <span style="font-size:17px">车辆亮点</span>
        </p>
      
        <div v-for="(i,index) in light" :key="index">
          <img class="bright-img" :src="'http://47.110.11.114:80'+i.TopImg" alt>
          <p class="bright-p">{{i.TopExplain}}</p>
          <img class="bright-img" :src="'http://47.110.11.114:80'+i.TrimImg" alt>
          <p class="bright-p">{{i.TrimExplain}}</p>
          <img class="bright-img" :src="'http://47.110.11.114:80'+i.FootImg" alt>
          <p class="bright-p">{{i.FootExplain}}</p>
        </div>
      </div>-->
      <!-- 展示图片 -->
      <!-- <img class="showpicture" src="../assets/images/870291495c722df26d1f4270ba7a575.jpg" alt> -->
      <!-- <div class="bright-title" style="margin-bottom:1rem;">更多亮点</div>

      <tab
        active-color="black"
        bar-active-color="#a7a7a7"
        :scroll-threshold="5"
        :line-width="1"
        custom-bar-width="60px"
      >
        <tab-item selected>外观设计</tab-item>
        <tab-item>内饰空间</tab-item>
        <tab-item>智能互联</tab-item>
        <tab-item>安全科技</tab-item>
        <tab-item>动力操控</tab-item>
      </tab>
     
      <div style="width:90%;height:7rem;margin:1rem auto">
        <img class="portimg" src="../assets/images/9b39a089aaa5fab6073a3aa5a0b476f.jpg" alt>
        <img class="portimg" src="../assets/images/46ec7ac22aeef64129895cdb9a77650.jpg" alt>
        <img class="portimg" src="../assets/images/352eefebdd69e834f7d5a6e7d948c9c.jpg" alt>
      </div>
      -->

      <div style="width:100%;height:1rem;background:#f5f5f5" id="jumpfour" ref="anchor3"></div>
      <!-- 购车须知 -->
      <div class="mustknow" style="padding-top:1rem">
        <p style="margin-top:0;margin-bottom:0;margin-left:0.7rem;">
          <span class="ball"></span>
          <span style="font-size:17px">购车须知</span>
        </p>
        <!-- 须知模块 -->
        <div class="module">
          <p style="margin:0;margin-top:.6rem">
            <i class="iconfont" style="font-size:20px;">&#xe611;</i>
            <span style="font-size:15px;font-weight:500;">购置税</span>
          </p>
          <p
            style="color:#929292;margin-left:1.5rem;margin-top:0.2rem;font-size:14px;margin-bottom:0"
          >购车方案中包含购置税费用，无需您额外支付购置税费用</p>
        </div>
        <div class="module">
          <p style="margin:0">
            <i class="iconfont" style="font-size:20px;">&#xe68b;</i>
            <span style="font-size:15px;font-weight:500;">保险</span>
          </p>
          <p
            style="color:#929292;margin-left:1.5rem;margin-top:0.2rem;font-size:14px;"
          >购买即赠送首年保险，无需您支付额外的保险费用</p>
        </div>
        <div class="module">
          <p style="margin:0">
            <i class="iconfont" style="font-size:20px;">&#xe608;</i>
            <span style="font-size:15px;font-weight:500;">上牌</span>
          </p>
          <p
            style="color:#929292;margin-left:1.5rem;margin-top:0.2rem;font-size:14px;"
          >负责为您免费办理购车城市或邻近城市的汽车牌照，无需您到场。</p>
        </div>
        <div class="module">
          <p style="margin:0">
            <i class="iconfont" style="font-size:20px;">&#xe677;</i>
            <span style="font-size:15px;font-weight:500;">提车地点</span>
          </p>
          <p
            style="color:#929292;margin-left:1.5rem;margin-top:0.2rem;font-size:14px;"
          >车辆相关手续办理完毕后，客服联系至指定地点提车</p>
        </div>
        <div class="module" style="height:3rem">
          <p style="margin:0">
            <i class="iconfont" style="font-size:20px;">&#xe609;</i>
            <span style="font-size:15px;font-weight:500;">提车时间</span>
          </p>
          <p
            style="color:#929292;margin-left:1.5rem;margin-top:0.2rem;margin-bottom:0;font-size:14px;"
          >首付成功后3-15个工作日</p>
        </div>
        <div class="module">
          <p style="margin:0">
            <i class="iconfont" style="font-size:20px;">&#xe683;</i>
            <span style="font-size:15px;font-weight:500;">月供还款</span>
          </p>
          <p
            style="color:#929292;margin-left:1.5rem;margin-top:0.2rem;font-size:14px;"
          >提车次月通过绑定的银行卡按时还款</p>
        </div>
      </div>
    </div>

    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :overlay="true">
      <div class="showdialog">
        <div class="showdialog-one">
          <span>马上咨询</span>
          <span @click="off">x</span>
        </div>
        <div class="showdialog-two">
          <span class="showdialog-spana">联系人</span>
          <span class="showdialog-spanb">杭州汽车产业园</span>
        </div>
        <div class="showdialog-three">
          <span class="showdialog-spana">手机号</span>
          <span class="showdialog-spanb">0571-87612992</span>
        </div>
        <div class="showdialog-four">
          <a style="color:black;" href="tel:0571-87612992">马上咨询</a>
        </div>
      </div>
    </van-popup>
    <!-- 底部固定 -->
    <div class="bottom-fix">
      <div class="focus" @click="shoucang">
        <i class="iconfont" ref="shou" style="font-size:25px;">&#xe65a;</i>

        <p v-if="yijing">收藏</p>
        <p v-else style="color:red">已收藏</p>
      </div>
      <div class="headset" @click="fuwu">
        <i style="font-size:25px;" class="iconfont">&#xe622;</i>
        <p>客服</p>
      </div>
      <div class="zixun">
        <span class="zixunone" @click="showdialog">立即咨询</span>
        <span>|</span>
        <span class="zixunthree" @click="dingjin(id)">支付定金</span>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request";
import { Toast } from "vant";
export default {
  data() {
    return {
      isAndroid:true,
      showfen:false,
      type: 0,
      shopimg: "",
      jing: "",
      wei: "",
      shopname: "",
      shopaddress: "",
      len: 0,
      current: 0,
      topswiper: [],
      center: [120.175549, 30.307023],
      zoom: 13,
      marker: {
        position: [120.175549, 30.307023],
        visible: true,
        draggable: false
      },
      xiangjian: 0,
      name: "",
      bannerimg: "",
      myconcernid: 0,
      yijing: true,
      show: false,
      id: 0,
      carid: 0,
      buyuserid: 0,
      active: 0,
      activetwo: 0,
      detailinfo: {},
      pay: [],
      carhighlight: [],
      light: []
    };
  },
  filters: {
    xiaoshu(value) {
      return value.toFixed(2);
    }
  },
  // watch:{
  //     myconcernid(newval,oldval){
  //       if(this.myconcernid=0){
  //         this.$refs.shou.style.color = "black";
  //          this.yijing = true;
  //       }
  //     },immediate: true
  // },
  methods: {
     // 分享
    fen() {
      this.showfen=true
    },

    fenxiangone(){
      var name=this.name
   
      this.showfen=false
      window.llcandroid.shareToWechat(window.location.href,name,'这里是量辆车','微信')
     },
      fenxiangtwo(){
        
       var name=this.name
      
      this.showfen=false
      window.llcandroid.shareToWechat(window.location.href,name,'这里是量辆车','朋友圈')
     },
    shouliebiao() {
      this.$router.push("/myfocus");
    },
    fuwu() {
      window.location.href =
        "https://www16.53kf.com/m.php?kf_sign=TI5MTMTU1Oc5NDExMjQzMzY0ODgxMDA1NzIxMzQwNzY%3D&cid=72134076&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=0fd2a4c029cf14ee9e8f2b159a599573&u_stat_id=&talktitle=Document&tfrom=50&device=&zdkf_type=1&kf=&kflist=off";
      // window.location.href="https://www5.53kf.com/m.php?kf_sign=TI4ODMTU1OI4OTExMjQzMzY0ODgxMDA1NjI3MjE2NTk%3D&cid=62721659&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=1b08c0fadd8afac0ca716e0ffa57256f&u_stat_id=&talktitle=Document&tfrom=51&device=&zdkf_type=1&kf=zlpxm1%40126.com&kflist=off&is_minchat=1&historylen=10&locahref=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&fromopen=1#http://localhost:8080/static/kefu.html"
    },
    onChange(index) {
      console.log(index);
      this.current = index;
    },
    // 跳到地图
    dianmain() {
      this.$router.push({
        path: "/map",
        query: {
          byuserid: this.buyuserid,
          shopimg: this.shopimg,
          shopname: this.shopname,
          shopaddress: this.shopaddress,
          jing: this.jing,
          wei: this.wei
        }
      });
    },
    // 获取顶部siper
    pictureone() {
      request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId: this.id,
          Page: 1,
          Rows: 9,
          Type: "关注"
        })
        .then(res => {
          this.topswiper = this.topswiper.concat(res.data.Data.list);
          request
            .post(this.$api+"/Wechat/GetCarPicList", {
              CarId: this.id,
              Page: 1,
              Rows: 9,
              Type: "中控"
            })
            .then(res => {
              this.topswiper = this.topswiper.concat(res.data.Data.list);
              request
                .post(this.$api+"/Wechat/GetCarPicList", {
                  CarId: this.id,
                  Page: 1,
                  Rows: 9,
                  Type: "座椅"
                })
                .then(res => {
                  this.topswiper = this.topswiper.concat(res.data.Data.list);
                  request
                    .post(this.$api+"/Wechat/GetCarPicList", {
                      CarId: this.id,
                      Page: 1,
                      Rows: 9,
                      Type: "细节"
                    })
                    .then(res => {
                      this.topswiper = this.topswiper.concat(
                        res.data.Data.list
                      );
                      this.len = this.topswiper.length;
                    })
                    .catch(err => {});
                })
                .catch(err => {});
            })
            .catch(err => {});
        })
        .catch(err => {});
    },

    // 图片点击方法
    datu(carid) {
      console.log(this.name);
      this.$router.push({
        path: "/datu",
        query: {
          carid: carid,
          name: this.name
        }
      });
    },
    // 收藏汽车点击事件
    shoucang() {
      if (this.yijing == true) {
        request
          .post(this.$api+"/Wechat/AddMyConcern", {
            Type: 2,
            CarId: this.carid,
            CarUserId: this.buyuserid
          })
          .then(res => {
            if (res.data.IsSuccess == false) {
              Toast("请先登录");
            } else {
              this.$refs.shou.style.color = "red";
              this.yijing = false;
              Toast("收藏成功");
              this.myconcernid = res.data.Data;
            }
          })
          .catch(res => {
            console.log(res);
          });
      } else {
        //  如果直接走这里，sessionstroge里边的值不为0，
        console.log("sess不为o时的" + this.myconcernid);
        if (this.myconcernid == 0) {
          this.yijing = true;
          this.$refs.shou.style.color = "black";
          Toast("取消收藏");
          request
            .post(this.$api+"/Wechat/DelMyConcern", {
              Id: window.sessionStorage.getItem("isshou")
            })
            .then(res => {
              console.log("取消成功");
              this.myconcernid = 0;
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.yijing = true;
          this.$refs.shou.style.color = "black";
          Toast("取消收藏");
          request
            .post(this.$api+"/Wechat/DelMyConcern", {
              Id: this.myconcernid
            })
            .then(res => {
              console.log("取消成功");
              this.myconcernid = 0;
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    },
   
    dingjin(id) {
      console.log(id);
      this.$router.push({
        path: "/select",
        query: {
          id: id
        }
      });
    },
    showdialog() {
      this.show = true;
    },
    off() {
      this.show = false;
    },
    getCarDetail() {
      request
        .post(this.$api+"/Wechat/CarDetail", {
          id: this.id
        })
        .then(res => {
          // 门店信息
            var isshoucang = Number(res.data.Data.info.MyConcernId);
           window.sessionStorage.setItem("isshou", isshoucang);
             console.log(window.sessionStorage.getItem("isshou"));
           this.isshou();
          this.type = res.data.Data.info.Type;
          this.shopimg = res.data.Data.info.ShopImg;
          this.shopname = res.data.Data.info.CarUserName;
          this.shopaddress = res.data.Data.info.CarUserHomeAddress;
          this.jing = res.data.Data.info.Jing;
          this.wei = res.data.Data.info.Wei;

          this.center = [res.data.Data.info.Jing, res.data.Data.info.Wei];

          this.marker.position = [
            res.data.Data.info.Jing,
            res.data.Data.info.Wei
          ];
          console.log(this.center, this.marker.position);

          // console.log(res.data.Data.info);
          this.bannerimg = res.data.Data.info.BannerImg;
          this.detailinfo = res.data.Data.info;
          this.name = res.data.Data.info.Name;
          this.xiangjian =
            res.data.Data.info.GuidePrice - res.data.Data.info.InsidePrice;

          // console.log(this.detailinfo)
          // console.log(res.data.Data.info.MyConcernId)
        
          // console.log(isshoucang);
         
          this.carid = res.data.Data.info.Id;
          this.buyuserid = res.data.Data.info.UserId;
          this.pay = this.detailinfo.PurchasePlanList[0];
          this.carhighlight = res.data.Data.info.CarHighlight;

          if (this.carhighlight.length > 2) {
            this.light = this.carhighlight.slice(0, 3);
          } else {
            this.light = this.carhighlight;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 进入页面的时候判断是否收藏
    isshou() {
     
      if (window.sessionStorage.getItem("isshou") != 0) {
        this.$refs.shou.style.color = "red";
        this.yijing = false;
      } else {
        this.$refs.shou.style.color = "black";
        this.yijing = true;
      }
    },
    allpeizhi(id) {
      this.$router.push({
        path: "/allpeizhi",
        query: {
          id: id
        }
      });
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    allstore() {
      this.$router.push("/allstore");
    },
    con() {
      console.log(-1);
    },
    //  点击滚动事件
    toorone() {
      document.querySelector("#jumpone").scrollIntoView(true);
    },
    toortwo() {
      document.querySelector("#jumptwo").scrollIntoView(true);
    },
    toorthree() {
      document.querySelector("#jumpthree").scrollIntoView(true);
    },
    toorfour() {
      document.querySelector("#jumpfour").scrollIntoView(true);
    },
    // 滚动事件
    handlefun() {
      var toolbarone = document.getElementById("toolbar-one");
      var toolbartwo = document.getElementById("toolbar-two");
      var toolbarthree = document.getElementById("toolbar-three");
      var toolbarfour = document.getElementById("toolbar-four");
      let ofsetTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(ofsetTop);
      if (ofsetTop >= 0 && ofsetTop <= 1223) {
        toolbarone.style.borderBottom = "3px solid #feef5e";
        toolbartwo.style.borderBottom = "none";
        toolbarthree.style.borderBottom = "none";
        toolbarfour.style.borderBottom = "none";
      } else if (ofsetTop > 1223 && ofsetTop <= 1596) {
        toolbartwo.style.borderBottom = "3px solid #feef5e";
        toolbarone.style.borderBottom = "none";
        toolbarthree.style.borderBottom = "none";
        toolbarfour.style.borderBottom = "none";
      } else if (ofsetTop > 1596 && ofsetTop <= 2871) {
        toolbarthree.style.borderBottom = "3px solid #feef5e";
        toolbartwo.style.borderBottom = "none";
        toolbarone.style.borderBottom = "none";
        toolbarfour.style.borderBottom = "none";
      } else {
        toolbarfour.style.borderBottom = "3px solid #feef5e";
        toolbartwo.style.borderBottom = "none";
        toolbarthree.style.borderBottom = "none";
        toolbarone.style.borderBottom = "none";
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
     this.getCarDetail();
    
  },
  mounted() {
    if (/android/i.test(navigator.userAgent)){
       //判断为android
          this.isAndroid=true;
       }else if(/ipad|iphone/i.test(navigator.userAgent)){
          this.isAndroid=false;
       }else{
          this.isAndroid=false;
       }

    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    // console.log('carid'+this.carid)

    this.pictureone();
  
 
    window.addEventListener("scroll", this.handlefun);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handlefun);
  }
};
</script>
<style scoped>
.active {
  border-bottom: #fcc245;
}
.nianxing {
  box-shadow: 2px 2px 1px silver;
  width: 100%;
  height: 2rem;
  background: #ffffff;

  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 122;
}
.navItem {
  text-decoration: none;
  color: #333;
  display: inline-block;
  width: 25%;
  height: 2rem;
  line-height: 2rem;
  font-size: 14px;
  text-align: center;
}
.van-nav-bar__left i::before {
  color: black;
}
.top-right {
  font-size: 22px;
  position: fixed;
  top: 0.4rem;
  right: 0.5rem;
  color: black;
  z-index: 10;
}
.top-right i:first-child {
  display: inline-block;
  width: 0.7rem;
  color: black;
}
.particulars-bac {
  width: 100%;
  height: 250px;
  position: relative;
  /* background-repeat: no-repeat;
  background-size: 100% 100%; */
}
.didi {
  position: absolute;
  bottom: 0.6rem;
  right: 0.6rem;
  font-size: 15px;
  z-index: 39 !important;
  color: white;
}
.particulars-name {
  padding-top: 0.8rem;
  width: 100%;
  height: 7.5rem;
  background: #ffffff;
}
/* 粘性布局整体 */
.message-main {
  width: 100%;
  /* height: 33rem; */
  /* margin-top: 0.8rem; */
  background-color: #ffffff;
}
/* 广告sign */
.sign {
  width: 80%;
  height: 4rem;
  margin: 0.8rem auto;
  border-radius: 10px;
  background-color: #f9f9f9;
  position: relative;
}
.sign-one {
  display: inline-block;
  width: 30%;
  /* height: 4rem; */
  text-align: center;
}
.sign-two {
  display: inline-block;
  width: 30%;
  /* height: 4rem; */
  text-align: center;
}
.sign-two::before {
  content: "|";
  position: absolute;
  top: 1.2rem;
  left: 3.8rem;
  color: silver;
}
.sign-three {
  display: inline-block;
  width: 30%;
  /* height: 4rem; */
  text-align: center;
}

.sign-two::after {
  content: "|";
  position: absolute;
  top: 1.2rem;
  right: 4.3rem;
  color: silver;
}

.sign-pone {
  font-size: 17px;
  color: #ff0000;
}
.sign-ptwo {
  font-size: 13px;
  color: silver;
}
.ball {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  /* background: #fdd64d; */
  background: linear-gradient(to right, #ffed55, #fcc245);
}
.nearby {
  display: inline-block;
  width: 1.5rem;
  font-size: 13px;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 20px;
  background: #f5f5f5;
  color: #fda758;
}
.carshop {
  /* position: relative; */
  width: 100%;
  height: 10rem;
}
.carmap {
  width: 100%;
  height: 7rem;
}
.dianmain {
  width: 100%;
  height: 3rem;
  display: flex;
}
.diantop {
  display: block;
  font-size: 16px;
}
.dianbottom {
  margin-top: 0.3rem;
  display: block;
  font-size: 14px;
  color: #a7a7a7;
}
.dianleft {
  display: block;
  width: 15%;
  height: 2rem;
  margin: auto 0.2rem auto 0.2rem;
  background: #fcc245;
  border-radius: 10px;
}
.dianright {
  display: block;
  width: 75%;
  height: 2rem;
  font-weight: 500;
  margin: auto 0;
}
.dianjian {
  display: block;
  width: 10%;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 20px;
  margin: auto 0;
}
.amap-logo {
  display: none !important;
}
.amap-copyright {
  opacity: 0 !important;
}

/* 购车方式对比 */
.buypk {
  width: 100%;
  height: 19rem;
  background: #ffffff;
  /* padding-bottom: 0.5rem; */
}
.buymethod {
  width: 80%;
  height: 1.6rem;
  line-height: 1.6rem;
  margin: 0.8rem auto;
  position: relative;
}
.buyapp {
  display: inline-block;
  font-size: 17px;
  width: 48%;
  height: 1.6rem;
  line-height: 1.6rem;
  background-color: #ffed55;
  text-align: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.pk {
  position: absolute;
  top: 0rem;
  right: 5.8rem;
  width: 1.7rem;
  height: 1.7rem;
  line-height: 1.7rem;
  font-size: 17px;
  color: #ffed55;
  background: #3f3f3f;
  border-radius: 50%;
  text-align: center;
}
.buyother {
  display: inline-block;
  font-size: 17px;
  width: 48%;
  height: 1.6rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #eeeeee;
  text-align: center;
}
/* pk卡片 */
.shopping-way {
  width: 92%;
  height: 12rem;
  margin: 0 auto;
}
.shopping-left {
  float: left;
  text-align: left;
  /* padding-right: 0.5rem; */
  width: 49%;
  height: 12rem;
  background-color: #ffffff;
}
.shopping-right {
  /* padding-left: 0.5rem; */
  text-align: left;
  display: inline-block;
  width: 49%;
  height: 12rem;
  background-color: #f5f5f5;
}

/* 车辆信息 */
.car-message {
  width: 100%;
  height: 14rem;
  background-color: #fff;
}
.message-cellmain {
  width: 78%;
  margin: 0 auto;
}
.message-cell {
  position: relative;
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid silver;
}
.message-cell span:first-child {
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  font-size: 13px;
  color: #a7a7a7;
}
.message-cell span:last-child {
  position: absolute;
  right: 0;
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  font-size: 13px;
  color: #808080;
}
.checkbutton {
  margin: 0.5rem auto;
  border-radius: 20px;
  font-size: 14px;
  text-align: center;
  width: 5rem;
  height: 1.3rem;
  line-height: 1.3rem;
  background: linear-gradient(to right, hsla(59, 100%, 62%, 0.938), #ffa81b);
}
/* 亮点 */
.brightport {
  width: 100%;
  background-color: #ffffff;
}
/* 公用标题 */
.bright-title {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.8rem;
  color: #a7a7a7;
  font-size: 16px;
  text-align: center;
}
.bright-title::before {
  content: "_______";
  color: #a7a7a7;
  position: relative;
  top: -0.25rem;
  left: -0.9rem;
}

.bright-title::after {
  content: "_______";
  color: #a7a7a7;
  position: relative;
  top: -0.25rem;
  left: 0.9rem;
}
.bright-img {
  width: 100%;
  height: 9rem;

  background-size: 100% 100%;
  margin: 0.7rem 0;
}
.bright-p {
  width: 90%;
  /* height: 5rem; */
  /* background: red; */
  color: #424242;
  margin: 0 auto 1rem auto;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
}

.bright-block {
  display: flex;
  width: 90%;
  height: 6rem;
  margin: 0 auto;
  /* background-color: red; */
}
.bright-block-p {
  display: inline-block;
  width: 50%;
  /* height: 6rem; */
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 13px;
  color: #424242;
  line-height: 1rem;
}
.bright-block-img {
  display: inline-block;
  width: 50%;
  height: 6rem;
}
/* 展示图片 */
.showpicture {
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
}
.portimg {
  background-size: 100%;
  width: 30%;
  height: 6rem;
}
/* 购车须知 */
.mustknow {
  width: 100%;
  background: #ffffff;
  margin-bottom: 2.4rem;
}
.module {
  width: 80%;
  height: 4rem;
  margin: 0rem auto 0 auto;
  /* background-color: #fcc245; */
}

/* 底部固定 */
.bottom-fix {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 2.4rem;
  /* line-height: 2.4rem; */
  background-color: #ffffff;
}
.focus {
  display: inline-block;
  width: 2rem;
  height: 2.4rem;
  text-align: center;
  margin-left: 1rem;
}
.focus i {
  margin-top: 0.2rem;
  display: block;
  font-size: 25px;
}

.focus p {
  margin-top: 0;
  font-size: 14px;
}
.headset {
  display: inline-block;
  width: 2rem;
  height: 2.4rem;
  text-align: center;
  margin-left: 1rem;
}
.headset i {
  margin-top: 0.2rem;
  display: block;
  font-size: 25px;
}
.headset p {
  margin-top: 0;
  font-size: 14px;
}
.zixun {
  display: inline-block;
  display: flex;
  font-size: 14px;
  width: 9rem;
  height: 1.8rem;
  line-height: 1.8rem;
  background: linear-gradient(to right, #ffef5e, #ffa81b);
  border-radius: 20px;
  margin: 0.3rem 0 0.6rem 0.5rem;
  font-weight: 400;
}
.zixunone {
  display: inline-block;
  width: 49%;
  text-align: center;
}
.zixunthree {
  display: inline-block;
  width: 49%;
  text-align: center;
}
.vux-tab-ink-bar-transition-backward {
  background: #ffa81b !important;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  color: #ffa81b;
  border-bottom: 3px solid #ffa81b;
}

/* 蒙曾 */
.showdialog {
  width: 100%;
  height: 10rem;
  z-index: 555;
}
.showdialog-one {
  font-size: 17px;
  width: 95%;
  margin: 0 auto;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-bottom: 1px solid silver;
}
.showdialog-one span:last-child {
  position: relative;
  left: 5.5rem;
}
.showdialog-two {
  position: relative;
  width: 95%;
  margin: 0 auto;
  height: 2rem;
  line-height: 2rem;
  border-bottom: 1px solid silver;
}
.showdialog-three {
  position: relative;
  width: 95%;
  margin: 0 auto;
  height: 2rem;
  line-height: 2rem;
}
.showdialog-spana {
  font-size: 17px;
}
.showdialog-spanb {
  font-size: 15px;
  color: #858585;
  position: absolute;
  top: 0.1rem;
  left: 5rem;
}
.showdialog-four {
  width: 50%;
  height: 1.3rem;
  margin: 0.8rem auto 0 auto;
  line-height: 1.3rem;
  background: linear-gradient(to right, #ffef5e, #ffa81b);
  text-align: center;
  border-radius: 20px;
  font-size: 16px;
}
/* 微信分享 */
.fenkuai {
  width: 100%;
  display: flex;
}
.fenkuai-son {
  display: inline-block;
  text-align: center;
  width: 3rem;
  height: 3rem;
}
</style>