<template>
	<div class="table">
		<b-table :fields="fields" :items="items">
			<template slot="index" scope="data">
				{{data.index+1}}
			</template>
			<template slot="name" scope="data">
				{{data.value.first}} {{data.value.last}}
			</template>
			<template slot="nameage" scope="data">
				{{data.item.name.first}} is {{data.item.age}}
			</template>
		</b-table> 
	</div>
</template>

<script>
	export default{
		data(){
			return{
				fields:{
					index:{label:"Index"},
					name:{label:"Full Name"},
					sex:{label:'Sex'},
					nameage:{label:'First name and age'}
				},
				items:[
					{
						name:{first:'John',last:'Doe'},
						sex:'Male',
						age:42
					},
					{
						name:{first:'Jane',last:'Doe'},
						sex:'Female',
						age:36
					}
				]
			}
		},
		 
	}
</script>

<style scoped>
	
</style>