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
  },
  getters: {
    isLogin(state) {
      return state.email !== '';
    }
  },
  mutations: {
    setUsername(state, email) {
      state.email = email;
    },
    clearUsername(state, email) {
      state.email = '';
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
      console.log(data.user.email);
      commit('setToken', data.token);
      console.log(state.token);
      commit('setUsername', data.user.email);
      // saveAuthToCookie(data.token);
      // saveUserToCookie(data.user.email);
      return data;
    },
  },
});
