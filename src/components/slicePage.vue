<template>
    <div class="slicePage">
        <span class="total">共{{total}}条</span>
        <select name="" id="" v-model="size" class="check" >
            <!-- 双向绑定取size默认值为5 -->
            <option v-for="page in props.pageSize" :key="page"  :value="page" >{{page}}条/页</option>
        </select>
         <button @click="currentPage>1?handelPage(currentPage-1):currentPage" class="updown" >上一页</button>
         <button v-show="currentPage>3" @click="handelPage(1)">1</button>
         <button v-show="currentPage>4" @click="handelPage(currentPage-5)">...</button>
         <button v-show="currentPage>2" @click="handelPage(currentPage-2)" >{{currentPage-2}}</button>
         <button v-show="currentPage>1" @click="handelPage(currentPage-1)">{{currentPage-1}}</button>
         <button class="colorBlue" @click="handelPage(currentPage)">{{currentPage}}</button>
         <button v-show="currentPage+1<=allPage" @click="handelPage(currentPage+1)">{{currentPage+1}}</button>
         <button v-show="currentPage+2<=allPage" @click="handelPage(currentPage+2)">{{currentPage+2}}</button>
         <button v-show="currentPage+3<allPage" @click="handelPage(currentPage+5)">...</button>
         <button v-show="currentPage+2<allPage" @click="handelPage(allPage)">{{allPage}}</button>
         <button @click="currentPage<allPage?handelPage(currentPage+1) : currentPage" class="updown">下一页</button>
         <!-- 前往<input type="text" name="" id="" v-model.lazy.number="jisuanshuxing">页 -->
    </div>
</template>
<script  setup>
import { computed, inject, ref, watch } from 'vue';
const props=defineProps({
    size:Number,
    pcurrentPage:Number,
    pageSize:Array,
    total:Number,
    sizeChange:Function,
    currentChange:Function
})
let currentPage=ref(1)
let size=ref(props.pageSize[0])
let allPage=ref(Math.ceil(props.total/props.size))

function handelPage(e){
    if(e<=0){
        currentPage.value=1
    }
   else if(e>=allPage.value){
        currentPage.value=allPage.value
       }
    else{
        currentPage.value=e
       }
       props.currentChange(currentPage.value)
}
watch(size,(newValue)=>{
    allPage.value=Math.ceil(props.total/newValue)
    if(currentPage>allPage.value){
    currentPage=allPage.value
    console.log('&&**^&')
}
    props.sizeChange(newValue)
})

watch(()=>props.total,(newValue)=>{
    allPage.value=Math.ceil(newValue/size.value)
    console.log(newValue)
    console.log(size)
    if(currentPage>allPage.value){
    currentPage=allPage.value
    console.log('&&**^&')
}})
watch(currentPage,(newValue)=>{
      props.currentChange(newValue)
})


// let jisuanshuxing=computed({
//     get(value){
//         if(value<=allPage){
//                 props.currentPage.value=value
//                 return props.currentPage.value
//               }else {
//                 return props.currentPage.value
//               }
//     },
//     set(value){
//               if(value<=allPage){
//                 props.currentPage.value=value
//                return props.currentPage.value
//               }else {
//                 return props.currentPage.value
//               }
//     }
// })
</script>

<style  scoped>
.colorBlue{
    color: skyblue;
}
.slicePage{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
  width: 45px;
  height: 30px;
  border-radius: 5px;
  border: 2.5px solid #d4defa;
  box-shadow: 0px 0px 20px -20px;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
  font-family: 'Poppins', sans-serif;
}
button:hover {
  background-color: #F2F2F2;
  box-shadow: 0px 0px 20px -18px;
}
button:active {
  transform: scale(0.95);
}
.updown{
    width:auto;
}
.total{
    font-size: 14px;
    padding-right: 10px;
}
.check{
    margin-right: 10px;
}

.bgc{
    width:400px;
    height: 300px;
  border-style: groove;
   border-radius: 3px;
   border-top: 1px;
   border: black;
   margin: 0 auto;
}
</style>