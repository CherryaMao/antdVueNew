<template>
	<div style="text-align:center">
		<input type="button" value="-" @click="downHandle({de:5})"/>
		<span>{{num}}</span>
		<input type="button" value="+" @click="addHandle"/>
		<p>{{num2}}</p>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default{
		//computed:mapState({
			//num:state = > state.count
			//num:'count'
			//num(){return this.$store.state.count}
			//num(state){return state.count+100}
	   // }),
	    computed:{
			...mapGetters({
				num2:'filterCount'
			}),
			...mapState(['count'])
	    },
		methods:{
			...mapActions({
				addHandle:'increment'
			}),
			/*...mapMutation({
				downHandle:'decrement'
			}),*/
			addHandle(){
				//this.$store.commit('increment',{n:5})
				this.$store.dispatch('Addaction')
			},
			downHandle(){
				//this.$store.commit('decrement')
				//this.$store.commit({
					//type:'decrement',
					//de:10
				//})
				this.$store.dispatch('Deaction')
			}
		}
	}
</script>

<style>
input{
	padding:5px 15px;
}
</style>