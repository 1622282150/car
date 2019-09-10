<template>
  <div>
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" fixed/>
         <div style="width:100%;height:2rem;"></div>
          <div  v-show="this.list==''"  style="font-size:14px;color:#666666;text-align:center;margin-top:2rem">暂无数据...</div>
         <div class="orderform" v-for="(i,index) in list" :key=index>
         <img class="orderform-left"  :src="'http://www.lliangche.com/'+i.BannerImg" alt="">
           
           <div class="orderform-right" >
              <p style="margin:0;font-size:16px;margin-left:0.4rem;margin-top:0.5rem;">{{i.Name}}</p>
              <p style="margin:0;font-size:16px;margin-left:0.4rem;margin-top:0.5rem;">{{i.CarModel}}</p>
              <!-- <p  @click="look(i.Id,i.Status)" style="color:silver;margin:0;font-size:14px;margin-left:0.4rem;margin-top:0.8rem;">查看详情></p> -->
               <div v-show="i.Status==2" class="audit"></div>
               <div v-show="i.Status==3" class="audit-false"></div>
           </div>

         </div>


     
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data() {
    return {
        active:0,
        list:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    look(id,status){
        
        if(status==2){
          // 跳转账单详情
          this.$router.push({
            path:'/requirezhi',
            query:{
              id:id
            }
          })
        }else{
          // 跳转预约详情
          this.$router.push({
            path:'/appointment',
            query:{
            xiang:id
          }})
        }
        // this.$router.push({
        //   path:'/dingjin',
        //   query:{
        //     id:id
        //   }
        // })
    },
    getorderlist(){
      request.post(this.$api+"/Wechat/GetMySaleOrderList",{
         
     "Page":1,
     "Rows": 20
      }).then(res=>{
         this.list=res.data.Data.list
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  created(){
    this.getorderlist();
  }
};
</script>
<style scoped>
.van-nav-bar__left ::before {
  color: black;
}
.orderform{
  background: #ffffff;
    position: relative;
    width: 100%;
    height: 6rem;
    display: flex;
    border-bottom: 1px solid #f6f6f6;
    /* z-index: -1; */
}
.orderform-left{
  width: 30%;
  height: 3rem;
  margin-top: .5rem;
  margin-left: 1rem;
  background: url('../assets/images/1111.png') no-repeat;
  background-size: 100% 100%;
}
.orderform-right{
display: inline-block;
 width: 60%;
  height: 5rem;
}
.audit{
  position: absolute;
  top: 0;
  right: 0;
  width:2rem;
  height: 2rem; 
  background: url('../assets/images/412cc6a1380c1dc7d218426bd3d663d.png') no-repeat;
  background-size: 100%;
  z-index: 1;
}
.audit-false{
  position: absolute;
  top: 0;
  right: 0;
  width:2rem;
  height: 2rem; 
  background: url('../assets/images/c05c113fa5ccfdb946599d72620939e.png') no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}

</style>