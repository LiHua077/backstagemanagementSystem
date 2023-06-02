<template>
  <div class="bigForm"> 
<form class="form">
  <div class="title">Welcome,<br><span>login to continue</span></div>
  <div class="resultFeedback"><span>{{ resultFeedback }}</span></div>
  <input type="text" placeholder="Username" name="text" class="input">
  <input type="password" placeholder="Password" name="password" class="input">
  <div class="otherOption"><a href="#" class="function">Forget Password</a><a href="#" class="function">Signup</a></div>
  <button class="button-confirm">Let`s go →</button>
</form>
</div> 
</template>

<script setup>
import { computed } from '@vue/reactivity';

let name
let word
let resultFeedback=computed(()=>{
if(name){
   if(!word){
    return '密码错误'
   }
}
else {
  return '用户名错误'
}
})

</script>

<style  scoped>

.bigForm{
    width: 400px;
    margin: 50px auto;
}
.form {
  --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  padding: 20px;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);

}

.title {
  color: var(--font-color);
  font-weight: 900;
  font-size: 20px;
  
}

.title span {
  color: var(--font-color-sub);
  font-weight: 600;
  font-size: 17px;
}

.input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

.input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.input:focus {
  border: 2px solid var(--input-focus);
}


 .button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

.button-confirm {
  margin: 0px auto 0 auto;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
}
.otherOption{
    width: 250px;
    display: flex;
    justify-content:space-between;
}
.function{
    text-decoration: none;
    color: #323232;
    font-size: 15px;
    font-weight: 600;
}
.resultFeedback{
  color: red;
}
</style>