import Vue from 'vue';
import App from './App.vue';
import router from './router'
import * as filters from './filters' // global filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
