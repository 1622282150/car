<template>
  <div>
    <div class="head">
      <span @click="onleft">
        <span class="left"><</span>
      </span>
      <input  ref="username" class="inputbox"  placeholder="快速搜车"  v-model="value" @keyup.enter="onsubmit(value)"/>
      <i class="iconfont">&#xe7de;</i>
    </div>
    <!-- 身体 -->
    <div class="remen">
       <span>热门搜索 </span>
          <ul >
          <li v-for="(i,index) in brandlist" :key="index"  @click="toshaixuan(i.Id)">
           {{i.Name}}
          </li>
          
          </ul> 
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
export default{
  data() {
    return {
      id:'',
      value: "",
      brandlist:[],
    };
  },
  methods: {
    onsubmit(value){
        console.log(value)
          this.$router.push({
        path:'/searchonelist',
        query:{
          name:value
        }
      })
    },
    toshaixuan(id){
      this.$router.push({
        path:'/searchonelist',
        query:{
          BrandId:id
        }
      })

    },
    onleft() {
      this.$router.back(-1);
    },
    gettitle(){
      request.post(this.$api+"/Wechat/GetBrandList",{

      }).then(res=>{
       console.log(res.data.Data.list)
       this.brandlist=res.data.Data.list.slice(0,8);
      }).catch(err=>{
       console.log(err)
      })
    },
  },
  mounted() {
   
   this.$refs.username.focus()
   this.gettitle();
  },
  
};
</script>
<style scoped>
.head {
  display: flex;
  width: 100%;
  height: 1.5rem;
  margin: 0 auto;
  background: #ffffff;
  /* border: 1px solid red; */
}
.left {
  display: inline-block;
  width: 2rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
}
.inputbox {
 display: inline-block !important;
  width: 70%;
  height: 0.9rem;
  margin-top: 0.3rem;
  border-radius: 20px;
  border: none;
  background:#f5f5f5;
  font-size: 12px;
  text-align: center;

}
.remen{
  width: 90%;
  margin:.9rem auto;
}
.remen>span{
 display: block;
 font-size: 16px;

}
.remen ul{
  width: 100%;
  height: 4rem;
  margin-top: .9rem;
  display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    overflow: hidden;
 
}
.remen li{
  width: 2.3rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 20px;
  background: #ffffff;
  text-align: center;
  margin-right: .5rem;
  font-size: 12px;
}
.head i{
  position: fixed;
  left: 3rem;
  top: .3rem;
  font-size: 20px;
}
</style>