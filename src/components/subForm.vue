<template>
        <div v-show="showState" class="form">
        <form class="info" autocomplete="off" @submit.prevent>    <!-- 禁止默认事件 -->
            <p><span>任务名称：</span><input type="text" class="requirement" v-model="req.name"/></p> 
            <p><span>截至日期：</span><input type="date" name="" id="" v-model="req.date"></p>
            <p><span>负责人：</span><input type="text" class="person" v-model="req.person" /></p>
            <button v-if="!subState" @click.stop="sub" >录入</button>
            <button v-if="subState"  @click.stop="change">修改</button>
        </form>
  <div class="x" @click="closeInfo">X</div></div>
</template>
<script setup>
import { inject, reactive } from 'vue';
import {nanoid} from 'nanoid';
let subState=inject('subState')
let showState=inject('showState')
function closeInfo(){
  showState.value=false
}
let req=reactive({id:'',name:'',date:'',person:''})
let temp=inject('temp')
const subrun=inject('subrun')
function sub(){
 if (req.name==''||req.person==''||req.date=='') {
  alert('内容不能为空')
 }
 else{ temp.trans.id=nanoid()
  temp.trans.name=req.name
  temp.trans.date=req.date
  temp.trans.person=req.person
  // console.log(req.id)
  console.log(temp.trans.id)
  req.name=''
  req.date=''
  req.person=''
  req.id=''
  subrun()}
}
const changerun=inject('changerun')
function change(){
  temp.trans.name=req.name
  temp.trans.date=req.date
  temp.trans.person=req.person
  req.name=''
  req.date=''
  req.person=''
  changerun()

}
</script>

<style  scoped>
.form {
  width: 400px;
  height: auto;
  border: solid 1px #004085;
  padding: 0;
  position: fixed;
  top: 20%;
  left: 37%;
  z-index: 1;
  background-color: #ccc;
}
.form .x {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: rgba(0, 64, 133, 0.7);
  font-size: 22px;
  cursor: pointer;
}
.form .info {
  margin: 50px auto;
  text-align: center;
}
.form .info input{
  width: 180px;
  height: 27px;
  outline: none;
  margin-top: 3px ;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid #004085;
  padding-left: 5px;
  box-sizing: border-box;
}
.info span{
  width: 100px;
  height: auto;
  display: inline-block;
  text-align: justify;
  text-align-last: justify;
  text-justify: distribute-all-lines;
}
.form .info button {
  width: 140px;
  height: 27px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

</style>