<template>
	<div class="treeComponent">
		<li >
			<div :class="{bold:isFolder}"
				@click="toggle">
				{{model.name}}
				<span v-if="isFolder">[{{open?'-':'+'}}]</span>
			</div>	
		</li>
	</div>
</template>

<script>
	export default{
		props:{
			model:Object
		},
		data(){
			return {
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
			addChild(){
				this.model.children.push({
					name:'new stuff'
				})
			}
		}
	}
</script>

<style>
</style>