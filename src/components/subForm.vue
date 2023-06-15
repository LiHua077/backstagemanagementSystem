<template>
    <div>
        <div  class="form">
        <form class="info" autocomplete="off" @submit.prevent>    <!-- 禁止默认事件 -->
          <p>任务名称：<input type="text" class="uname"   /></p> 
            <p>性别：<select  class="gender"  >
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select></p><p>负责人：<input type="text" class="team"  /></p>
            <button v-if="!subState" @click="sub" >录入</button>
            <button v-if="subState"  @click="change">修改</button>
        </form>
  <div class="x" @click="closeInfo">X</div></div>
    </div>
</template>

<script setup>

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
.form .info input, .form .info select {
  width: 80px;
  height: 27px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #004085;
  padding-left: 5px;
  box-sizing: border-box;
  margin-right: 15px;
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
}
</style>