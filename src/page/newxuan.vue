<template>
  <div>
    <van-nav-bar title="选择品牌" left-arrow @click-left="onClickLeft" fixed/>
    <div style="width:100%;height:2rem;"></div>
   <!-- <div v-for="(i,index) in list" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>0
   </div> -->
  <mt-index-list>
  <mt-index-section index="A">
    <div v-for="(i,index) in lista" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>

  </mt-index-section>
  <mt-index-section index="B">
    <div v-for="(i,index) in listb" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="C">
    <div v-for="(i,index) in listc" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="D">
    <div v-for="(i,index) in listd" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="E">
    <div v-for="(i,index) in liste" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="F">
    <div v-for="(i,index) in listf" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="G">
    <div v-for="(i,index) in listg" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="H">
    <div v-for="(i,index) in listh" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="I">
    <div v-for="(i,index) in listi" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="J">
    <div v-for="(i,index) in listj" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="K">
    <div v-for="(i,index) in listk" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="L">
    <div v-for="(i,index) in listl" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="M">
    <div v-for="(i,index) in listm" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="N">
    <div v-for="(i,index) in listn" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="O">
    <div v-for="(i,index) in listo" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="P">
    <div v-for="(i,index) in listp" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="Q">
    <div v-for="(i,index) in listq" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="R">
    <div v-for="(i,index) in listr" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="S">
    <div v-for="(i,index) in lists" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="T">
    <div v-for="(i,index) in listt" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="U">
    <div v-for="(i,index) in listu" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="V">
    <div v-for="(i,index) in listv" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="W">
    <div v-for="(i,index) in listw" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="X">
    <div v-for="(i,index) in listx" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
  <mt-index-section index="Y">
    <div v-for="(i,index) in listy" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
  <mt-index-section index="Z">
   <div v-for="(i,index) in listz" :key=index>
     <div @click="tomore(i.Id)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.Name}}</div>
     </div>
   </div>
  </mt-index-section>
</mt-index-list>

  </div>
</template>
<script>
import { IndexList, IndexSection } from 'mint-ui';

import request from '@/utils/request'
export default {
  data() {
    return {
      list0:[],
      list:[],
      lista:[],
      listb:[],
      listc:[],
      listd:[],
      liste:[],
      listf:[],
      listg:[],
      listh:[],
      listi:[],
      listj:[],
      listk:[],
      listl:[],
      listm:[],
      listn:[],
      listo:[],
      listp:[],
      listq:[],
      listr:[],
      lists:[],
      listt:[],
      listu:[],
      listv:[],
      listw:[],
      listx:[],
      listy:[],
      listz:[],
    };
  },
  methods: {
    // 获取车标签
    getlist(){
        request
        .post(this.$api+"/Wechat/GetBrandList", {
          // IsHome:1,
          // Rows:12
          Rows:1000
        })
        .then(res => {
          this.list=res.data.Data.list;
          this.list.forEach((item)=>{
          if(item.Series=='A'){
            this.lista.push(item)
          }else if(item.Series=='B'){
              this.listb.push(item)
          }else if(item.Series=='C'){
              this.listc.push(item)
          }else if(item.Series=='D'){
              this.listd.push(item)
          }else if(item.Series=='E'){
              this.liste.push(item)
          }else if(item.Series=='F'){
              this.listf.push(item)
          }else if(item.Series=='G'){
              this.listg.push(item)
          }else if(item.Series=='H'){
              this.listh.push(item)
          }else if(item.Series=='I'){
              this.listi.push(item)
          }else if(item.Series=='J'){
              this.listj.push(item)
          }else if(item.Series=='K'){
              this.listk.push(item)
          }else if(item.Series=='L'){
              this.listl.push(item)
          }else if(item.Series=='M'){
              this.listm.push(item)
          }else if(item.Series=='N'){
              this.listn.push(item)
          }else if(item.Series=='O'){
              this.listo.push(item)
          }else if(item.Series=='P'){
              this.listp.push(item)
          }else if(item.Series=='Q'){
              this.listq.push(item)
          }else if(item.Series=='R'){
              this.listr.push(item)
          }else if(item.Series=='S'){
              this.lists.push(item)
          }else if(item.Series=='T'){
              this.listt.push(item)
          }else if(item.Series=='U'){
              this.listu.push(item)
          }else if(item.Series=='V'){
              this.listv.push(item)
          }else if(item.Series=='W'){
              this.listw.push(item)
          }else if(item.Series=='X'){
              this.listx.push(item)
          }else if(item.Series=='Y'){
              this.listy.push(item)
          }else if(item.Series=='Z'){
              this.listz.push(item)
          }else {
              this.list0.push(item)
          }
              
            
          })
         
          // console.log(res.data);
        //  var list = res.data.Data.list;
        //  for(let i=0;i<list.length;i++){
        //    if(list[i].Series=='A'){
        //      this.lista.push(list[i])
        //    }
        //  }
        //  console.log(this.lista)
          // this.id = res.data.Data.list.Id;
        }).catch(err => {
          console.log(err);
        });
    },
    //进入品牌详情
   tomore(id){
         this.$router.push({
        path:'/newcar',
        query:{
          BrandId:id
        }
      })
   },

    onClickLeft() {
      this.$router.back(-1);
    }
  },
  mounted(){
    this.getlist()
  }
};
</script>
<style scoped>
.van-icon::before{
  color:black
}
.tupian{
  display: inline-block;
  width: 12%;
  height: 1.5rem;
}
.name{
display: inline-block;
font-size: 14px;
width: 88%;
height: 1.5rem;
line-height: 1.5rem;
border-bottom: 1px solid #e6e6e6;
}
.imgone{
  width: .8rem;
  height: .8rem;
  background-size: 100% 100%;
  margin-left: .5rem;
  margin-top: .2rem;
}
</style>