<template>
	<div id="components-layout-demo-side" class="app">
        <v-layout>
            <v-content class="breadWrap">
                <div class="contentWrap">
                	<div class="grid-demo">
				        <v-row class="navRow">
				            <v-col span="12" class="vCol">
				            	<div class="navHead">
				            		<v-icon type="menu-fold"></v-icon>
				            		历年记事本
				            	</div>
				            	<div class="navCont">
				            		<b-modal class="fixModal" ref="fix_modal" @cancel="delEvent" @ok="hideModel" title="修改事件" close-title="删除事件" ok-title="取消">
									    <form @submit.stop.prevent="submit">
									        <b-form-input style="width:280px;display:inline-block;" type="text" v-model="event">{{event}}</b-form-input>
								    		<b-btn style="background:#0275d8" @click="sure">确定</b-btn>
									    </form>
								    </b-modal>
				            		<b-modal  ref="add_modal" title="创建新事件" close-title="取消" ok-title="确定" @ok="addHandle">
									    <form @submit.stop.prevent="submit">
									      <b-form-input type="text" placeholder="Enter your event" v-model="event"></b-form-input>
								    	</form>
								    </b-modal>
				            		<full-calendar :events="fcEvents" first-day="1" locale="zh" @eventClick="eventClick" @dayClick="dayClick">
				            			 <template slot="fc-event-card" scope="p">
				            			 	<p>test</p>
				            			 </template>
				            		</full-calendar>
				            	</div>
				            </v-col>
				            <v-col span="11" offset="1" class="vCol">
				            	<div class="navHead customeCount">
				            		<div class="countleft">
				            			<v-icon type="bar-chart"></v-icon>
				            			客户统计
				            		</div>
				            		<div class="countright">
				            			<v-button type="info">所有</v-button>
				            			<v-button type="info">本月</v-button>
				            		</div>
				            	</div>
				            	<div class="navCont">
				            		<div id="chart" style="width:100%;height:400px;"></div>
				            	</div>
				            </v-col>
				        </v-row>
				        <v-row class="navRow">
				            <v-col span="12" class="vCol">
				            	<div class="navHead">
				            		<v-icon type="menu-fold"></v-icon>
				            		待办事项
				            	</div>
				            	<div class="navCont">
				            		<ul class="navUl">
				            			<li v-for="(item,index) in undos">
				            				<div class="colBox" :style="{backgroundColor:item.bjColor}">
							            		<v-icon  class="navIcon" :class="'anticon anticon-'+item.type"></v-icon>
							            		<span class="colNum" v-show="item.num==0?false:true">{{item.num}}</span>
							            	</div>
							            	<p class="colName">{{item.name}}</p>
				            			</li>
				            		</ul>
				            	</div>
				            </v-col>
				            <v-col span="11" offset="1" class="vCol">
				            	<div class="navHead">
				            		<v-icon type="notification"></v-icon>
				            		公告
				            	</div>
				            	<div class="navCont">
				            		<ul class="infoUl">
				            			<li v-for="item in infos">
				            				<span class="infoTxt">{{item.title}}</span>
				            				<span class="infoTime">{{item.time}}</span>
				            			</li>
				            		</ul>
				            	</div>
				            </v-col>
				        </v-row>
				    </div>
                </div>
            </v-content>
        </v-layout>
    </div>
</template>

