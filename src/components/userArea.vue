<template>
    <div class="userArea">
<div class="date">{{date}}</div>
<div class="title">lawidlawid</div>
<div class="user">
    <img :src="user.head" alt="" class="userHead">
    <span class="userName">{{user.name}}</span>
</div>
</div>
</template>

<script setup>
import { reactive } from 'vue';

let user=reactive({
    head:'../../src/assets/1.jpg',
    name:'lihua'
})
let date=new Date()
</script>

<style scoped>
.userArea{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user{  
    width: 165px;
    height: 80px;
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
</style>