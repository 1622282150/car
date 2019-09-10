import Vue from 'vue'
import Router from 'vue-router'
import fenxiang from '@/page/fenxiang'
import login from '@/page/login.vue'
import register from '@/page/register'
import home from '@/page/home'
import newcar from '@/page/newcar'
import usedcar from '@/page/usedcar'
import main from '@/page/main'
import mobile from '@/page/mobile'
import search from '@/page/search'
import gengduo from '@/page/gengduo'
import listxuan from '@/page/listxuan'
import showpopup from '@/page/showpopup'
import searchershou from '@/page/searchershou'
import wangji from '@/page/wangji'
import xiugai from '@/page/xiugai'
import searchonelist from '@/page/searchonelist'
import searchonelistalone from '@/page/searchonelistalone'
import newxuan from '@/page/newxuan'
import usedxuan from '@/page/usedxuan'
import map from '@/components/map'
import cardstock from '@/components/cardstock'
import downpayment from '@/components/downpayment'
import suv from '@/components/suv'
import monthfor from '@/components/monthfor'
import service from '@/components/service'
import particulars from '@/components/particulars'
import allstore from '@/components/allstore'
import myfocus from '@/components/myfocus'
import store from '@/components/store'
import set from '@/components/set'
import orderform from '@/components/orderform'
import look from '@/components/look'
import yuyuelist from '@/components/yuyuelist'
import attentionshop from '@/components/attentionshop'
import appointment from '@/components/appointment'
import people from '@/components/people'
import distributorlist from '@/components/distributorlist'
import mydistributor from '@/components/mydistributor'
import mybalance from '@/components/mybalance'
import mycar from '@/components/mycar'
import paging from '@/components/paging'
import certification from '@/components/certification'
import audit from '@/components/audit'
import ordercar from '@/components/ordercar'
import zhifu from '@/components/zhifu'
import tixian from '@/components/tixian'
import allpeizhi from '@/components/allpeizhi'
import aboutour from '@/components/aboutour'
import select from '@/components/select'
import getarticledetail from '@/components/getarticledetail'
import dingjin from '@/components/dingjin'
import geiqian from '@/components/geiqian'
import geiqiantwo from '@/components/geiqiantwo'
import requirezhi from '@/components/requirezhi'
import shimingren from '@/components/shimingren'
import zhiren from '@/components/zhiren'
import detailpictures from '@/components/detailpictures'
import datu from '@/components/datu'
// 个人代理
import individualagent from '@/components/geren/individualagent'
import individualreview from '@/components/geren/individualreview'
import peoplelist  from '@/components/geren/peoplelist'
import peoplelook  from '@/components/geren/peoplelook'
import peopledistributor from '@/components/geren/peopledistributor'
import secondary from '@/components/geren/secondary'
import { resolve } from 'path';


Vue.use(Router)

