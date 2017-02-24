import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    users: []
  },
  getters: {
     getUser: state => {
	return state.users;
     }	
  },
  mutations: {
    ADD_NEW_USER (state, newUser) {
      state.users.push(newUser);
    },
    USER_RECEIVED (state, Users) {
      state.users = Users;
    } 
  },
  actions: {
     ADD_NEW_USER (context, newUser){
	context.commit('ADD_NEW_USER',newUser);
     },
     USER_RECEIVED (context, Users){
	context.commit('USER_RECEIVED',Users);
     }
  } 
})

export default store
