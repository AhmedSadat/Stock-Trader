<template>
    <div class="col-sm-6 col-sm-4 box">
       <div class="panel panel-success">
           <div class="panel-heading">
              <h3 class="panel-title">
                {{ stock.name }} <small>(price:{{ stock.price }})</small>
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
                    @click="buyStock"
                     :disabled = "insufficientFund || quantity <= 0 " > {{ insufficientFund ?  "insufficient Fund" : 'Buy' }}  </button>
               </div>
           </div>
       </div>
    </div>
</template>
<script>


export default {
    


    props:["stock"] ,

    computed:{
                  funds(){
                               return this.$store.getters.funds ;
                  },

                  insufficientFund(){
                      return this.stock.price * this.quantity > this.funds
                  }
    },

    methods:{
                 
                    buyStock(){

                        const order = {
                            stockID : this.stock.id ,
                            stockPrice: this.stock.price ,
                            stockQuantity: +this.quantity , 
                        }
                         
                         console.log("from buyStock method" + order );
                         this.$store.dispatch('buyStock', order);
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

<style scoped>

 .box{
           padding: 10px;
           margin: 10px;
 }
</style>