const router = new Router({
  // mode:'history',
  routes: [

    {
      path: '/',
      name: 'home',
      component:resolve=>require(['@/page/home'],resolve)
    },
    ,
    {
      path:'/fenxiang',
      name:'fenxiang',
      component:resolve=>require(['@/page/fenxiang'],resolve)
    },
    {
      path:'/shimingren',
      name:'shimingren',
      component:resolve=>require(['@/components/shimingren'],resolve)
    },
    {
      path:'/showpopup',
      name:'showpopup',
      component:resolve=>require(['@/page/showpopup'],resolve)
    }
    ,
    {
      path:'/wangji',
      name:'wangji',
      component:resolve=>require(['@/page/wangji'],resolve)
    },
    {
      path:'/xiugai',
      name:'xiugai',
      component:resolve=>require(['@/page/xiugai'],resolve)
    },
    {
      path:'/zhiren',
      name:'zhiren',
      component:resolve=>require(['@/components/zhiren'],resolve)
    },
    {
      path:'/gengduo',
      name:'gengduo',
      component:resolve=>require(['@/page/gengduo'],resolve)
    },
    {
      path:'/newcar',
      name:'newcar',
      component:resolve=>require(['@/page/newcar'],resolve)
    },
    {
      path:'/newxuan',
      name:'newxuan',
      component:resolve=>require(['@/page/newxuan'],resolve)
    },
    {
      path:'/searchershou',
      name:'searchershou',
      component:resolve=>require(['@/page/searchershou'],resolve)
    },
    {
      path:'/usedxuan',
      name:'usedxuan',
      component:resolve=>require(['@/page/usedxuan'],resolve)
    },
    {
      path:'/listxuan',
      name:'/listxuan',
      component:resolve=>require(['@/page/listxuan'],resolve)
    },
    {
      path:'/usedcar',
      name:'usedcar',
      component:resolve=>require(['@/page/usedcar'],resolve)
    },
    {
      path:'/main',
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      name:'main',
      component:resolve=>require(['@/page/main'],resolve)
    },
    ,
    {
      path:'/search',
      name:'search',
      component:resolve=>require(['@/page/search'],resolve)
    },
    {
      path:'/searchonelist',
      name:'searchonelist',
      component:resolve=>require(['@/page/searchonelist'],resolve)
    },
    {
      path:'/searchonelistalone',
      name:'searchonelistalone',
      component:resolve=>require(['@/page/searchonelistalone'],resolve)
    },
    {
      path:'/suv',
      name:'suv',
      component:resolve=>require(['@/components/suv'],resolve)
    },
    {
      path:'/cardstock',
      name:'cardstock',
      component:resolve=>require(['@/components/cardstock'],resolve)
    },
    {
      path:'/downpayment',
      name:'downpayment',
      component:resolve=>require(['@/components/downpayment'],resolve)
    },
    {
      path:'/monthfor',
      name:'monthfor',
      component:resolve=>require(['@/components/monthfor'],resolve)
    },
    {
      path:'/service',
      name:'service',
      component:resolve=>require(['@/components/service'],resolve)
    },
    {
     path:'/particulars/:id',
     name:'particulars',
     component:resolve=>require(['@/components/particulars'],resolve)
    },
    {
      path:'/detailpictures',
      name:'detailpictures',
      component:resolve=>require(['@/components/detailpictures'],resolve)
    },
    {
      path:'/datu',
      name:'datu',
      component:resolve=>require(['@/components/datu'],resolve)
    },
    {
      path:'/allstore',
      name:'allstore',
      component:resolve=>require(['@/components/allstore'],resolve)
     },
     {
      path:'/myfocus',
      name:'myfocus',
      component:resolve=>require(['@/components/myfocus'],resolve)
     },
     {
      path:'/store',
      name:'store',
      component:resolve=>require(['@/components/store'],resolve)
     },
     {
      path:'/set',
      name:'set',
      component:resolve=>require(['@/components/set'],resolve)
     }
     ,
     {
      path:'/orderform',
      name:'orderform',
      component:resolve=>require(['@/components/orderform'],resolve)
     }
     ,
     {
      path:'/look',
      name:'look',
      component:resolve=>require(['@/components/look'],resolve)
     }
     ,
     {
      path:'/yuyuelist',
      name:'yuyuelist',
      component:resolve=>require(['@/components/yuyuelist'],resolve)
     },
     {
      path:'/attentionshop',
      name:'attentionshop',
      component:resolve=>require(['@/components/attentionshop'],resolve)
     },
     {
      path:'/appointment',
      name:'appointment',
      component:resolve=>require(['@/components/appointment'],resolve)
     },
     {
      path:'/people',
      name:'people',
      component:resolve=>require(['@/components/people'],resolve)
     },
     {
       path:'/distributorlist',
       name:'distributorlist',
       meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component:resolve=>require(['@/components/distributorlist'],resolve)
     },
     {
      path:'/mydistributor',
      name:'mydistributor',
      component:resolve=>require(['@/components/mydistributor'],resolve)
    },
    {
      path:'/mybalance',
      name:'mybalance',
      component:resolve=>require(['@/components/mybalance'],resolve)
    }
    ,
    {
      path:'/mycar',
      name:'mycar',
      component:resolve=>require(['@/components/mycar'],resolve)
    }
    ,
    {
      path:'/login',
      name:'login',
      component:resolve=>require(['@/page/login'],resolve)
    },
    
    {
      path:'/saoma',
      name:'saoma',
      component:resolve=>require(['@/page/saoma'],resolve)
    },
    {
      path:'/register',
      name:'register',
      component:resolve=>require(['@/page/register'],resolve)
    },
    {
      path:'/paging',
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      name:'paging',
      component:resolve=>require(['@/components/paging'],resolve)
    },
   {
     path:'/certification',
     name:'certification',
     component:resolve=>require(['@/components/certification'],resolve)
   },
   {
    path:'/audit',
    name:'audit',
    component:resolve=>require(['@/components/audit'],resolve)
  },
  {
    path:'/ordercar',
    name:'ordercar',
    component:resolve=>require(['@/components/ordercar'],resolve)
  },
  {
    path:'/zhifu',
    name:'zhifu',
    component:resolve=>require(['@/components/zhifu'],resolve)
  },
  {
    path:'/individualagent',
    name:'individualagent',
    component:resolve=>require(['@/components/geren/individualagent'],resolve)
  },
  {
    path:'/individualreview',
    name:'individualreview',
    component:resolve=>require(['@/components/geren/individualreview'],resolve)
  },
  { path:'/secondary',
  name:'secondary',
  component:resolve=>require(['@/components/geren/secondary'],resolve)
        
  },
  {
    path:'/peoplelist',
    name:'peoplelist',
    component:resolve=>require(['@/components/geren/peoplelist'],resolve)
  }
  ,
  {
    path:'/peoplelook',
    name:'peoplelook',
    component:resolve=>require(['@/components/geren/peoplelook'],resolve)
  }
  ,
  {
    path:'/peopledistributor',
    name:'peopledistributor',
    component:resolve=>require(['@/components/geren/peopledistributor'],resolve)
  }
  ,
  {
    path:'/requirezhi',
    name:'requirezhi',
    component:resolve=>require(['@/components/requirezhi'],resolve)
  }
   
  ,
  {
    path:'/geiqiantwo',
    name:'geiqiantwo',
    component:resolve=>require(['@/components/geiqiantwo'],resolve)
  },
  {
    path:'/tixian',
    name:'tixian',
    component:resolve=>require(['@/components/tixian'],resolve)
  }
   ,{
     path:'/allpeizhi',
     name:'allpeizhi',
     component:resolve=>require(['@/components/allpeizhi'],resolve)
   }
   ,{
    path:'/aboutour',
    name:'aboutour',
    component:resolve=>require(['@/components/aboutour'],resolve)
  }
  ,{
    path:'/select',
    name:'select',
    component:resolve=>require(['@/components/select'],resolve)
  },
  {
    path:'/getarticledetail/:id',
    name:'getarticledetail',
    component:resolve=>require(['@/components/getarticledetail'],resolve),
    props:true
  },
  {
    path:'/dingjin',
    name:'dingjin',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    component:resolve=>require(['@/components/dingjin'],resolve)
  },
  {
    path:'/geiqian',
    name:'geiqian',
    component:resolve=>require(['@/components/geiqian'],resolve)
  },
  {
    path:'/map',
    name:'map',
    component:resolve=>require(['@/components/map'],resolve)
  },
  {
    path:'/mobile',
    name:'mobile',
    component:resolve=>require(['@/page/mobile'],resolve)
  }
  
  


  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(window.sessionStorage.getItem('token')){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
next()
  }
})

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
export default router