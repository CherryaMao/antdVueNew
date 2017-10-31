import Home from '../components/Home'
export default[{
	name:'home',
	title:'首页',
	component:Home,
	beforeCreate(tab,next){
		next()
	}
},{
	name:'test1',
	title:'测试1',
	component:{template:'<h2>test1 pages content</h2>'},
	beforeCreate(tab,next){
		next()
	}
},{
	name:'test2',
	title:'测试2',
	component:{template:'<h2>test2 pages content</h2>'},
	beforeCreate(tab,next){
		next()
	}
},{
	name:'test3',
	title:'测试3',
	component:{template:'<h2>test3 pages content</h2>'},
	beforeCreate(tab,next){
		next()
	}
},{
	name:"async",
	title:"异步组件",
	component:resolve=>{
		setTimeout(()=>{
			resolve({
				template:"<h2>async pages content</h2>"
			})
		},1000)
	}
},{
	name:"setting",
	title:"设置",
	component:{
		template:'<h2>设置</h2>'
	}
}]
