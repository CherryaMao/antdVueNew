<template>
	<div id="components-layout-demo-side" class="app">
		<span class="comName">杭州装管科技网络有限公司</span>
        <v-layout>
            <v-sider collapsible v-model="collapsed">
                <div class="logo">
                	<img src="./assets/logo.png"/>
                </div>
                <template>
                	<v-menu style="width:200px" mode="inline" :data="menuData3">
				        <template scope="{data}">
				            <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
				            <router-link :to="data.path" style="display:inline">{{data.name}}</router-link>
				        </template>
				        <template scope="{data}" slot="sub">
				            <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
				            <span>{{data.name}}</span>
				        </template>
				    </v-menu>
                </template>
            </v-sider>
            <v-layout>
                <v-header :style="{backgrouetnd:'#404040',padding:0}">
                	<v-breadcrumb class="crumbBox">
					  	<v-breadcrumb-item class="crumb">
					  		<a href="javascript:;">更新日志</a>
					  	</v-breadcrumb-item>
					  	<v-breadcrumb-item class="crumb">
					  		<a href="javascript:;">用户名</a>
					  	</v-breadcrumb-item>
					</v-breadcrumb>
                </v-header>
                <v-content class="breadWrap">
                    <div class="contentWrap">
                    	<router-view></router-view>
                    </div>
                </v-content>
                <v-footer :style="{textAlign:'center'}">
                    Ant Design ©2016 Created by Ant UED
                </v-footer>
            </v-layout>
        </v-layout>
    </div>
</template>

<script>
	import Vue from 'vue';
	import 'vue-beauty/package/style/vue-beauty.min.css'
	import vueBeauty from 'vue-beauty'
	Vue.use(vueBeauty)
	export default {
	  	name: 'app',
	  	data(){
	  		return{
	  			currentNavId:"",
		  		collapsed: false,
	        	menuData3: [{
		            name: '客户管理',
		            icon: 'user',
		            children: [{
		                name: 'index',
		                path:'/',
		                icon:'file', 
		                id:0
		            },{
		                name: 'Bill',
		                path:'/hello',
		                icon:'user',
		                id:1
		            },{
		                name: 'Alex',
		                path:'/user',
		                icon:'close',
		                id:2
		            }]
		        },{
		            name: 'Team',
		            icon: 'team',
		            children: [{
		                name: 'Team1',
		                path:'/todo',
		                icon:'',
		                id:3,
		            },{
		                name: 'Team2',
		                path:'',
		                icon:'',
		                id:4,
		            }]
		        },{
		            name: 'File',
		            icon: 'file',
		            children:[{
		            	name:"Team2-1",
		            	path:'',
		            	icon:'',
		            	id:5,
		            },{
		            	name:"Team2-2",
		            	path:'',
		            	icon:'',
		            	id:6
		            }]
		        }],
		         
		  	}
	    },
	  	watch: {
	        collapsed(val) {
	            console.log(val+123);
	        },
    	},
    	methods:{
    		
    	}
	}
</script>

<style>
	/*header*/
	.crumbBox{
		text-align: right;
		padding-right:20px;
	}
	.crumb a{
		color:#fff;
		font-size:14px;
	}
	.app{
		position:relative;
		height:100%;
		background:#fff;
	}
	.comName{
		position:absolute;
		top:10px;
		left:80px;
		z-index:1000;
		color:#fff;
		font-size:20px;
	}
	.ant-layout-header{
		height:51px;
		line-height:51px;
	}
	#components-layout-demo-side .logo img {
		height:40px;
		width:40px;
		background: #333;
		margin:10px 16px 16px 26px;
	}
	#components-layout-demo-side .ant-layout-sider-collapsed .anticon {
		font-size: 16px;
		margin-left: 8px;
	}
	#components-layout-demo-side .ant-layout-sider-collapsed .nav-text {
		display: none;
	}
	#components-layout-demo-side .ant-layout-sider-collapsed .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
		display: none;
	}
	/*contentWrap*/
	.breadWrap{background:#fff; padding:15px;}
	.breadNav{
		padding-left:20px;
		height:44px;
		line-height: 44px;
		border-bottom:2px solid #333333;
	}
	.breadNav li{
		float: left;
		text-align: center;
		line-height:44px;
	}
	.closeIcon{
		display: inline-block;
		width:16px;
		height:16px;
		border-radius:16px;
		text-align: center;
		line-height:16px;
		background:#ccc;
		color:#fff;
	}
	.breadNav li a{
		padding:0 20px;
		display:inline-block;
	}
	.breadNav li a.router-link-active{
		background:#000000;
		color:#fff;
	}
	.contentWrap{
		padding-top:20px;
		background:#fff;
	}
	a{text-decoration:none;color:#646464;}
	a:hover{color:#FF6666;}
	.navHead{
		padding-left:10px;
		height:48px;
		line-height:48px;
		border-top:4px solid #e7eaec;
		border-bottom:1px solid #ddd;
	}
	.navCont{
		padding-top:20px;
	}
	.navRow{
		padding-bottom:20px;
		margin-left:20px;
	}
	.vCol{
		background:#fff;
		height:470px;
		border-radius:6px;
	}
	.colBox{
		width:100px;
		height:100px;
		text-align:center;
		line-height:120px;
		position:relative;
		border-radius:4px;
	}
	.colNum{
		width:24px;
		height:24px;
		display:block;
		position:absolute;
		font-size:14px;
		top:-10px;
		right:-10px;
		border-radius:24px;
		background:red;
		text-align: center;
		line-height:24px;
		color:#fff;
	}
	.colName{
		width:100px;
		text-align: center;
		height:32px;
		line-height:32px;
	}
	.navUl li{
		float: left;
		list-style: none;
		margin-left:20px;
		cursor: pointer;
		margin-bottom:20px;
	}
	.navIcon{
		color:#fff;
		font-size:34px;
	}
	/*公告*/
	.infoUl li{
		margin:0 20px;
		overflow: hidden;
		border-bottom:1px solid #ddd;
		height:36px;
		line-height:36px;
	}
	.infoUl li span.infoTxt{float: left;}
	.infoUl li span.infoTime{float: right;}
</style>
 

