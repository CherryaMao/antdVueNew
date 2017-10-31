<template>
	<div class="treeWrap" id="demo">
		<ul>
			<item class="item"
				:model="treeData">
			</item>
		</ul>
	</div>
</template>
<!--<scripe type="text/x-template" id="item-template">
	<li>
		<div :class="{bold:isFolder}"
		@click="toggle"
		@dblclick="changeType">
			{{model.name}}
			<span v-if="isFolder">[{{open?'-':'+'}}]</span>
		</div>
		<ul v-show="open" v-if="isFolder">
			<item 
				class="item"
				v-for="model in model.children"
				:model="model">
			</item>
			<li class="add" @click="addChild">+</li>
		</ul>
	</li>
</scripe>-->
<script>
	import item from './treeComponent'
	//import Vue from 'vue'
	const data = {
		'name':'my-tree',
		children:[
			{'name':'item1'},
			{'name':'item2',
				children:[
					{'name':'item2-1'},
					{'name':'item2-2'},
					{'name':'item2-3'},
					{'name':'item2-4'}
				]
			},
			{'name':'item3',
				children:[
					{'name':'item3-1'},
					{'name':'item3-2'},
					{'name':'item3-3'},
					{'name':'item3-4'}
				]
			},
		]
	}
	/*Vue.component('item',{
		template:'#item-template',
		props:{
			model:Object
		},
		data:function(){
			return{
				open:false
			}
		},
		computed:{
			isFolder(){
				return this.model.children && this.model.children.length
			}
		},
		methods:{
			toggle(){
				if(this.isFolder){
					this.open = !this.open
				}
			},
			changeType(){
				if(!this.isFolder){
					this.$set(this.model,'children',[])
					this.addChild()
					this.open = true
				}
			},
			addChild(){
				this.model.children.push({
					name:'new stuff'
				})
			}
		}
	})*/
	export default{
		components:{item},
		data(){
			return {
				treeData:data
			}
		}
	}
</script>

<style>
	
</style>