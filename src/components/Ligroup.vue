<template>
	<div class="wrapper">
		{{message}}
		<li v-for="item in list" @click="sendMsg(item)">
			<span>{{item.name}}</span><span style="margin-left:15px;">{{item.age}}</span>
		</li>
	</div>
</template>

<script>
	export default{
		props:["message","list"],
		data(){
			return {}
		},
		methods:{
			sendMsg(item){
				this.$emit('listenToChildEvent', item.age)
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	    line-height: 1.4em;
	    background: #f5f5f5;
	    color: #4d4d4d;
	    min-width: 230px;
	    max-width: 550px;
	    margin: 0 auto;
	    border-radius:8px;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    font-weight: 300;
	}
	.todoapp{
	    position: relative;
	    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0,0,0,0.1);
	}
	.header{
		border-bottom:1px solid #ddd;
		position: relative;
	}
	.header h1{
		text-align: center;
		font-size:32px;
	}
	.edit{
		height:38px;
		position:absolute;
		top:8px;
		left:80px;
		outline: none;
		padding:0 5px;
		display:none;
	}
	.editing .edit{
		display:block;
	}
	.editing .view{
		display:none;
	}
	.new-todo{
		padding: 16px 16px 16px 60px;
	    border: none;
	    outline: none;
	    background: rgba(0, 0, 0, 0.003);
	    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03)
	}
	.toggle-all {
	    position:absolute;
	    width:24px;
	    height:24px;
	    top:65px;
	    left:20px;
	    color:rgba(0,0,0,0.4);
	    cursor:pointer;
    }
	.view input[type="checkbox"]{
		height:54px;
		line-height:52px;
		width:16px;
		height:16px;
		border-radius:100%;
	}
	.view label{
		width:450px;
		vertical-align: middle;
		margin-left:10px;
	}
	.todo-list li{
		position: relative;
    	font-size: 24px;
    	height:54px;
    	padding:0 20px;
    	line-height:54px;
    	border-bottom:1px solid #ddd;
	}
	.todo-list li .destroy{
		cursor:pointer;
		display: block;
	    position: absolute;
	    top:0px;
	    right: 10px;
	    bottom: 0;
	    margin: auto 0;
	    font-size:20px;
	    color: #cc9a9a;
	    background:none;
	    border:none;
	    outline:none;
	    margin-bottom: 11px;
	    transition: color 0.2s ease-out;
	}
	.todo-list li .destroy::after {
	    content: "×";
	}
	.checkCir{
		color:rgba(0,0,0,0.3);
		cursor:pointer;
	}
	.checked{
		background:#42B983;
		width:24px;
		height:24px;
		border-radius:24px;
		color:#fff;
		cursor:pointer;
	}
	.cirChecked{color:#42B983}
	.footer{
		overflow: hidden;
		padding:0 20px;
		height:54px;
		line-height:54px;
	}
	.footer .todo-count{
		width:100px;
		float: left;
	}
	.footer .filter{
		float: left;
	}
	.filter li{
		display:inline-block;
		margin:0 10px;
	}
	.filter li a{
		text-decoration:none;
	}
	.filter li a:hover{
		color:#CC9A9A;
	}
	.filter li a.select{
		border:1px solid #CC9A9A;
		padding:2px 10px;
	}
	.clear-completed{
		float: right;
		background:transparent;
		outline:none;
		border:none;
		cursor:pointer;
	}
</style>