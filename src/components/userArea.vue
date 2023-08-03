<template>
    <div class="userArea">
<div class="date">{{date}}</div>
<div class="title">项目需求管理</div>
<div class="useroption">
   
    <div class="user" >
    <img :src="user.head" alt="" class="userHead">
    <span class="userName">{{user.name}}</span>  
</div>
<div class="options">
    <span>个人中心</span>
    <span @click="exitLog">退出登录</span>
</div>
</div>

</div>
</template>

<script setup>

import { reactive , ref ,computed} from 'vue';
import { useRouter } from 'vue-router';

let user=reactive({
    head:'1.jpg',
    name:'lihua'
})
let date=ref(new Date().toString())
// console.log(date)
setInterval(()=>{
    date.value=new Date()
},1000)
const $router = useRouter()
function exitLog(){
    $router.push({
      path:"/login",
     })
     localStorage.removeItem('token')
}

</script>

<style scoped>
.userArea{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.useroption{
    width: 300px;
    height: 80px;
   display: flex;
   justify-content: center;
}
.user{  
    /* width: 100px;
    height: 80px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.userHead{
    width: 50px;
    height: 50px;
    border-radius: 25px;
}
.userName{
    padding-left: 7px;
}

.options{
   
    display: flex;
    margin-right: 108px;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 15px;
    align-content:center;
    cursor: pointer;
}


</style>