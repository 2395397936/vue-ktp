import Register from "@/pages/common/Register";
import Login from "@/pages/common/Login";
import Home from "@/pages/teacher/TeacherHome";
import teacherCourse from "@/pages/teacher/TeacherCourse";
import ClassPeople from "@/pages/common/ClassPeople";
import TeacherHomeworkDetail from "@/pages/teacher/TeacherHomeworkDetail";
import StudentCourse from "@/pages/student/StudentCourse";
import Submit from "@/pages/student/Submit";
import TeacherHome from "@/pages/teacher/TeacherHome";
import StudentHome from "@/pages/student/StudentHome";
import Check from "@/components/teacher/Check";
export default [
    {
        path:'/',
        component:Login
    },

    {
        name:'register',
        path:'/register',
        component:Register
    },
    {
        name:'login',
        path:'/login',
        component:Login
    },
    {
        name:'home',
        path: '/home',
        component: Home
    },
    {
        name: 'teacherCourse',
        path: '/teacherCourse',
        component: teacherCourse,
    },
    {
        name:'classPeople',
        path: '/classPeople',
        component: ClassPeople
    },
    {
        name:'teacherHomeworkDetail',
        path: '/teacherHomeworkDetail',
        component: TeacherHomeworkDetail
    },
    {
        name:'studentHome',
        path: '/studentHome',
        component: StudentHome
    },
    {
        name:'teacherHome',
        path: '/teacherHome',
        component: TeacherHome
    },
    {
        name:'studentCourse',
        path: '/studentCourse',
        component: StudentCourse
    },
    {
        name:'submit',
        path: '/submit',
        component: Submit
    },
    {
        name:'check',
        path: '/check',
        component: Check
    }
]