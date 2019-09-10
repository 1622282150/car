<template>
  <div ref="paging" style="background:#ffffff">
    <div class="maintop">
      <div class="fenxiangma" @click="fenxiangma">我的邀请码</div>
      <!-- <div class="erwei"><i class="iconfont"  style="font-size:30px;">&#xe646;</i></div> -->
      <!-- <div class="lingdang">
        <i class="iconfont" style="font-size:18px">&#xe600;</i>
      </div> -->
      <!-- 个人信息 -->
      <div class="gerenxinxi" >
      <span class="shoujihao">{{mobile}}<i @click="quziliao" style="position:relative;top:3px;color:black;font-size:25px;margin-left:.8rem;" class="iconfont">&#xe6d3;</i><span @click="quziliao" class="xiugai">修改</span></span>
      <img class="headphoto" @click="$router.push('/people')" v-if="!list.UserPhoto" src="../assets/images/touxiang.png" alt="">
        <img @click="$router.push('/people')"  v-else
          class="headphoto"
         :src="'http://47.110.11.114:8088/Content/Upload/Image/User/'+list.UserPhoto"
          alt
        >
        <!-- <div class="gerenxinxi-right">
          <span class="username">{{listname}}</span>
          <span class="shouji">{{mobile}}</span>
        </div> -->
      </div>

      <div class="smallbox">
        <div class="smallbox-left"   @click="qiyedaili">
          <i
            style="display:block;font-size:28px;margin-top:0.5rem !important;"
            class="iconfont"
          >&#xe7b7;</i>
          <p>企业代理</p>
        </div>
        <div class="smallbox-right" @click="gerendaili">
          <i style="display:block;font-size:28px;margin-top:0.5rem;" class="iconfont">&#xe607;</i>
          <p>个人代理</p>
        </div>
      </div>
    </div>
    <div style="width:100%;height:1rem;background:#ffffff"></div>
    <!-- 白框 -->
    <div class="mainbox">
      <div style="width:90%;margin:0 auto">
        <div class="box-top" @click="myfocuscar">
          <p>{{shoucanglen | showlen}}</p>
          <p class="box-topfont">收藏车辆</p>
        </div>
        <div @click="myfocusshop" class="box-top">
          <p>{{guanzhulen | showlen}}</p>
          <p class="box-topfont">关注店铺</p>
        </div>
        <div @click="yuyuelist" class="box-top">
          <p>{{yuyuelen | showlen}}</p>
          <p class="box-topfont">我的预约</p>
        </div>

        <van-cell to="/orderform" is-link>
          <i class="iconfont">&#xe61f;</i>
          <span class="vspan">我的订单</span>
        </van-cell>

        <!-- <van-cell to="/cardstock" is-link>
          <i class="iconfont">&#xe62a;</i>
          <span class="vspan">余额卡劵</span>
        </van-cell> -->
        <van-cell @click="fuwu" is-link>
          <i class="iconfont">&#xe65f;</i>
          <span class="vspan">易客服</span>
        </van-cell>
        <van-cell to="/shimingren" is-link>
          <i class="iconfont">&#xe662;</i>
          <span class="vspan">实名认证</span>
        </van-cell>
        <van-cell to="zhiren" is-link>
          <i class="iconfont">&#xe60e;</i>
          <span class="vspan">支付认证</span>
        </van-cell>

        <van-cell to="/set" is-link>
          <i class="iconfont">&#xe61c;</i>
          <span class="vspan">设置</span>
        </van-cell>
      </div>
    </div>

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
      status:'',
      IsAdmin:true,
      CourseCommentFlag:true,
      isqiye:'',
      useraccount:'',
      mobile:'',
      listname:'',
      shoucanglen: 0,
      guanzhulen: 0,
      yuyuelen: 0,
      list: [],
      fullheight: document.documentElement.clientHeight,
      active: 3,
      icon: {
        normal: require("../assets/images/形状-1@2x.png"),
        active: require("../assets/images/形状-1-拷贝-2@2x.png"),
        second: require("../assets/images/形状-2-拷贝-2@2x.png"),
        secondtwo: require("../assets/images/形状-2@2x.png"),
        three: require("../assets/images/形状-3-拷贝-2@2x.png"),
        threetwo: require("../assets/images/形状-3@2x.png"),
        four: require("../assets/images/形状-4-拷贝-2@2x.png"),
        fourtwo: require("../assets/images/形状-4@2x.png")
      }
    };
  },
  filters: {
    showlen(value){
        if(value==''){
         return 0
        }else{
          return value
        }
    },
    mobile(value) {
      let tel = value;
      tel = "" + tel;
      let tell = tel.substr(0, 3) + "****" + tel.substr(7);
      return tell;
    }
  },
  created() {
    this.wode();
  },
  mounted() {
    this.$refs.paging.style.height = this.fullheight + "px";
    console.log(document.documentElement.clientHeight);
  },
  methods: {
    fenxiangma(){
this.$router.push('/fenxiang')
    },
    // 去写资料
    quziliao(){
     this.$router.push('/set')
    },
// 企业代理点[]
qiyedaili(){
  console.log(this.status)
   if(this.IsAdmin==true&&this.CourseCommentFlag==true){
     this.$router.push('/distributorlist')
   }else if(this.IsAdmin==false&&this.status=='Normal'){
     this.$router.push('/certification')
   }else if(this.status=='UnAudited'||this.status=='Unapprove'){
      this.$router.push('/look')
   }
},
// 个人代理
gerendaili(){
    if(this.IsAdmin==true&&this.CourseCommentFlag==false){
     this.$router.push('/distributorlist')
   }else if(this.IsAdmin==false&&this.status=='Normal'){
       this.$router.push('/individualagent')
   }else if(this.status=='UnAudited'||this.status=='Unapprove'){
      this.$router.push('/look')
   }
},

       fuwu(){
 window.location.href = 'https://www16.53kf.com/m.php?kf_sign=TI5MTMTU1Oc5NDExMjQzMzY0ODgxMDA1NzIxMzQwNzY%3D&cid=72134076&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=0fd2a4c029cf14ee9e8f2b159a599573&u_stat_id=&talktitle=Document&tfrom=50&device=&zdkf_type=1&kf=&kflist=off'
// window.location.href="https://www5.53kf.com/m.php?kf_sign=TI4ODMTU1OI4OTExMjQzMzY0ODgxMDA1NjI3MjE2NTk%3D&cid=62721659&style=1&keyword=http%3A%2F%2Flocalhost%3A8080%2Fkefu.html&referer=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&guest_id=11243364881005&tpl=crystal_blue&uid=1b08c0fadd8afac0ca716e0ffa57256f&u_stat_id=&talktitle=Document&tfrom=51&device=&zdkf_type=1&kf=zlpxm1%40126.com&kflist=off&is_minchat=1&historylen=10&locahref=http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fkefu.html&fromopen=1#http://localhost:8080/static/kefu.html"
    },
    // 我的
    wode() {
      request
        .post(this.$api+"/Wechat/GetUserInfo", {})
        .then(res => {
          console.log(res.data.Type);
          if(res.data.Type==401){
            
            this.$router.push('/login')
              this.listname='未登录'
              this.mobile=''
          }else{
            this.status=res.data.Data.Status;
            this.list = res.data.Data;
            this.listname=localStorage.getItem('nicheng')
            this.mobile=res.data.Data.UserAccount
            this.IsAdmin=res.data.Data.IsAdmin
            this.CourseCommentFlag=res.data.Data.CourseCommentFlag
            
            window.localStorage.setItem('account',res.data.Data.UserAccount)
          }
          
          
        })
        .catch(err => {
          console.log(err);
        });
    },
    myfocuscar() {
      this.$router.push("/myfocus");
    },
    myfocusshop() {
      this.$router.push("/attentionshop");
    },
    yuyuelist() {
      this.$router.push("/yuyuelist");
    },
    // 收藏数
    shoucangshu() {
      request
        .post(this.$api+"/Wechat/GetMyConcernList", {
          Type: 2
        })
        .then(res => {
          this.shoucanglen = res.data.Data.list.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    guanzhushu() {
      request
        .post(this.$api+"/Wechat/GetMyConcernList", {
          Type: 1
        })
        .then(res => {
          this.guanzhulen = res.data.Data.list.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    yuyueshu(){
        request
        .post(this.$api+"/Wechat/GetMyAppointmentList", {
        
        })
        .then(res => {
          this.yuyuelen = res.data.Data.list.length;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.shoucangshu();
    this.guanzhushu()
    this.yuyueshu()
  }
};
</script>
<style scoped>
.van-cell {
  font-size: 16px;
  padding: 11px 20px;
}
.smallbox {
  position: absolute;
  top: 6rem;
  left: 3.1rem;
  width: 60%;
  height: 4rem;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  display: flex;
}
.smallbox-left {
  display: inline-block;
  width: 50%;
  height: 4rem;
  text-align: center;
}
.smallbox-left p {
  font-size: 14px;
  margin-top: 0.5rem;
}
.smallbox-right {
  display: inline-block;
  width: 50%;
  height: 4rem;
  text-align: center;
}
.smallbox-right p {
  font-size: 14px;
  margin-top: 0.5rem;
}
.maintop {
  position: relative;
  width: 100%;
  height: 9rem;
  display: flex;
  background: url("../assets/images/2e368ede5beb1510879cda9af47fd71.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.fenxiangma{
  position: absolute;
  top: .5rem;
  right: .5rem;
  font-size: 15px;

}
.erwei{
  position: absolute;
   z-index: 9999;
 top: 2rem;
  right: 1rem;
}
.lingdang {
  position: fixed;
  right: 0.5rem;
}
.gerenxinxi {
  position: relative;
  /* text-align: center; */
  width: 100%;
  height: 3rem;
  display: flex;
  margin-top: 1.5rem;
}
.xiugai{
  font-size: 14px;
  position: absolute;
  right: -1.2rem;
  top: 0.3rem;
}
.shoujihao{
  
 
  position: absolute;
  left: 6rem;
  bottom: -26px;
  font-size: 14px;
  color:black;
}
.gerenxinxi span {
  display: block;
}
.headphoto {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin-left: 6.5rem;
  /* background: darkslateblue; */
  border-radius: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* border:1px solid red; */
}
.username {
  display: inline-block;
  font-size: 20px;
  margin-top: 0.3rem;
  margin-left: 20px;
  font-weight: bold;
}

.mainbox {
  width: 100%;
  height: 18rem;
  background-color: #ffffff;
}
.box-top {
  width: 31%;
  display: inline-block;
  text-align: center;
}

.box-top p {
  font-size: 17px;
}

.vspan {
  margin-left: 0.5rem;
}
</style>