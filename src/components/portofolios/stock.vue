<template>
    <div class="col-sm-6 col-sm-4">
       <div class="panel panel-success">
           <div class="panel-heading">
              <h3 class="panel-title">
                {{ stock.name }} <small>(price:{{ stock.price }} | Quality: {{ stock.quantity}} )</small>
              </h3>
           </div>
           <div class="panel-body">
               <div class="pull-left">
                  <input  
                          type="number"
                          class="form-control"
                          placeholder="Quality"
                          v-model = "quantity"
                  >
               </div>
               <div class="pull-right">
                   <button 
                   class="btn btn-success"
                    @click="sellStock"
                     :disabled = " quantity <= 0 " > Sell  </button>
               </div>
           </div>
       </div>
    </div>
</template>
<script>

// import {mapMu}

export default {
    props:["stock"] ,

    methods:{
                 
         sellStock(){
                        const order = {
                            stockID : this.stock.id , 
                            stockPrice : this.stock.price , 
                            quantity  : this.quantity 
                        } ;
                        console.log(this.stock.quantity);
                        this.$store.dispatch('sellStock' , order);
                        this.quantity = 0 ;
         }
    },

    data:()=>{
        return {
            quantity: 0 ,
            }
        }
    }

</script>