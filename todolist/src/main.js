import Vue from 'vue'
import App from './App.vue'
import store from './sotre'
import router from './router'
import * as API from './api'
import qs from 'qs'

//引入ElementUI全部样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(ElementUI)
Vue.use(VueRouter)
//创建vm
new Vue({
    el:'#app',
    router,
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API;
        Vue.prototype.$qs = qs
    }
})
