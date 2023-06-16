<template>
    <h1>需求管理</h1>
    <button @click="show">新增</button>
      <subForm></subForm>
      <tableList></tableList>
      <slicePage></slicePage>
        <button @click="getData" class="ccccb">获取数据</button>
    <tr v-for="person in personData" :key="person.id">
    <td>{{person.login}}</td>
    <img :src="person.avatar_url"  >
    </tr>

</template>

<script setup>
import axios from 'axios'
import slicePage from '../../components/slicePage.vue';
import {  ref, reactive, watch, inject } from 'vue';
import tableList from '../../components/tableList.vue';
import subForm from '../../components/subForm.vue';
let requireMents=reactive([])
let personData=reactive([])

function getData(){
  // 发送get请求
  // 这个参数是添加请求地址
  axios.get('https://api.github.com/search/users?q=LiHua')
  // 使用.then获取数据
      .then(response=>{
      personData.push(...response.data.items)
      console.log('/posts get请求',response.data.items)
      console.log('@@@@@',personData)
      })
}
watch(personData, () => {
  /* 深层级变更状态所触发的回调 */
   
})

let showState=inject('showState')
let subState=inject('subState')
function show(){
  showState.value=true
  subState.value=false
}
</script>

<style scoped>
.ccccb{
  margin-top: 20px;
}
h1{
  text-align: center;
  margin: 10px;
  
}
button{
  width: auto;
  height: 27px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  line-height: 3px;
  display: block;
  margin: 5px auto;
  }
</style>