// import Vue from 'vue';
// import Vuex from 'vuex';
//
// import auth from "./modules/auth";
// import alerts from "./modules/alerts-module";
// import profile from "./modules/profile-module";
// import users from "./modules/users-module";
// import reset from "./modules/reset"
//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
//   modules: {
//     auth,
//     alerts,
//     profile,
//     users,
//     reset
//   }
// });

import Vue from 'vue';
import Vuex from 'vuex';
// import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    username: '',
    token: '',
    loginOk: false
  },
  getters: {
    // isState() {
    //   return state.username !== '' ? true : false;
    // },
    isLogin(state) {
      return state.username !== '' ? true : false;
    },
    getUsername(state) {
      return state.username;
    },
    getToken(state) {
      return state.token;
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state, username) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.user.username);
      commit('setToken', data.token);
      console.log(state.token);
      commit('setUsername', data.user.username);
      // saveAuthToCookie(data.token);
      // saveUserToCookie(data.user.email);
      return data;
    },
  },
});
