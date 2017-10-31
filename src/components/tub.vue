<template>
	<div id="demo">
		<h1>latest vue.js commits</h1>
		<templatel v-for="branch in branches">
			<input type="radio" 
				:id="branch" 
				:value="branch"
				name="branch"
				v-model="currentBranch"
				/>
				<label :for="branch">{{branch}}</label>
		</templatel>
		<p>vuejs/vue@{{currentBranch}}</p>
		<ul>
			<li v-for="record in commits">
				<a :href="record.html_url" target="_blank" class="commit">
					{{record.sha.slice(0,7)}}
				</a>
				- <span class="message">{{record.commit.message |truncate}}</span></br>
				by  
				<span class="author">
					<a :href="record.author.html_url" target="_blank">
						{{record.commit.author.name}}
					</a>
				</span>
				at <span class="date">{{record.commit.author.date |formatDate}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
	var demo = new Vue({
		el:"#demo",
		data(){
			branches:["master","dev"],
			currentBranch:'master',
			commits:null
		},
		create(){
			this.fetchData()
		},
		watch:{
			currentBranch:'fetchData'
		},
		filter:{
			truncate=(v)=>{
				var newline = v.indexOf('\n')
				return newline>0?v.slice(0,newline):v
			},
			formatDate=(v)=>{
				return v.replace(/T|Z/g,'')
			}
		},
		methods:{
			fetchData(){
				var xhr = new XMLHttpRequest();
				var self = this;
				xhr.open('GET',apiURL+self.currentBranch);
				xhr.onload(){
					self.commits = JSON.parse(xhr.responseText)
					console.info(self.commits[0].html_url)
				}
				xhr.send()
			}
		}
	})
</script>

<style>
</style>