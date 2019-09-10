<template>
  <div>
    <van-nav-bar title="选择地址" left-arrow @click-left="onClickLeft" fixed/>
    <div style="width:100%;height:2rem;"></div>
   
   <!-- <div v-for="(i,index) in list" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
           <img class="imgone" :src="'http://www.lliangche.com/'+i.BrandImg" alt="">
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>0
   </div> -->
  <mt-index-list>
 <!-- <p class="mint-indexsection-index" style="font-size:14px;color:#666666">当前定位城市</p>
 <div  style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
        
        </div>
        <div class="name">{{message}}</div>
 </div> -->
  <mt-index-section index="A">
    <div v-for="(i,index) in lista" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
        
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>

  </mt-index-section>
  <mt-index-section index="B">
    <div v-for="(i,index) in listb" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="C">
    <div v-for="(i,index) in listc" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
           
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="D">
    <div v-for="(i,index) in listd" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
           
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="E">
    <div v-for="(i,index) in liste" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="F">
    <div v-for="(i,index) in listf" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
           
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="G">
    <div v-for="(i,index) in listg" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
         
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="H">
    <div v-for="(i,index) in listh" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="I">
    <div v-for="(i,index) in listi" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="J">
    <div v-for="(i,index) in listj" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
         
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="K">
    <div v-for="(i,index) in listk" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
         
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="L">
    <div v-for="(i,index) in listl" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
         
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="M">
    <div v-for="(i,index) in listm" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="N">
    <div v-for="(i,index) in listn" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
           
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="O">
    <div v-for="(i,index) in listo" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="P">
    <div v-for="(i,index) in listp" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
           
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="Q">
    <div v-for="(i,index) in listq" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="R">
    <div v-for="(i,index) in listr" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="S">
    <div v-for="(i,index) in lists" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="T">
    <div v-for="(i,index) in listt" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <!-- <mt-index-section index="U">
    <div v-for="(i,index) in listu" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="V">
    <div v-for="(i,index) in listv" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section> -->
   <mt-index-section index="W">
    <div v-for="(i,index) in listw" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
   <mt-index-section index="X">
    <div v-for="(i,index) in listx" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
  <mt-index-section index="Y">
    <div v-for="(i,index) in listy" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
     </div>
   </div>
  </mt-index-section>
  <mt-index-section index="Z">
   <div v-for="(i,index) in listz" :key=index>
     <div @click="tomore(i.CityName)" style="display:flex;width:100%;height:1.5rem;background:#ffffff;border-bottom: 1px solid #e6e6e6; ">
       
        <div class="tupian">
          
        </div>
        <div class="name">{{i.CityName}}</div>
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
      message:'',
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
        .post(this.$api+"/Wechat/GetCityCodeList", {
          // IsHome:1,
          // Rows:12
          Rows:1000
        })
        .then(res => {
          this.list=res.data.Data.list;
          this.list.forEach((item)=>{
          if(item.ABCCode=='A'){
            this.lista.push(item)
          }else if(item.ABCCode=='B'){
              this.listb.push(item)
          }else if(item.ABCCode=='C'){
              this.listc.push(item)
          }else if(item.ABCCode=='D'){
              this.listd.push(item)
          }else if(item.ABCCode=='E'){
              this.liste.push(item)
          }else if(item.ABCCode=='F'){
              this.listf.push(item)
          }else if(item.ABCCode=='G'){
              this.listg.push(item)
          }else if(item.ABCCode=='H'){
              this.listh.push(item)
          }else if(item.ABCCode=='I'){
              this.listi.push(item)
          }else if(item.ABCCode=='J'){
              this.listj.push(item)
          }else if(item.ABCCode=='K'){
              this.listk.push(item)
          }else if(item.ABCCode=='L'){
              this.listl.push(item)
          }else if(item.ABCCode=='M'){
              this.listm.push(item)
          }else if(item.ABCCode=='N'){
              this.listn.push(item)
          }else if(item.ABCCode=='O'){
              this.listo.push(item)
          }else if(item.ABCCode=='P'){
              this.listp.push(item)
          }else if(item.ABCCode=='Q'){
              this.listq.push(item)
          }else if(item.ABCCode=='R'){
              this.listr.push(item)
          }else if(item.ABCCode=='S'){
              this.lists.push(item)
          }else if(item.ABCCode=='T'){
              this.listt.push(item)
          }else if(item.ABCCode=='U'){
              this.listu.push(item)
          }else if(item.ABCCode=='V'){
              this.listv.push(item)
          }else if(item.ABCCode=='W'){
              this.listw.push(item)
          }else if(item.ABCCode=='X'){
              this.listx.push(item)
          }else if(item.ABCCode=='Y'){
              this.listy.push(item)
          }else if(item.ABCCode=='Z'){
              this.listz.push(item)
          }else {
              this.list0.push(item)
          }
              
            
          })
         
          // console.log(res.data);
        //  var list = res.data.Data.list;
        //  for(let i=0;i<list.length;i++){
        //    if(list[i].ABCCode=='A'){
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
   tomore(name){
  window.localStorage.setItem('name',name)
  this.$router.back(-1)
    //      this.$router.push({
    //     path:'/',
    //     query:{
    //       name:name
    //     }
    //   })
   },
// tomoreone(name){
// window.localStorage.setItem('name',name)
//   this.$router.back(-1)
// },
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
  width: 3%;
  height: 1.5rem;
}
.name{
display: inline-block;
font-size: 14px;
width: 97%;
height: 1.5rem;
line-height: 1.5rem;

}
.imgone{
  width: .8rem;
  height: .8rem;
  background-size: 100% 100%;
  margin-left: .5rem;
  margin-top: .2rem;
}
</style>