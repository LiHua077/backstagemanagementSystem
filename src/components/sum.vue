<template>
    <div>
        <button @click="clickcount">1111</button>
   {{sum}}
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    name:'suM',
    setup () {
        const sum=ref(1)
        function clickcount(){
           sum.value++
           console.log(sum)
        }
        return {
            sum,
            clickcount
        }
    }
}
</script>

<style lang="scss" scoped>

</style>