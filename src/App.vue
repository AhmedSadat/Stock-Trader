<template>
    <div class="container">
         <router-view></router-view>
    </div>
</template>

<script>
 
 import Header from './components/Header.vue' ;
 import Home from './components/Home.vue' ;

    export default {
          
          components:{
              'app-header':  Header ,
              'app-home' :    Home,
          }
    }
</script>

<style>

</style>
