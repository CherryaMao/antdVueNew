<template>
	<div class="netWrap">
		<form id="search">
			search  <input name="query" v-model="searchQuery"/>
		</form>
		<NetNav 
			:data="gridData"
			:columns="gridColumns"
			:filter-key="searchQuery"
		></NetNav>
	</div>
</template>
<script>
	import NetNav from './NetComponent'
	export default{
		components:{NetNav},
		data(){
			return{
				searchQuery:'',
				gridColumns:['name','power'],
				gridData:[
					{name:'Chuck Norris',power:Infinity},
					{name:'Bruce Lee',power:9000},
					{name:'Jackie Chan',power:7000},
					{name:'Jet Li',power:8000}
				]
			}
		}
	}
</script>

<style>
	
</style>