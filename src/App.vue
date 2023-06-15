<script setup>
import { all } from 'axios';
import { provide, reactive, ref, watch } from 'vue';

// import login from './components/login.vue';
let data=reactive({allRequireMents:JSON.parse(localStorage.getItem('requirements')) ||[]})
provide('allRequireMents',data)
let requirement=reactive({requirements:data.allRequireMents.slice(0,5)})
provide('requirement',requirement)
let currentPage=ref(1)
provide('currentPage',currentPage)
let pageSize=ref([5,10,20,50])
provide('pageSize',pageSize)
let size=ref(5)
provide('size',size)
let total=ref(data.allRequireMents.length)
provide('total',total)
watch(size,(newValue)=>{
     requirement.requirements=data.allRequireMents.slice((currentPage.value-1)*newValue,currentPage.value*newValue) 
})
watch(currentPage,(newValue)=>{
     requirement.requirements=data.allRequireMents.slice((newValue-1)*size.value,newValue*size.value)
})
watch(data,(newValue)=>{
     localStorage.setItem('requirements',JSON.stringify(newValue.allRequireMents))
     requirement.requirements=newValue.allRequireMents.slice((currentPage.value-1)*size.value,currentPage.value*size.value)
     total.value=newValue.allRequireMents.length
})
watch(requirement.requirements,(newValue)=>{
  requirement.requirements=newValue
})
// for(let i=1;i<155;i++){
//    data.allRequireMents.push({id:i,name:`${i}kkz`,date:'332',person:'lllli'})
// }
let subState=ref(false) //提交和修改按钮显示隐藏状态
provide('subState',subState)
let showState=ref(false) //表单显示隐藏状态
provide('showState',showState)

let temp=reactive({})
provide('temp',temp)
</script>

<template>
  <div class="app">
<router-view> </router-view>

  </div>
 
</template>

<style scoped>


</style>
