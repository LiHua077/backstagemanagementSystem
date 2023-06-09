<template>
  <table>
        <thead>
          <tr>
            <th>任务名称</th>
            <th>截止日期</th>
            <th>负责人</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
         <tr v-for="requirement in requirements" :key="requirement.id">
              <td>{{requirement.name}}</td>
              <td>{{requirement.date}}</td>
              <td>{{requirement.person}}</td>
              <td>
              <button class="delete" @click="delStudent(requirement.id)"  >删除</button>
              <button class="change" @click="changeINfo(requirement.id)"  >修改</button>
              </td>
          </tr>
        </tbody>
      </table>
</template>

<script  setup>
import { reactive } from 'vue';

let requirements=reactive([{id:1,name:'lll',date:'2023.6.6',person:'lihua'}])

</script>

<style  scoped>
table {
    margin: 0 auto;
    width: 800px;
    border-collapse: collapse;
    color: #004085;
    table-layout: fixed;
    word-break: break-all;
}
table th {
  padding: 10px;
  background: #cfe5ff;
  font-size: 20px;
  font-weight: 400;
}
table td, table th {
  border: 1px solid #b8daff;
}
table td {
  padding: 10px;
  color: #666;
  text-align: center;
  font-size: 16px;
}
table tbody tr {
  background: #fff;
}
table tbody tr:hover {
  background: #e1ecf8;
}
table tbody .delete {
  width: 70px;
  height: 27px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  vertical-align: bottom;
  line-height: 3px;
  margin-right: 20px;
}
table tbody .change {
  width: 70px;
  height: 27px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  vertical-align: bottom;
  line-height: 3px;
}
</style>