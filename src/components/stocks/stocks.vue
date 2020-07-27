<template>
    <div class="sockRoot">
       <app-stock v-for="(stock , index ) in stocks" :stock="stock" v-bind:key="index"></app-stock>
    </div>
</template>
<script>
import Stock from './stock.vue'
export default {

    methods:{
               
    },

    created(){
          this.stocks = this.$store.getters.stocks ;
    },
   
    
    data:()=>{
        return {
                   stocks:[] , 
      
        }
    },

    components: {
        'app-stock' : Stock
    }
}
</script>

<style  scoped>
  .sockRoot{
      margin:10px ;
      padding: 10px;
  }
</style>