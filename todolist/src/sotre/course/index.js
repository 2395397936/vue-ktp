import {createCourse, getCourse, getClassPeople, deleteCourse, deleteAll, joinCourse, archive,restore,archiveAll} from "@/api";
import Vue from "vue";
const state = {
    course: JSON.parse(sessionStorage.getItem("course"))||[],
}
const mutations = {
    changeCourse(state, newArray) {
        state.course = []
        for (let x = 0; x < newArray.length; x++) {
            state.course.push(newArray[x])
        }
        sessionStorage.setItem("course",JSON.stringify(state.course))
    },
    async getCourse(state,data) {
        state.course = data
        for (let i = 0; i < data.length; i++) {
            let params = new URLSearchParams();
            params.append('cid',data[i]['cid'])
            Vue.set(data[i],'all',(await getClassPeople(data[i])).data.length)
        }
        sessionStorage.setItem('course',JSON.stringify(data))
    },
}
const actions = {
    async create({commit,dispatch},data) {
        let result = await createCourse(data);
        console.log(result.data)
        if (result.data==='success'){
            dispatch("getCourse")
            dispatch("getPublicHome")
        }else {
            alert('此班级id已存在')
            return false
        }
    },
    async join({commit,dispatch},data) {
        let result = await joinCourse(data);
        console.log(result.data)
        if (result.data==='success'){
            dispatch("getCourse")
        }else {
            alert('此班级id不存在')
            return false
        }
    },

    async getCourse({commit}){
        let params = new URLSearchParams();
        params.append("id",sessionStorage.getItem("id"))
        let courses = await getCourse(params)
        if (courses.status===200){
            commit('getCourse',courses.data)
        }
        setTimeout(()=>{
            location.reload()
        },1000)
    },
    async deleteAll({commit,dispatch},data){
        await deleteAll(data)
        await dispatch("getCourse")
    },
    async delete({commit,dispatch},data){
        await deleteCourse(data)
        await dispatch("getCourse")
    },

    async archive({commit,dispatch},data){
        await archive(data)
        await dispatch("getCourse")
    },
    async restore({commit,dispatch},data){
        await restore(data)
        await dispatch("getCourse")
    },
    async archiveAll({commit,dispatch},data){
        await archiveAll(data)
        await dispatch("getCourse")
    },

}
const getters = {
    course(){
        return JSON.parse(sessionStorage.getItem("course"))
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}