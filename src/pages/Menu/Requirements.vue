<template>
    <h1>需求管理</h1>
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
import {  ref, reactive, watch } from 'vue';
import tableList from '../../components/tableList.vue';
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


</script>

<style scoped>
.ccccb{
  margin-top: 20px;
}
h1{
  text-align: center;
  margin: 10px;
  
}
</style>