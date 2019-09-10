<template>
  <div>
    <van-nav-bar title="预约详情" left-arrow @click-left="onClickLeft" fixed/>
    <div style="margin-top:2rem"></div>
    <div class="appoint-top">
       <img class="top-left" :src="'http://www.lliangche.com/'+showinfo.CarBannerImg" alt="">
       <div class="top-right">
           <p style="margin-top:0.6rem;margin-left:0.6rem;font-size:17px;">{{showinfo.CarName}}</p>
           <p style="color:#666666;font-size:13px;margin-left:0.6rem;">{{showinfo.CarModel}}</p>
       </div>
    </div>
    <div style="width:100%;background:#ffffff;">
    <div style="width:90%;margin:0 auto">

    <p><i style="font-size:30px" class="iconfont">&#xe689;</i><span style="font-szie:20px;margin-left:0.8rem;">已为您安排购车顾问</span></p>
    <p style="font-size:14px;color:silver">请保持电话畅通，等待购车顾问联系！您也可以直接联系购车顾问进行咨询</p>
    <div style="width:100%;height:3rem;display:flex">
      <div class="main-left"></div>
      <div class="main-right">
          <p style="margin:0;margin-left:.7rem;font-size:14px;color:silver;">杨玉山</p>
          <p style="margin:0;margin-left:.7rem;font-size:14px;color:silver;">
              <span>金牌购车顾问</span>
              <span style="margin-left:5rem;"><i class="iconfont">&#xe60d;</i>联系顾问</span>
          </p>
      </div>
    </div>
    </div>
</div>
    <!-- 店铺详情 -->
    <div style="padding-left:0.8rem;background:#ffffff">
    <p><i style="font-size:30px" class="iconfont">&#xe60a;</i><span style="margin-left:14px">店铺详情</span></p>
    <p style="font-size:16px;">杭州智檤汽车销售公司</p>
    <p style="color:silver;font-size:16px;">{{showinfo.CarUserAddress}}</p>
    <p style="color:silver;font-size:16px;"><i  class="iconfont">&#xe661;</i><span>www.lliangche.com</span> <i style="margin-left:2rem" class="iconfont">&#xe60d;</i><span><a style="color:silver;font-size:16px;" href="tel:0571-87612992">0571-87612992 </a></span></p>
    </div>
<div style="height:11.5rem;padding-left:0.8rem;background:#ffffff" >
    <p><i style="font-size:30px" class="iconfont">&#xe699;</i><span style="margin-left:14px">常见问题</span></p>
    <p style="font-size:16px;" v-for="(i,index) in list" :key='index'  @click="articledetail(i.ArticleId)">{{i.ArticleTitle}}</p>
    <p style="font-size:16px;margin-bottom:0rem;">更多问题></p>
</div>
     
  
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      iu:'',
      list:[],
      showinfo:[]
    };
  },
  methods: {
    // 请求预约详情
    xiangqing(){
       request.post(this.$api+"/Wechat/MyAppointmentDetail",{
           Id:this.iu,
            
       }).then(res=>{
        //  console.log(res.data)
       this.showinfo=res.data.Data.info
       }).catch(res=>{
          console.log(err)
       })
    },
    onClickLeft() {
      this.$router.push('/yuyuelist');
    },
    articledetail(id){
      console.log(id)
      this.$router.push({path:`/getarticledetail/${id}`})

    },
    ArticleInfoList(){
      request.post(this.$api+"/Wechat/GetArticleInfoList", {
         'CategoryCode':'党内公示',
         'page':1,
         'Rows':3
        })
        .then(res => {
                 console.log(res.data.Data.List)
                this.list=res.data.Data.List

          })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created(){
    this.ArticleInfoList()
  },
  mounted(){
    // console.log(this.$route.query.xiang)
    this.iu=this.$route.query.xiang

    this.xiangqing()
  }
};
</script>
<style scoped>
.van-nav-bar__left ::before {
  color: black;
}
.appoint-top{
    width: 100%;
    height: 4rem;
    background-color: #ffffff;
    display: flex;
}
.top-left{
    display: inline-block;
    width: 5rem;
    height: 3rem;
    margin-top: .3rem;
    margin-left: 0.3rem;
    border-radius: 50%;
    background-size: 100% 100%;
}
.top-right{
    display: inline-block;
      height: 3rem;
}
.main-left{
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    /* background: red; */
    border-radius: 50%;
}
.main-right{
    display: inline-block;
}
</style>