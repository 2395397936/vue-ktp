import {publicHomework, getHomework, getSubmitHomework, queryNameById, getScore} from "@/api";

const state = {
    publicHomework: JSON.parse(sessionStorage.getItem("publicHomework")) || [],
    submitHomework: JSON.parse(sessionStorage.getItem("submitHomework")) || []
}
const mutations = {
    getPublicHome(state, data) {
        // state.publicHomework = data
        state.publicHomework.splice(0,state.publicHomework.length)
        for (let i = 0; i < data.length; i++) {
            state.publicHomework.push(data[i])
        }
        sessionStorage.setItem("publicHomework", JSON.stringify(data))
        setTimeout(()=>{location.reload()},300)
    },
    async getSubmitHomework(state, data) {
        for (let i = 0; i < data.length; i++) {
            let params = new URLSearchParams()
            params.append('id', data[i].id)
            if (data[i].score===undefined){
                data[i].score='未阅'
            }
            data[i].name = (await queryNameById(params)).data
        }

        state.submitHomework = data
        sessionStorage.setItem("submitHomework", JSON.stringify(data))
    }
}
const actions = {
    async public({commit, dispatch}, data) {
        await publicHomework(data)
        await dispatch('getPublicHome')
    },

    async getPublicHome({commit}) {
        let params = new URLSearchParams()
        params.append('cid', JSON.parse(sessionStorage.getItem('current')).cid)
        let result = await getHomework(params)
        commit('getPublicHome', result.data)
    },
    async getSubmitHomework({commit}) {
        let params = new URLSearchParams()
        params.append("hid", sessionStorage.getItem("currentHid"))
        let result = await getSubmitHomework(params)
        commit('getSubmitHomework', result.data)
    },
    async getScore({dispatch},data) {
        await getScore(data)
        await dispatch('getSubmitHomework')
    }


}
const getters = {
    publicHomework() {
        return JSON.parse(sessionStorage.getItem("publicHomework"))
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}