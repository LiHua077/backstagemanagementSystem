<template>
    <div class="title">title</div>
<div class="body">
<ul class="sidemenu" >
    <li @click="allMenus"><span class="iconfont icon-sidemenucaidan"></span><br>全部菜单</li> 
    <li @click="require"><span class="iconfont icon-sidemenuxuqiu"></span><br>需求管理</li> 
    <li><span class="iconfont icon-sidemenuweihu"></span><br>在线调试</li> 
    <li><span class="iconfont icon-sidemenutuandui"></span><br>团队管理</li> 
    <li><span class="iconfont icon-sidemenushenji"></span><br>审计日志</li> 
    <li><span class="iconfont icon-sidemenuguanli"></span><br>开发管理</li> 
    <li><span class="iconfont icon-sidemenukaifa"></span><br>快速开发</li> 
    <li><span class="iconfont icon-sidemenuwangguan"></span><br>网关管理</li> 
</ul>
<div class="content">
<router-view>
    
</router-view>
</div>
</div> 
</template>

<script setup >
import  { useRouter} from 'vue-router'
const $router=useRouter()
function require(){
    $router.push({
        path:'/admin/require'
    })
}
function allMenus(){
    $router.replace({
        path:'/admin/allMenus',
    })
}


</script>

<style scoped>
@import url('../assets/iconfont.css');

.sidemenu{
    position:relative;
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
    width: 20vh;
    padding: 10px 0 ;
    border-radius: 14px;
    font-size: 14px;
}
/*  文字居中加边距和图标间产生空隙*/
/* .son:hover{
    color: skyblue;
} */
/* 学js之前的，鼠标移动到的地方变蓝 */
.bgc{
    color: skyblue;
}
.body{
    display: flex;
    justify-content: flex-start;
}
.content{
    width: 100%;
    height: 100vh;
    background-color: skyblue;
}
.title{
    position:fixed;
    top: 0px;
    left: 15vh;
    width: 100%;
    height: 50px;
    background-color: #ccc;
}
</style>