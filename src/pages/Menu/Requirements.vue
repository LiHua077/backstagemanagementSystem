<template>
    <h1>需求管理</h1>
    <button @click="show">新增</button>
      <subForm></subForm>
      <tableList></tableList>
      <slicePage 
      :currentPage="currentPage"
      :size="size"
      :sizeChange="handleSizeChange"
      :currentChange="handleCurrentChange"
      :pageSize="[5,10,20,50,100]"
      :total="data.allRequireMents.length"
      ></slicePage>
     
    <!-- <button @click="getData" class="ccccb">获取数据</button>
    <tr v-for="person in personData" :key="person.id">
    <td>{{person.login}}</td>
    <img :src="person.avatar_url"  >
    </tr> -->
  
</template>

<script setup>
// import axios from 'axios' 
import slicePage from '../../components/slicePage.vue';
import { provide, reactive, ref, watch } from 'vue';
import tableList from '../../components/tableList.vue';
import subForm from '../../components/subForm.vue';
import {usepageOptions} from '../../stores/pageOptions'
import { nanoid } from 'nanoid';
const pageOptions=usepageOptions()
let currentPage=ref(2)
let size=ref(10)
let data=reactive({allRequireMents:JSON.parse(localStorage.getItem('requirements')) ||[]})
provide('allRequireMents',data)
let requirement=reactive({requirements:data.allRequireMents.slice(0,10)})
provide('requirement',requirement)
let total=ref(data.allRequireMents.length)
provide('total',total)
const handleSizeChange = (val) => {
   size.value=val
   requirement.requirements=data.allRequireMents.slice((currentPage.value-1)*val,currentPage.value*val)
}
const handleCurrentChange = (val) => {
requirement.requirements=data.allRequireMents.slice((val-1)*size.value,val*size.value)
currentPage.value=val
}
watch(data,(newValue)=>{
     localStorage.setItem('requirements',JSON.stringify(newValue.allRequireMents))
     requirement.requirements=newValue.allRequireMents.slice((currentPage.value-1)*size.value,currentPage.value*size.value)
     total.value=newValue.allRequireMents.length
})
watch(requirement.requirements,(newValue)=>{
  requirement.requirements=newValue
})
//数据初始化
// for(let i=1;i<155;i++){
//    data.allRequireMents.push({id:nanoid(),name:`${i}kkz`,date:'332',person:'lllli'})
// }
let subState=ref(false) //提交和修改按钮显示隐藏状态
provide('subState',subState)
let showState=ref(false) //表单显示隐藏状态
provide('showState',showState)
function show(){
  showState.value=true
  subState.value=false
}
let temp=reactive({trans:{id:'',name:'',date:'',person:''}})
provide('temp',temp)

function changeInfo(id){
     subState.value=true
     showState.value=true
     temp.trans.id=id
     console.log(temp)
}
provide('changeInfo',changeInfo)
function subrun(){
     data.allRequireMents.push({id:temp.trans.id,name:temp.trans.name,date:temp.trans.date,person:temp.trans.person})
}
provide('subrun',subrun)

function changerun(){
     const a= data.allRequireMents.indexOf(data.allRequireMents.find(requirement=>requirement.id==temp.trans.id))
     data.allRequireMents.splice(a,1,{id:temp.trans.id,name:temp.trans.name,date:temp.trans.date,person:temp.trans.person})
     temp.trans.id=''
}
provide('changerun',changerun)



















// let personData=reactive([])
// function getData(){
//   // 发送get请求
//   // 这个参数是添加请求地址
//   axios.get('https://api.github.com/search/users?q=LiHua')
//   // 使用.then获取数据
//       .then(response=>{
//       personData.push(...response.data.items)
//       console.log('/posts get请求',response.data.items)
//       console.log('@@@@@',personData)
//       })
// }
// watch(personData, () => {
//   /* 深层级变更状态所触发的回调 */
   
// })
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