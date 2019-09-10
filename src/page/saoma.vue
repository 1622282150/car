<template>
    <div>
        <div ref="certy" class="beijing"  style="width:100%;">
            <i @click="left" class="iconfont" style="position:fixed;top:1rem;left:.3rem;font-size:23px;color:#ffffff;">&#xe60b;</i>
             <!-- 二维码框 -->
             <div style="width:100%;height:4rem;"></div>
            <div class="kuang">
               <div class="title">&nbsp;&nbsp;扫描下方二维码支付定金</div>
               <img style="margin-top:2rem;" class="erwei" src="../assets/images/shoukuan.jpg" alt="">
               <!-- <div style="width:100%;height:2rem;background:#ffffff;text-align:center;font-size:14px;color:#5e5e5e">杭州车筑网络科技有限公司</div> -->
               
               <div style="width:100%;height:2rem;background:#ffffff;">
                   <div class="gongsi">杭州车筑网络科技有限公司</div>
               </div>
               <div class="bottom">
                   <div @click="queren" class="btn">确认</div>
               </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               xiang:0,
               fullheight: document.documentElement.clientHeight,
            }
        },
        mounted(){
            this.xiang=this.$route.query.xiang
            console.log(this.xiang)
            this.$refs.certy.style.height = this.fullheight + "px";
        },
        methods:{
         left(){
             this.$router.go(-1)
         },
         queren(){
           this.$router.replace({
             path:'/appointment',
             query:{
               xiang:this.xiang
             }
           })
         }
        }
    }
</script>
<style scoped>
    .beijing{
        background: url("../assets/images/tu8.png") no-repeat;
        background-size: 100% 100%;
    }
    .kuang{
        width: 85%;
        height:14rem;
        background: #ffffff;
        margin: 0 auto;
        
   }
   .title{
       width: 100%;
       height: 3rem;
       line-height: 3rem;
       font-size: 22px;
       font-weight: 500;
       background: #f5f5f5;
       color: black;

   }
   .erwei{
       display: block;
       width: 70%;
       height: 9rem;
       background-size: 100% 100%;
       margin:0 auto;
   }
   .bottom{
       position: relative;
       width: 100%;
       height: 2rem;
       background: #ffffff;
       border-bottom-left-radius: 10px;
       border-bottom-right-radius: 10px;
       border-top: 1px solid #e6e6e6;
   }
   .btn{
     position: absolute;
     right: .3rem;
     top: .35rem;
     width: 4rem;
     height: 1.3rem;
     line-height: 1.3rem;
     background: #ffb936;
     border-radius: 20px;
     text-align: center;
     font-size: 20px;
   }
   .gongsi{
       width: 55%;
       height: 0.9rem;
       line-height: .9rem;
       background:#dddddd;
       text-align: center;
       margin: 0 auto;
       font-size: 13px;
       border-radius: 20px;
       color: #666666;
   }
</style>