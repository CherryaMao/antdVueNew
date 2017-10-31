import Vue from 'vue'
import Router from 'vue-router'
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
import Hello from '@/components/Hello'
import User from '@/components/User'
import Home from '@/components/Home'
import Net from '@/components/Net'
import Table from '@/components/Table'
import Tree from '@/components/Tree'
import Modal from '@/components/Modal'
import Todo from '@/components/Todo'
import Ligroup from '@/components/Ligroup'
import Store from '@/components/Store'
import App from '@/App'
Vue.use(Router) 
Vue.use(vueBeauty) 

export default new Router({
  routes: [
  	{
  		path:'/',
  		name:"home",
  		component:Home
  	},
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
    	path:"/user",
    	name:"User",
    	component:User
    },
    {
    	path:"/table",
    	name:"table",
    	component:Table
    },
    {
    	path:"/net",
    	name:"net",
    	component:Net
    },
    {
    	path:"/tree",
    	name:"tree",
    	component:Tree
    },
    {
    	path:"/modal",
    	name:"modal",
    	component:Modal
    },
    {
    	path:"/todo",
    	name:"todo",
    	component:Todo
	},
    {
    	path:"/store",
    	name:"store",
    	component:Store
    },
    { 
    	path: '*',
    	redirect: '/' 
    }
  ]
})
