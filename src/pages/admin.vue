<template>
    <div class="title">  <userArea></userArea></div>
  
<div class="body">
<ul class="sidemenu">
    <li  v-for="items in menu" :key="items.id" >
    <router-link :to="items.path">  <span :class="items.class" ></span><br>{{items.title}}</router-link>
     </li>
</ul>
<div class="content">

<router-view>
    
</router-view>
<!-- <subForm></subForm> -->
</div>
</div> 
</template>

<script  setup >
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import userArea from '../components/userArea.vue';
// import subForm from '../components/subForm.vue';
const menu=[
            {
            id:1,
            title:'全部菜单',
            class:'iconfont icon-sidemenucaidan',
            path:'/admin/allMenus',
            },
            {
            id:2,
            title:'需求管理',
            class:'iconfont icon-sidemenuxuqiu',
            path:'/admin/require'
            },
            {
            id:3,
            title:'在线调试',
            class:'iconfont icon-sidemenuweihu',
            path:'5'
            },
            {
            id:4,    
            title:'团队管理',
            class:'iconfont icon-sidemenutuandui',
            path:'6'
            },
            {
            id:5,
            title:'审计日志',
            class:'iconfont icon-sidemenushenji',
            path:'4'
            },
            {
            id:6,
            title:'开发管理',
            class:'iconfont icon-sidemenuguanli',
            path:'3'
            },
            {
            id:7,
            title:'快速开发',
            class:'iconfont icon-sidemenukaifa',
            path:'2'
            },
            {
            id:8,
            title:'网关管理',
            class:'iconfont icon-sidemenuwangguan',
            path:'1'
            }]


</script>

<style scoped>
@import url('../assets/iconfont.css');
a {
  color: inherit;
  text-decoration: none;
}

.router-link-active{
  color: skyblue;
}

a:active {
  color: skyblue;
  text-decoration: none;
}
.sidemenu{
    position:fixed;
    width: 15vh;
    height: 100vh;
    padding: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
 align-items:  center;
}
/* flex布局，对类选择背景色，排布方式 */
span{
text-align: center;
width: 20vh;
}
/* 图标居中 */
li{
    list-style: none;
    text-align: center;
    width: 15vh;
    padding: 10px 0 ;
    border-radius: 14px;
    font-size: 14px;
}
li:hover{
    cursor: pointer;
}
.bgc{
    color: skyblue;
}
.body{
    display: flex;
    justify-content: flex-start;
}
.content{
    margin-top: 80px;
    width: 100%;
    height: 100vh;
    background-color: rgba(230, 235, 241, 0.5);
   
   
}
.title{
    position:fixed;
    top: 0px;
    left: 15vh;
    width: 100%;
    height: 80px;
    background-color: #ccc;
}
</style>