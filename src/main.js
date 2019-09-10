// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'   //切换环境js
// 微信分享
import WXConfig from './assets/js/wx.jsapi' // 微信分享Vue.prototype.WXConfig = WXConfig;
// 引入高德
import AMap from 'vue-amap';
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'b4af34c0170ef01ad6ce54ef640ba6dd',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
    'AMap.CircleEditor', 'AMap.Geolocation']
});



// 引入状态管理
import store from '@/store'
import '@/assets/font_1125770_iykh1afxhf/iconfont.css'
import axios from'axios'

import Vant from 'vant';
import 'vant/lib/index.css';



import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);



 

import { Scroller, Tab, TabItem } from 'vux'

import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
import { Toast } from 'vant';
Vue.use(Toast);
import { Popup } from 'vant';
Vue.use(Popup);
import { Picker } from 'vant';
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(Picker);
import { Dialog } from 'vant';
Vue.use(Dialog);
import { TreeSelect } from 'vant';
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
Vue.use(TreeSelect);
import { List } from 'vant';

Vue.use(List);
// import { IndexBar, IndexAnchor } from 'vant';

// Vue.use(IndexBar).use(IndexAnchor);
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)

Vue.component('scroller', Scroller)
Vue.use(Vant);

// import { DropdownMenu  } from 'vant';

// Vue.use(DropdownMenu)
// Vue.prototype.WXConfig=WXConfig;

// Vue.config.productionTip = false2
// Vue.prototype.$post=post;
// Vue.prototype.$fetch=fetch;
// Vue.prototype.$patch=patch;
// Vue.prototype.$put=put;
/* eslint-disable no-new */

// 将API方法绑定到全局
Vue.prototype.$api = api
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
