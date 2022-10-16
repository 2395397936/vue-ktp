import {getClassPeople, login} from "@/api";

const state = {
    username: sessionStorage.getItem("username"),
    id: sessionStorage.getItem("id"),
    name: sessionStorage.getItem("name"),
    status: sessionStorage.getItem("status"),
    classPeople: JSON.parse(sessionStorage.getItem("classPeople")),
}
const mutations = {
    async userLogin(state, result) {
        state.status = result.status
        state.name = result.name
        state.id = result.id
        state.username = result.username
        sessionStorage.setItem("id", result.id)
        sessionStorage.setItem("name", result.name)
        sessionStorage.setItem("username", result.username)
        sessionStorage.setItem("status", result.status)
    },
    async getClassPeople(state, result) {
        state.classPeople = result
        sessionStorage.setItem("classPeople", JSON.stringify(result))
    },
}
const actions = {
    async userLogin({commit,dispatch}, data) {
        let result = await login(data);
        if (result.status === 200) {
            if (result.data === null) {
                return Promise.reject(new Error("工号或密码错误"));
            }
            commit("userLogin", result.data)
            dispatch("getCourse")
        }
    },
    async getClassPeople({commit,dispatch}, data) {
        let result = await getClassPeople(data);
        if (result.status === 200) {
            if (result.data === null) {
                return Promise.reject(new Error("工号或密码错误"));
            }
            commit("getClassPeople", result.data)

        }
    },
}
const getters = {
    teachers(state){
        return state.classPeople.filter((i)=>{return i.status==='t'})
    },
    students(state){
        return state.classPeople.filter((i)=>{return i.status==='s'})
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}