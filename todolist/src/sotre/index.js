import Vuex from 'vuex'
import Vue from "vue";
import {login,getCourse} from '@/api'

Vue.use(Vuex)

import course from "@/sotre/course";
import user from "@/sotre/user";
import homework from "@/sotre/homework";
export default new Vuex.Store({
    modules: {
       user,course,homework
    }
})

