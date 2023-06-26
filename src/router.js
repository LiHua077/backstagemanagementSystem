import { createRouter,createWebHashHistory } from "vue-router";
import  allMenus from  './pages/Menu/allMenus.vue'
import Requirements from './pages/Menu/Requirements.vue'
const routes=[
    {
        path:'/login',
        name:'Login',
        component:()=>import('./pages/login.vue')
    },
    {
        path:'/admin',
        component:()=>import('./pages/admin.vue'),
        
        children:[
        {
          path:'allMenus',
          component:allMenus
        },{
            path:'require',
            component:Requirements
        },
        
             ]
    }
]
const router=createRouter({
history:createWebHashHistory(),
routes
})
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !(new Date().getTime()-JSON.parse(localStorage.getItem('token'))<6000000)) next({ name: 'Login' })
    else next()
  })
router.afterEach((to,from)=>{
  if(from.name=='Login'){
 let timer=  setInterval(() => {
  console.log('定时器')
    if(!(new Date().getTime()-JSON.parse(localStorage.getItem('token'))<6000000)){
router.push({
  name:'Login'
})
clearInterval(timer)
console.log('关闭定时器')
    }
   }, 10000);
  }
})
export default router
