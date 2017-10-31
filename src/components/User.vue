<template>
	<div>
		<b-modal ref="del_modal" @ok="delsItem">确定要删除该项目？</b-modal>
		<div class="tabWrap">
			<b-table striped hover
				:items="items"
				:fields="fields"
				:current-page="currentPage"
				:per-page="perPage"
				:filter="filter"
				>
				<template slot="name" scope="data">
					<router-link to="/">{{data.item.name.first}}</router-link>
					{{data.item.name.last}}
				</template>
				<template slot="isActive" scope="data">
					{{data.item.isActive?"Yes":"No"}}
				</template>
				<template slot="actions" scope="data">
					<b-btn size="sm" @click="delItem(data)">删除</b-btn>
					<b-btn size="sm" @click="editItem(data)">编辑</b-btn>
				</template>
			</b-table>
		</div>
		<div class="my-1 row">
		    <div class="col-6">
		      <b-form-fieldset  horizontal  :label-cols="3">
		        <span>显示第 1 到第 {{items.length}} 条记录，总共 {{items.length}} 条记录每页显示</span>
		        <b-form-select style="width:80px;" :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
		        </b-form-select>条记录
		      </b-form-fieldset>
		    </div>
		    <div class="col-6">
		        <div class="justify-content-right my-1">
					<b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage">
					</b-pagination>
				</div>
		    </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name:"user",
		data(){
			return{
				currentId:"",
				items:[
					{id:0,isActive:true,age:40,name:{first:'Dickerson',last:'Macdonald'},actions:"del"},
					{id:1,isActive:false,age:21,name:{first:'Larsen',last:'Shaw'},actions:"del"},
					{id:2,_rowVariant:'success',isActive:false,age:9,name:{first:'Geneva',last:'Wilson'},actions:"del"},
					{id:3,isActive:false,age:89,name:{first:'Mitzi',last:'Navarro'},actions:"del"},
					{id:4,isActive:true,age:38,name:{first:'Jami',last:'Carney'},actions:"del"},
					{id:5,isActive:false,age:27,name:{first:'Essie',last:'Dunlap'},actions:"del"},
					
					{id:6,isActive:true,age:40,name:{first:'Dickerson',last:'Macdonald'},actions:"del"},
					{id:7,isActive:false,age:21,name:{first:'Larsen',last:'Shaw'},actions:"del"},
					{id:8,_cellVariant:{age:'danger',name:'success'},isActive:false,age:9,name:{first:'Geneva',last:'Wilson'},actions:"del"},
					{id:9,isActive:false,age:89,name:{first:'Mitzi',last:'Navarro'},actions:"del"},
					{id:10,isActive:true,age:38,name:{first:'Jami',last:'Carney'},actions:"del"},
					{id:11,isActive:false,age:27,name:{first:'Essie',last:'Dunlap'},actions:"del"},
				],
				fields:{
					name:{label:'Person Full name'},
					age:{label:'Person age'},
					isActive:{label:'is Active'},
					actions:{label:'Actions'}
				},
				currentPage:1,
				perPage:5,
				filter:null
			}
		},
		methods:{
			delItem(data){
				this.$refs.del_modal.show();
				this.currentId = data.item.id
			},
			delsItem(){
				this.items.splice(this.currentId,1)
			}
		}
	}
</script>

<style>
	.tabWrap{
		margin:15px;
		height:300px;
		overflow-y: auto;
		border:1px solid #c8c8c8;
		border-radius:6px;
		position:relative;
	}
</style>