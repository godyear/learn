import Vue from 'vue'
import VueRouter from 'vue-router'
const Student = () => import ("../views/student.vue")
const Login = () => import("../components/login.vue")
const Teacher = () => import("../views/teacher.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
