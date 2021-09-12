import Vue from "vue";
import Vuex, { Store } from "vuex";
Vue.use(Vuex);

import UserData from "./modules/userData";

const store = new Vuex.Store({
    modules: {
        UserData,

    },
    state: {},
    getters: {},
    mutations: {},
    actions: {},

});
export default store;
