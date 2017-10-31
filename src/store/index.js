import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state :{
        count:100
    },
    getters:{
        filterCount(state){
            return state.count >= 120 ? 120 :state.count
        }
    },
    mutations:{
        //同步操作
        increment(state,payload){
            state.count += payload.n;
        },
        decrement(state,payload){
            state.count -= payload.de;
        }
    },
    actions:{
        //异步操作
        Addaction(context){
            setTimeout(()=>{
                //改变状态，必须提交Mutations
                context.commit('increment',{n:5})
            },1000)
        },
        Deaction({commit,dispatch}){
            setTimeout(()=>{
               commit('decrement',{de:10})
               dispatch('textAction',{text:'test'})
            },2000)
        },
        textAction(context,obj){
            console.info("click")
        }
    }
})
export default store