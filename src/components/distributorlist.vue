<template>
  <div>
    <!-- 全部门店 -->
    <div style="position: relative;">
      <van-nav-bar @click-left="onClickLeft" title="分销商列表" left-arrow/>
      <!-- <span class="address">
        地区
        <i class="iconfont">&#xe606;</i>
      </span> -->
    </div>
    <!-- 搜索框 -->
    <!-- <div class="seacc">
      <van-search
        class="inputbox"
        input-align="center"
        shape="round"
        placeholder="搜索分销商"
        v-model="value"
      />
    </div> -->
    <!-- 内容 -->
    <div style="margin-bottom:4rem;">
    <div class="allstore" v-for="(i,index) in list " :key=index>
      <div class="allstore-top">
        <img class="allstore-img" :src="'http://www.lliangche.com'+i.ShopImg" alt>
        <div class="allstore-p">
          <p style="font-size:16px;margin:0;padding-top:.8rem;">{{i.Name}}</p>
          <p style="color:silver;font-size:16px;margin:0;padding-top:0.5rem;">{{i.HomeAddress}}</p>
          <!-- <p style="font-size:14px;margin:0;padding-top:0.5rem;">
            <i class="iconfont">&#xe601;</i>
            <span>{{i.juli}}m</span>
            <i style="margin-left:3rem;" class="iconfont">&#xe6d6;</i>
            <span style="color:silver">到这去</span>
          </p> -->
        </div>
      </div>
      <div style="display:flex">
        <div class="allstore-left" @click="jindian(i.Id)">
          <i class="iconfont">&#xe60a;</i>
          <span>进店</span>
        </div>
        <div class="allstore-right" @click="showdialog(i.Name)">
          <i class="iconfont">&#xe60d;</i>
          <span>咨询</span>
        </div>
      </div>
      <van-popup v-model="show" position="bottom" :overlay="true">
      <div class="showdialog">
        <div class="showdialog-one">
          <span>马上咨询</span>
          <span @click="off">x</span>
        </div>
        <div class="showdialog-two">
          <span class="showdialog-spana">门店名称</span>
          <span class="showdialog-spanb">{{dianname}}</span>
        </div>
        <div class="showdialog-three">
          <span class="showdialog-spana">手机号</span>
          <span class="showdialog-spanb">0571-87612992</span>
        </div>
        <div class="showdialog-four"><a style="color:black;" href="tel:0571-87612992">马上咨询</a></div>
      </div>
    </van-popup>
    </div>
    <!-- 弹出层 -->
    
</div>
    

    <!-- 底部导航 -->
    <van-tabbar active-color="black" v-model="active">
      <van-tabbar-item  to="/distributorlist">
        <span>列表</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
       <van-tabbar-item :replace=true to="/mydistributor">
        <span>个人</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.one : icon.two">
      </van-tabbar-item>
      
    </van-tabbar>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {

  data() {
    return {
      dianname:'',
        active:0,
      value: "",
      show: false,
      icon: {
        normal:require('../assets/images/f637d363df0dee6cf574c4fff2729ef.png'),
        active:require('../assets/images/37b2c41355bff1ed25fc1b9db3005a9.png'),
        one:require('../assets/images/30307be0832c7c6777c43ddc731507e.png'),
        two:require('../assets/images/df32ed2be7724ce3dfbcc393bba51a2.png')
      },
      list: [
       
      ]
    };
  },
  methods: {
    getusershoplist(){
       request
        .post(this.$api+"/Wechat/GetUserShopList", {
          
        })
        .then(res => {
                 console.log(res.data.Data.list)
                 this.list=res.data.Data.list
          })
        .catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.push('/')
    },
    showdialog(dianname) {
      this.dianname=dianname
      this.show = true;
    },
    off() {
      this.show = false;
    },
    jindian(id) {

      this.$router.push({path:"/store",
      query:{
        id:id
      }});
    }
  },
  created(){
      this.getusershoplist();
  }
};
</script>
<style stoped>
.inputbox {
  width: 80% !important;
  margin: 0 auto;
}
.seacc {
  width: 100%;
  height: 2.5rem;
  background: #ffffff;
}
.van-nav-bar__left ::before {
  color: black;
}
.address {
  margin-top: 0.2rem;
  font-size: 16px;
  position: absolute;
  top: 0.3rem;
  right: 1rem;
  z-index: 100;
  color: silver;
}

.allstore {
  width: 90%;
  height: 6rem;
  margin: 0.8rem auto;
  background-color: #ffffff;
  border-radius: 10px;
}

.allstore-top {
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
}
.allstore-img {
  width: 4rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  margin-top: 0.9rem;
}
.allstore-p {
  margin-left: 0.5rem;
}
.allstore-left {
  text-align: center;
  font-size: 16px;
  width:50%;
  height: 1.5rem;
  line-height: 1.5rem;
}
.allstore-left:hover {
  background: #f5f5f5;
}

.allstore-right {
  font-size: 16px;
  width: 50%;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
}
.allstore-right:hover {
  background: #f5f5f5;
}
/* 蒙曾 */
.showdialog {
  width: 100%;
  height: 10rem;
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
</style>