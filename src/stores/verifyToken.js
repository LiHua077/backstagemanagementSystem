import { defineStore } from 'pinia'
 export const useToken = defineStore('token', {
  state: () => {
  let strtoken=JSON.parse(localStorage.getItem('token'))
    return { 
       strtoken,
    }
  },
getters:{
    
},
actions: {
    
  },
})