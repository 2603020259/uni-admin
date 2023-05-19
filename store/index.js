import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	actions: {

	},
	mutations: {
		ORDER(state, value) {
			console.log(value);
			state.orderData.push(value);
		},
		DELETE(state, value) {
			console.log('value', value);
			value.forEach((item)=>{
				state.orderData=state.orderData.filter((p)=>{
					return p.path !==item.path;
				})
			})
			console.log(111,state.orderData);
		},
		ADD(state,value){
			state.address=value;
		},
		SEARCHVALUE(state,value){
			state.searchValue=value;
		}
	},
	state: {
		orderData: [],
		address:{},
		searchValue:'',
	}
});

export default store;