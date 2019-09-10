<template>
  <div>
    <!-- 图片 -->
    <div class="storeimg" style="position:relative">
      <img class="storeimg" :src="'http://www.lliangche.com/'+this.beijing" alt="">
      <!-- 向左箭头 -->
      <span @click="toleft" style="position:absolute;top:.8rem;left:.6rem;z-index:555;font-size:16px;color:#ffffff;">< 返回</span>
      <div class="storemain">
        <p style="font-size:17px;margin-bottom:0;margin-left:0.8rem;">{{name}}</p>
        <p style="font-size:14px;margin-top:0.5rem;margin-left:0.8rem;color:silver">{{address}}</p>
        <!-- <van-search
          background="#ffffff"
          class="inputbox"
          input-align="center"
          shape="round"
          placeholder="请输入搜索关键词"
          v-model="value"
        /> -->
        <!-- 导航 -->
        <ul class="daohang">
          <li class="daohangleft" @click="xinc">
            <span ref="xinche">新车</span>
          </li>
          <li class="daohangright" @click="jiuc">
            <span ref="ershouche">二手车</span>
          </li>
        </ul>
        <div class="xinche">
          <div class="list-son" >
            <!-- <div  class="main-block" v-for="(i,index) in list" :key="index" @click="ordercar(i.Id)">
              <img class="block-img" :src="'http://www.lliangche.com'+i.BannerImg" alt="">
              <div class="block-right" v-for="item in i.PurchasePlanList.slice(0,1)" :key="item.Id">
                <p style="font-size:16px;margin:0"  v-text="i.Name"></p>
                <p style="font-size:15px;color:silver;margin-top:0.3rem;margin-bottom:0.3rem" v-text="i.BodyWorkType"></p>
                <p   style="font-size:16px;color:red;margin-top:0;margin-bottom:0.3rem">首付<span>{{item.FirstPayment}}</span>万</p>
                <p style="color:red;font-size:16px;margin:0">月供<span>{{item.MonthPay}}</span>元</p>

            </div>
            </div> -->
 <div
          v-for="(i,index) in list"
          :key="index"
          @click="tomore(i.Id)"
          class="newcarlist-content"
        >
          <img :src="'http://www.lliangche.com'+i.BannerImg" class="newcarlist-left" alt>
          <div class="newcarlist-right">
            <p style="font-size:14px;font-weight:700">
              {{i.Name}}
              <span>{{i.CarModel }}</span>
            </p>
             <p class="car-piece"  style="color:red;margin-left:1.55rem;margin-top:0.1rem;font-size:15px">批发价:<span style="font-size:22px">{{i.InsidePrice|xiaoshu}}</span>万</p>
            <p class="car-month"  style="margin-top:0.1rem;font-size:12px">指导价:{{i.GuidePrice | xiaoshu}}万<span style="margin-left:.6rem;color:black">↓{{i.GuidePrice-i.InsidePrice | xiaoshu}}万</span></p>
          <p style="font-size:16px;margin-left:.3rem;">
              <span class="cartag" v-for="(t,index) in i.TagNameList.slice(0,2)" :key="index">{{t}}</span>
            </p>
          </div>
        </div>

          </div>
        </div>
      </div>
      <div class="concern" v-if="yijing"  @click="guanzhu">关注</div>
      <div v-else  class="concerntwo"  @click="guanzhu">已关注</div>
    </div>

<van-popup v-model="show" position="bottom" :overlay="true">
      <div class="showdialog">
        <div class="showdialog-one">
          <span>马上咨询</span>
          <span @click="off">x</span>
        </div>
        <div class="showdialog-two">
          <span class="showdialog-spana">联系人</span>
          <span class="showdialog-spanb">{{name}}</span>
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
    <!-- 底部 -->
    <div class="storebottom">
      <div @click="zixun">马上咨询</div>
    </div>
  </div>
