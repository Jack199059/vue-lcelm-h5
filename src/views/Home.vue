<template>
   <div id="home">
       <h1>
           HOME
       </h1>
   </div>
</template>

<script>
//import HelloWorld from '@components/HelloWorld.vue'
import {
    getPosiData
} from '@/api/data'
export default {
    name:'Home',
    components:{
        //HelloWorld
    },

    async mounted(){
        let res =await getPosiData()

    }
}
</script>

<style  scoped>

   h1{
       width:3.75rem;
       height:1rem;
       background-color:skyBlue;
   }
</style>