<script>
	import {formatDate} from '../js/base.js'
	import echarts from 'echarts'
	const demoEvents = [
		{
		    title     :  'Sunny01',
		    start     : '2017-07-02',
		    cssClass  : 'home',
		    id:0
	    },
		{
		    title     : 'Lunfel 710-712',
		    start     : '2017-07-10',
		    cssClass  : ['home', 'work'],
		    id:1
		},
		{
		    title     : 'Lunfel 705-711',
		    start     : '2017-07-05',
		    id:2
		}, 
		{
		    title     : 'Lunfel 715-718',
		    start     : '2017-07-16',
		    id:3
		}
	]
	export default {
	  name: 'app',
	  data(){
	  	return{
	  		event:'',
	  		currentIndex:'',
	  		dayTime:'',
	  		dataId:'',
	  		fcEvents:demoEvents,
	  		tests:{},
	  		customers:{},
	        undos:[
	        	{name:"待审批订单",num:0,bjColor:"green",type:"file-text"},
	        	{name:"协同需求",num:0,bjColor:"#23c6c8",type:"switcher"},
	        	{name:"今日待办",num:3,bjColor:"#97b552",type:"bars"},
	        	{name:"派单申请",num:3,bjColor:"#b6a2de",type:"file-add"},
	        	{name:"预算审批",num:0,bjColor:"#19CAAD",type:"calculator"},
	        	{name:"合同审批",num:0,bjColor:"#BEEDC7",type:"file"},
	        	{name:"废单审批",num:0,bjColor:"#ECAD9E",type:"close"}
	        ],
	        infos:[
	        	{title:"国庆放假",time:"2017-7-11 11:32:05"},
	        	{title:"周例会",time:"2017-7-15 12:13:09"},
	        	{title:"月工作计划",time:"2017-7-19 09:32:30"},
	        	{title:"你好么",time:"2017-7-12 19:09:39"},
	        ]
		  	}
		},
		components:{
			'full-calendar':require('vue-fullcalendar')
		},
		methods:{
			eventClick(event,jsEvent,pos){
				this.event = event.title;
				this.currentIndex = event.id;
				this.$refs.fix_modal.show();
			},
			dayClick(day,jsEvent){
				this.event="";
				this.$refs.add_modal.show();
				this.dayTime = formatDate(day);
				this.dataId = this.fcEvents.length;
			},
			sure(){
				this.fcEvents.forEach((el,index) => {
					if(el.id == this.currentIndex){
						el.title = this.event
					}
				});
				this.$refs.fix_modal.hide()
			},
			delEvent(){
				this.fcEvents.forEach((el,index) => {
					if(index == this.currentIndex){
						this.fcEvents.splice(this.currentIndex,1)
					}
				})
			},
			hideModel(){
				this.$refs.fix_modal.hide()
			},
			addHandle(){
				this.fcEvents.push({
					title:this.event,
					start:this.dayTime,
					cssClass:'home',
					id:this.dataId
				})
			}
		},
		mounted(){
			var myChart = echarts.init(document.getElementById("chart"));
			myChart.setOption({
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'horizontal',
			        left: 'left',
			        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			});
		}
		/*created(){
			this.axios.get('../static/data.json').then((res) => {
			  this.tests = res.data.list
			});
			this.axios.get('../static/customers.json').then((res) => {
				this.customers = res.data.customer
			})
		}*/
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
		color:#000;
		font-weight:500;
		font-family: ""open sans","Helvetica Neue",Helvetica,Arial,sans-serif";
	}
	a.router-link-active {
	  color: #f66;
	}
	.router-link-active a {
	  color:blue;
	}
	.comName{
		position:absolute;
		top:10px;
		left:90px;
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
	.breadWrap{
		background:#fff;
	}
	.breadNav{
		padding-left:20px;
		height:44px;
		line-height: 44px;
		border-bottom:2px solid #333333;
	}
	.contentWrap{
		padding-top:20px;
		background:#f3f3f4;
	}
	.navHead{
		padding-left:10px;
		height:48px;
		line-height:48px;
		border-top:4px solid #e7eaec;
		border-bottom:1px solid #ddd;
	}
	.navCont{
		padding-top:20px;
		overflow-y: auto;
		height: 470px;
		padding-bottom:20px;
	}
	.navRow{
		padding-bottom:20px;
		margin-left:20px;
	}
	.vCol{
		background:#fff;
		height:470px;
		overflow: hidden;
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
	/*记事本*/
	.fixModal .btn-secondary{
		background:red;
		color:#fff;
		border:none;
	}
	.fixModal .btn-primary{
		background:#abbac3;
		color:#fff;
		border:none;
	}
	.sure{
		background:#abbac3;
	}
	/*客户统计*/
	.customeCount{
		overflow: hidden;
	}
	.customeCount .countleft{
		float: left;
	}.customeCount .countright{
		float: right;
		position:absolute;
		top:0px;
		right:10px;
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