<template>
    <div class="slicePage">
        <span class="total">共{{total}}条</span>
        <select name="" id="" v-model="size" class="check" >
          
            <option v-for="page in props.pageSize" :key="page"  :value="page" >{{page}}条/页</option>
        </select>
         <button @click="current_Page>1?handelPage(current_Page-1):current_Page" class="updown" >上一页</button>
         <button v-show="current_Page>3" @click="handelPage(1)">1</button>
         <button v-show="current_Page>4" @click="handelPage(current_Page-5)">...</button>
         <button v-show="current_Page>2" @click="handelPage(current_Page-2)" >{{current_Page-2}}</button>
         <button v-show="current_Page>1" @click="handelPage(current_Page-1)">{{current_Page-1}}</button>
         <button class="colorBlue" @click="handelPage(current_Page)">{{current_Page}}</button>
         <button v-show="current_Page+1<=allPage" @click="handelPage(current_Page+1)">{{current_Page+1}}</button>
         <button v-show="current_Page+2<=allPage" @click="handelPage(current_Page+2)">{{current_Page+2}}</button>
         <button v-show="current_Page+3<allPage" @click="handelPage(current_Page+5)">...</button>
         <button v-show="current_Page+2<allPage" @click="handelPage(allPage)">{{allPage}}</button>
         <button @click="current_Page<allPage?handelPage(current_Page+1) : current_Page" class="updown">下一页</button>
        
    </div>
    
</template>
<script  setup>
import { computed, inject, ref, watch } from 'vue';
const props=defineProps({
    size:Number,
    currentPage:Number,
    pageSize:Array,
    total:Number,
    sizeChange:Function,
    currentChange:Function,
})

const emit = defineEmits(["update:currentPage",'update:size']);

let current_Page
if(props.currentPage){
 current_Page=ref(props.currentPage)
}
else{
     current_Page=ref(1)
}
let size
if(props.size){
    size=ref(props.size)
}
else if(props.pageSize){
    size=ref(props.pageSize[0])
}
else{
    size=ref(10)
}
let allPage=ref(Math.ceil(props.total/size.value))

function handelPage(e){
    if(e<=0){
        props.currentChange(1)
        emit("update:currentPage",1)
        current_Page.value=1
    }
   else if(e>=allPage.value){
    props.currentChange(allPage.value)
     current_Page.value=allPage.value
     emit("update:currentPage",allPage.value)
}
    else{
        current_Page.value=e
        props.currentChange(e)
        emit("update:currentPage",e)
       }
}
watch(size,(newValue)=>{
    allPage.value=Math.ceil(props.total/newValue)
    if(current_Page.value>allPage.value){
    props.currentChange(allPage.value)
    current_Page.value=allPage.value
    emit("update:currentPage",allPage.value)
    console.log('&&**^&')
}
    props.sizeChange(newValue)
    emit("update:size",newValue)
})
watch(()=>props.total,(newValue)=>{
    allPage.value=Math.ceil(newValue/size.value)
    if(props.currentPage>allPage.value){
    props.currentChange(allPage.value)
    current_Page.value=allPage.value
    console.log('&&**^&')
}})
watch(()=>props.currentPage,(newValue)=>{
      props.currentChange(newValue)
})
watch(current_Page,(newValue)=>{
    handelPage(newValue)
})

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