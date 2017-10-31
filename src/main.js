// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue'
import VueCharts from 'vue-charts'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios,axios)
Vue.use(BootstrapVue)
//Vue.use(VueResource)

/*import VueTaber from 'vue-tabs/src/index.js'
import 'vue-tabs/vue-tabs.css'
import tabs from './js/tabs.js'
const vueTaber = new VueTaber({
	tabs,
	persist:true
})
vueTaber.beforeCreateEach((tab,next)=>{
	if(tab.name ==='setting'){
		next('home')
	}else{
		next()
	}
})
Vue.use(vueTaber)
*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
