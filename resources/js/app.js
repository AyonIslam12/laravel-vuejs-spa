import Vue from 'vue';
import routes from './router/index.js';
require('./bootstrap');

import CxltToastr from 'cxlt-vue2-toastr';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';

var toastrConfigs = {
    position: 'top left',
    showDuration: 1000,
    timeOut: 5000,
    closeButton: true,
    progressBar: true,
    showMethod: 'fadeIn',
    hideMethod:'fadeOut',
}
Vue.use(CxltToastr, toastrConfigs)

//window.Vue = require('vue').default;


Vue.component('app-header', require('./components/header.vue').default);


const app = new Vue({
    el: '#app',
    router:routes,
});
