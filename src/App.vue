<template>
    <div class="container">
                                 <app-header></app-header>

            <div class="row">
                <div class="col-xs-12">
                                    <router-view></router-view>
                </div>                    
            </div>
    </div>
</template>

<script>
 
 import Header from './components/Header.vue' ;
 import Home from './components/Home.vue' ;

    export default {

        created(){
         this.$store.dispatch('setStock');
   },
          
          components:{
              'app-header':  Header ,
              'app-home' :    Home,
          }
    }
</script>

<style>

</style>
