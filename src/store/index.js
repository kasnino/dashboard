import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
        isbarra: false,
        token:null,
        user:null,
    },
    mutations: {
        resetState (state) {
            state.isbarra=false;
            state.token=null;
            state.user=null;
        }
    },
    actions: {
        clearState ({ commit }) {
            commit('resetState');
        },
    }
});