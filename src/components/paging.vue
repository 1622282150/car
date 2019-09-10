<template>
    <div>
        <!-- 分页 -->
        <div ref="paging" class="paging">
         <i @click="left" style="font-size:20px;margin-left:.5rem;" class="iconfont">&#xe60b;</i>
          <p class="changeto">请选择你要进入的页面</p>
         <div class="qiye" @click="certification">
             企业分销商
         </div>
         <div class="geren" @click="individualagent">
              个人分销商
         </div>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request'
    export default {
        data(){
            return{
                status:'',
                isqiye:true,
                iskong:'',
                 fullheight: document.documentElement.clientHeight
            }
        },
        methods:{
            get(){
               request
        .post(this.$api+"/Wechat/GetUserInfo", {})
        .then(res => {
        //   console.log(res.data.Data.CourseCommentFlag);
         this.iskong=res.data.Data.Status
         console.log('iskong'+this.iskong)
          
          
        })
        .catch(err => {
          console.log(err);
        });
            },
         left(){
             this.$router.push('/')
         },
         certification(){
            
            //  进入企业分销商认证
            if(this.iskong == 'Normal' || this.iskong == 'Unapprove' ){
                console.log('没填资料呢')
                this.$router.push('/certification')
            }else{
                // console.log('1111111')
               this.$router.push('/look')
            }
           
             
         },
         individualagent(){
            // 进入个人分销商认证

             if(this.iskong == 'Normal' || this.iskong == 'Unapprove'){
               this.$router.push('/individualagent')
            }else{
               this.$router.push('/look')
            }
           
         }
        },
        mounted(){
            this.get()
            this.$refs.paging.style.height=this.fullheight +'px';
        }
    }
</script>
<style scoped>
    .paging{
        width: 100%;
        background: url('../assets/images/141e3c7f5f6f006fb16513553ee69f4.png') no-repeat;
        background-size: 100% 100%;
    }
    .changeto{
        margin-top: 1.6rem;
        font-weight: 1000;
        font-size: 16px;
        text-align: center;
        color: #282828;
    }
    .qiye{
        font-size: 22px;
        color: #666666;
        width: 90%;
        height: 4rem;
        line-height: 4rem;
        text-align: center;
        border-radius: 10px;
        margin: 3rem auto;
        background: #f6f6f6;
    }
    .geren{
         font-size: 22px;
        color: #666666;
         width: 90%;
        height: 4rem;
        line-height: 4rem;
        text-align: center;
        border-radius: 10px;
        margin: 4rem auto;
        background: #f6f6f6;
    }
</style>