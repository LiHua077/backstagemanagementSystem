import { defineStore } from 'pinia'
 export const usepageOptions = defineStore('pageOptions', {
  state: () => {
    return { 
      currentPage: 1,
      pageSize:[5,10,20,50],
      size:5
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })

getters:{
    
},

  actions: {
    pageup() {
      this.currentPage++
    },
  },
})
