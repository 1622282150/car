<template>
    <div ref="paging" style="width:100%;background:black;">
       <span
      @click="$router.go(-1)"
      style="position:fixed;top:.2rem;left:.6rem;color:white"
    >x</span>   
    <div class="top">
      <span class="titlename">{{name}}</span>
    </div>   
  <!-- 标签 -->
  <div class="biaoqian">{{title}}</div>
<div style="width:100%;height:250px;position:relative">
  
    <div class="didi">
     {{current+ 1 }}/{{len}}
    </div>
  <van-swipe  @change="onChange" style="margin-top:4.5rem;" :show-indicators="false">
  <van-swipe-item   :height="250" v-for="(i,index) in list" :key="index">
    <img style="width:100%;height:250px;background-size:100% 100%;"   :src="'http://www.lliangche.com'+i.ImgUrl" alt="">
  </van-swipe-item>
 
</van-swipe>


</div>
  
  
    </div>
</template>
<script>
import request from '@/utils/request'
    export default{
        data(){
        return{
          len:0,
          current:0,
             title:'外观',
             active:0,
             fullheight: document.documentElement.clientHeight,
             carid:0,
             name:0,
             list:[],
             listone:[],
             listtwo:[],
             listthree:[],
             listfour:[]
        }
       },
        methods:{
    onChange(index){
      // console.log(this.listone.length+this.listtwo.length+this.listthree.length)
    this.current = index;
    if(index+1>0&&index+1<=this.listone.length){
      this.title='外观'
    }else if(index+1>this.listone.length&&index+1<=this.listtwo.length+this.listone.length){
      this.title='中控'
    }else if(index+1>this.listtwo.length&&index+1<=this.listthree.length+this.listtwo.length+this.listone.length){
      this.title='座椅'
    }else if(index+1>this.listthree.length&&index+1<=this.listfour.length+this.listthree.length+this.listtwo.length+this.listone.length){
      this.title='细节'
    }
    
    },
  // 获取图片接口
   pictureone() {
      request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId:this.carid,
          Page: 1,
          Rows: 9,
          Type:'关注'
        })
        .then(res => {
         this.listone=res.data.Data.list
         this.list=this.list.concat(this.listone)
         request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId:this.carid,
          Page: 1,
          Rows: 9,
          Type:'中控'
        })
        .then(res => {
          this.listtwo=res.data.Data.list
         this.list=this.list.concat(this.listtwo)
          request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId:this.carid,
          Page: 1,
          Rows: 9,
          Type:'座椅'
        })
        .then(res => {
         this.listthree=res.data.Data.list
         this.list=this.list.concat(this.listthree)
          request
        .post(this.$api+"/Wechat/GetCarPicList", {
          CarId:this.carid,
          Page: 1,
          Rows: 9,
          Type:'细节'
        })
        .then(res => {
         this.listfour=res.data.Data.list
         this.list=this.list.concat(this.listfour)
         this.len=this.list.length;
        })
        .catch(err => {});
        })
        .catch(err => {});
        })
        .catch(err => {});
        })
        .catch(err => {});
    },
        },
        mounted(){
          this.$refs.paging.style.height = this.fullheight + "px";
          this.carid = this.$route.query.carid;
          this.name = this.$route.query.name;
           this.pictureone()
   
        }
    }
</script>
<style scoped>
    .top{
        width: 100%;
        color: white;
         height: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
    }
    .titlename{
  font-size: 16px;
  font-weight: 600;
    }
    .biaoqian{
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      color: white;
     text-align: center;
     font-size: 16px;
    }
    .didi{
 position: absolute;
  bottom:0.6rem;
  right: .6rem;
  font-size: 15px;
  z-index: 39 !important;
  color: white;
    }
</style>