</template>
<script>
import {Toast} from 'vant'
import request from '@/utils/request'
export default {
  data() {
    return {
      beijing:'',
      name:'',
      myconcernid:0,
      yijing:true,
      address:'',
      show:false,
      id:0,
      xin:true,
      active: 0,
      list: [
      
      ],
     
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
    tomore(id){
        // console.log(id)
        this.$router.push({
        path: `/particulars/${id}`
      });
    },
// 判断
panduan(){
   if (window.sessionStorage.getItem("isguan") != 0) {
        this.yijing = false;
      } else {
        this.yijing = true;
      }
},

  // 关注
  guanzhu(){
if (this.yijing == true) {
   
        request
          .post(this.$api+"/Wechat/AddMyConcern", {
            Type: 1,
            CarId:1,
            CarUserId: this.id
          })
          .then(res => {
            if (res.data.IsSuccess == false) {
              Toast("请先登录");
            }else{
              this.yijing = false;
               Toast("关注成功");
            this.myconcernid=res.data.Data;
            }
               
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        //  如果直接走这里，sessionstroge里边的值不为0，
        // console.log(22222222222222222222222222222)
        if(this.myconcernid==0) {
          this.yijing = true;
          Toast("取消关注");
          request
            .post(this.$api+"/Wechat/DelMyConcern", {
              Id:window.sessionStorage.getItem("isguan")
            })
            .then(res => {
              console.log("取消成功");
              this.myconcernid = 0;
            })
            .catch(err => {
              console.log(err);
            });
        }else{
          this.yijing = true;
        
          Toast("取消关注");
          request
            .post(this.$api+"/Wechat/DelMyConcern", {
              Id: this.myconcernid
            })
            .then(res =>{
              console.log("取消成功");
              this.myconcernid = 0;
            })
            .catch(err => {
              console.log(err);
            });
        }
      }

  },


  zixun() {
      this.show = true;
    },
    off() {
      this.show = false;
    },

    getlist(){
     
      request.post(this.$api+"/Wechat/GetUserShoplistByUserId",{
      
        UserId:this.id,
        Page:1,
        Rows:10
      }).then(res=>{
       this.name=res.data.Data.UserName
       this.beijing=res.data.Data.ShopImg
        // console.log(res.data)
        this.address=res.data.Data.CarUserAddress
        var isguanzhu =Number(res.data.Data.MyConcernId);
          console.log(isguanzhu);
        window.sessionStorage.setItem("isguan", isguanzhu);
            this.panduan()
      }).catch(err=>{
        console.log(err)
      })

    },
    
    toleft() {
      this.$router.back(-1);
    },
    ordercar(id) {
      this.$router.push({
        path:`/particulars/${id}`
      })
    },
    xinc(){
  
      this.$refs.ershouche.style.borderBottom='none'
      this.$refs.xinche.style.borderBottom='1px solid #feef5e'
         request
        .post(this.$api+"/Wechat/GetUserShoplistByUserId", {
         Type:1,
           UserId:this.id,
        Page:1,
        Rows:10
        })
        .then(res => {
                 console.log(res.data.Data.list)
                 this.list=res.data.Data.list
                //  var arr=res.data.Data.List;
                //  for(let i=0;i<arr.length;i++){
                //    this.cartaglist.push(arr[i].CarTagList)
                //  }
                //  console.log(this.cartaglist)
                
          })
        .catch(err => {
          console.log(err);
        });
    },
    jiuc(){
      
      this.$refs.ershouche.style.borderBottom='1px solid #feef5e'
      this.$refs.xinche.style.borderBottom='none'
      request
        .post(this.$api+"/Wechat/GetUserShoplistByUserId", {
          Type:2,
           UserId:this.id,
        Page:1,
        Rows:10
         
        })
        .then(res => {
          console.log(res.data.Data.list);
          this.list = res.data.Data.list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted(){
    this.id=this.$route.query.id
    // console.log(this.id)
    this.getlist()
    this.jiuc()
    this.xinc()
    

  }
};
</script>
<style scoped>
.storeimg {
  position: relative;
  width: 100%;
  height: 9rem;
  background-size: 100% 100%;
  /* background: url("../assets/images/96d86aaa7bea864906818732d78ac70.png"); */
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
  /* height: 7rem; */
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
.concerntwo{
   position: absolute;
  right: 2rem;
  top: 7rem;
  width: 3rem;
  font-size: 14px;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  background: red;
  color:white;
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

.daohang {
  width: 100%;
  height: 2rem;
  font-size: 16px;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 11;
}
.daohangleft {
  width: 50%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.daohangleft > span {
  display: inline-block;
  width: 3rem;
}
.daohangright > span {
  display: inline-block;
  width: 3rem;
}
.daohangright {
  width: 50%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
/* 内容 */
.list-son {
  margin-bottom: 2rem;
}
.main-block{
  position: relative;
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
}
.block-img{

    display: inline-block;
    width: 38%;
    height: 3.8rem;
    /* margin-left: 0.4rem; */
    margin-top: .7rem;
}
.block-right{
    margin-left: 0.6rem;
    display: inline-block;
    width: 60%;
    height: 4rem;
    margin-top: .5rem;
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


/* hou */
.newcarlist-content {
  width:100%;
  height: 5rem;
  margin: 0rem auto;
  display: flex;
  padding: 0.3rem 0rem;

  border-bottom: 1px solid silver;
}
.newcarlist-left {
  display: inline-block;
  width: 38%;
  height: 3.6rem;
  margin-top: 0.7rem;
  margin-left: 0.6rem;
  background-size: 100% 100%;
}
.newcarlist-right {
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 55%;
  height: 5rem;
  /* background-color: aquamarine; */
}
.newcarlist-right p {
  margin: 0 0 0 0.5rem;
}
.cartag {
 display: inline-block;
  width: 2.4rem;
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