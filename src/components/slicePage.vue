<template>
    <div class="slicePage">
        <span class="total">共{{arr.length}}条</span>
        <select name="" id="" v-model="size" class="check" >
            <!-- 双向绑定取size默认值为5 -->
            <option v-for="page in pageSize" :key="page"  :value="page" >{{page}}条/页</option>
        </select>
         <button @click="currentPage>1?handelPage(currentPage-1):currentPage" class="updown">上一页</button>
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
    </div>
</template>

<script  setup>
import { reactive, ref, watch } from 'vue';
let arr=reactive([])
for(let i=1;i<100;i++){
   arr.push(i)
}
let currentPage=ref(1)
let pageSize=reactive([5,10,20,50])
let size=ref(5)
let allPage=ref(Math.ceil(arr.length/size.value))
watch(size,(newValue)=>{
    allPage.value=Math.ceil(arr.length/newValue)
    handelPage(1)
})
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
    console.log(arr,currentPage)//添加父组件回调
}


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
</style>