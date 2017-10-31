<template>
  <div class="hello">
  	<div v-for="branch in branches">
	      <input 
		     	type="radio" 
		     	:id="branch" 
		     	:value="branch" 
		     	name="branch"
		     	v-model="currentBranch"
	     	/>
	     	<label :for="branch">{{branch}}</label>
 	  </div>
 	  <p>vuejs/vue@{{currentBranch}}</p>
 	  <ul>
 	  	<li v-for="record in commits">
 	  		<a :href="record.html_url" target="_blank" class="commit">
 	  			{{record.sha.slice(0,7)}}
 	  		</a>
 	  		-<span class="message">{{record.commit.message | truncate}}</span></br>
 	  	by  <span class="author">
 	  		<a :href="record.author.html_url">
 	  			{{record.commit.author.name}}
 	  		</a>
 	  	</span>
 	  	at <span class="date">{{record.commit.author.date | formatDate}}</span>
 	  	</li>
 	  </ul>
  </div>
</template>

<script>
	const apiUrl = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
export default {
  name: 'hello',
  data () {
    return {
      branches:["master","dev"],
      currentBranch:'master',
      commits:null
    }
  },
  created(){
  	this.fetchData()
  },
  watch:{
  	currentBranch:'fetchData'
  },
  filters:{
  	truncate(v){
  		var newline = v.indexOf('\n')
  		return newline>0?v.slice(0,newline):v
  	},
  	formatDate(v){
	  	return v.replace(/T|Z/g,'')
	  }
  },
  methods:{
  	fetchData(){
  		this.$http.get(apiUrl+this.currentBranch).then((res)=>{
  			this.commits = res.data
  		});
  		/*var xhr = new XMLHttpRequest()
  		var self = this;
  		xhr.open('GET',apiUrl+self.currentBranch)
  		xhr.onload = function(){
  			self.commits = JSON.parse(xhr.responseText)
  		}
  		xhr.send()*/
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
