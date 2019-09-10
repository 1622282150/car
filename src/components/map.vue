<template>
  <div>
    <van-nav-bar
      style="height:2rem !important"
      title="地图"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- <div style="width:100%;height:2rem"></div> -->
    <div ref="paging" class="ditu">
      <!-- 地图放这里 -->
      <el-amap vid="amap" :center="center" :zoom="zoom" class="amap-demo">
        <el-amap-marker
          :position="marker.position"
          :visible="marker.visible"
          :draggable="marker.draggable"
        ></el-amap-marker>
      </el-amap>

      <div class="allstore">
        <div class="allstore-top">
          <img style="border-radius:10px !important" class="allstore-img" :src="'http://47.110.11.114:80/Content/Upload/Image/User/'+shopimg" alt>
          <div class="allstore-p">
            <p style="font-size:16px;margin:0;padding-top:.8rem;">{{shopname | xianzhi}}</p>
            <p style="color:silver;font-size:16px;margin:0;padding-top:0.5rem;">{{shopaddress| xianzhi}}</p>
            <!-- <p style="font-size:14px;margin:0;padding-top:0.5rem;">
            <i class="iconfont">&#xe601;</i>
            <span>{{i.juli}}m</span>
            <i style="margin-left:3rem;" class="iconfont">&#xe6d6;</i>
            <span style="color:silver">到这去</span>
            </p>-->
          </div>
        </div>
        <div style="display:flex">
          <div class="allstore-left" @click="jindian">
            <i class="iconfont">&#xe60a;</i>
            <span>进店</span>
          </div>
          <div class="allstore-right" @click="showdialog">
            <i class="iconfont">&#xe60d;</i>
            <span>咨询</span>
          </div>
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
          <span class="showdialog-spana">门店名称</span>
          <span class="showdialog-spanb">杭州元通4s店</span>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      byuserid: 0,
      shopimg: "",
      shopname: "",
      shopaddress: "",
      jing: "",
      wei: "",

      show: false,
      fullheight: document.documentElement.clientHeight,
      center: [120.170332, 30.328835],
      zoom: 13,
      marker: {
        position: [120.170332, 30.328835],
        visible: true,
        draggable: false
      }
    };
  },
  filters:{
    xianzhi(value){
      if(value.length>11){
        return value + '...'
      }else{
        return value
      }
    }
  },
  methods: {
    get(){
   this.byuserid = this.$route.query.byuserid;
    this.shopname = this.$route.query.shopname;
    this.shopaddress = this.$route.query.shopaddress;
    this.shopimg = this.$route.query.shopimg;
    this.jing = this.$route.query.jing;
    this.wei = this.$route.query.wei;
    this.center=[this.jing,this.wei]
    this.marker.position=[this.jing,this.wei]
    },
    jindian(){
     this.$router.push({path:"/store",
      query:{
        id:this.byuserid
      }});
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    showdialog() {
      this.show = true;
    },
    off() {
      this.show = false;
    }
  },
  mounted() {
    this.$refs.paging.style.height = this.fullheight + "px";
    console.log(this.$route.query);
   this.get();
  }
};
</script>
<style scoped>
.van-nav-bar__left ::before {
  color: black;
}
.ditu {
  width: 100%;
  /* height: 18rem; */
  /* background: red; */
}
.allstore {
  position: fixed;
  bottom: 1rem;
  left: 0.8rem;
  width: 90%;
  height: 6rem;
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
  width: 50%;
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