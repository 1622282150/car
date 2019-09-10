<template>
  <div>
    <van-nav-bar title="更多筛选" left-arrow @click-left="onClickLeft" fixed/>
    <div style="width:100%;height:2rem;"></div>
    <div class="mainleft">
         
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
 
    };
  },
  methods: {
  
    onClickLeft() {
      this.$router.back(-1);
    }
  }
};
</script>
<style scoped>
.van-icon::before {
  color: black;
}
.mainleft{
    width: 15%;
    height: 9rem;
    background: #f5f5f5;
    color: black;
}
</style>