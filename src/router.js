import { createRouter,createWebHashHistory } from "vue-router";
import  allMenus from  './pages/Menu/allMenus.vue'
import Requirements from './pages/Menu/Requirements.vue'
const routes=[
    {
        path:'/login',
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
export default router