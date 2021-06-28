import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/01home/Home')
const Category = () => import('../views/02category/Category')
const Cart = () => import('../views/03cart/Cart')
const Profile = () => import('../views/04profile/Profile')
// const Detail = () => import('views/detail/Detail')

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  // {
  //   path: '/detail',
  //   component: Detail
  // }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
