<template>
  <div>
      <div class="sss"><span @click="fanhui" style="margin-left:.5rem;"><</span></div>
      <div id="jia"></div>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  props: {
    id: String
  },
  data() {
    return {
      
    };
  },
  methods:{
fanhui(){
    this.$router.back(-1)
}
  },
  created() {
      var id=this.id
    console.log(id);
    request
      .post('http://www.lliangche.com/api/Wechat/GetArticleDetail/'+id)
      .then(res =>{
        console.log(res.data);
        const jia=document.getElementById('jia')
        jia.innerHTML=res.data;
        
        
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>

.sss{
    position: fixed;
    top:0;
    width: 150%;
    height: 1.5rem;
    background: #ffffff;
    
    z-index: 100000;

}
#jia{
    margin-top: 1.5rem;
    background: #ffffff;
}
</style>