import VueRouter from 'vue-router'

import store from "../sotre";
import routes from "@/router/routes";

// let originPush = VueRouter.prototype.push;
// let originReplace = VueRouter.prototype.replace;
//
// VueRouter.prototype.push = function (location, resolve, reject) {
//     if (resolve && reject) {
//         originPush.call(this, location, resolve, reject);
//     } else {
//         originPush.call(this, location, () => {
//         }, () => {
//         })
//     }
// }
//
// VueRouter.prototype.replace = function (location, resolve, reject) {
//     if (resolve && reject) {
//         originReplace.call(this, location, resolve, reject);
//     } else {
//         originReplace.call(this, location, () => {
//         }, () => {
//         })
//     }
// }

export default new VueRouter({
    mode:'history',
    routes,
    scrollBehavior(to, from, savePosition) {
        return {y: 0}
    }
})

