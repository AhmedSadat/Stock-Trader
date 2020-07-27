<template>
    <div class="container">
                                 <app-header></app-header>

            <div class="row">
                <div class="col-xs-12">
                    <transition name="slide" mode="out-in">
                                    <router-view></router-view>
                    </transition>
                </div>        
                <div class="col">
                     <button class="btn btn-success " @click="randomziePrice">Randomize Price</button>
                </div>            
            </div>
    </div>
</template>

<script>
 
 import Header from './components/Header.vue' ;
 import Home from './components/Home.vue' ;

    export default {

        methods:{
                       randomziePrice(){
                        this.$store.dispatch('randomizeStock');
                    }
        },

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

.slide-enter-active {

    animation: slide-in 200ms ease-out forwards;

}

.slide-leave-active {
      
      animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in{
    from{
         transform: translateY(-30px) ;
         opacity: 0;
    }
    to{
          transform: translateY(0px);
          opacity: 1;
    }
}

@keyframes slide-out{

    from {
             transform: translateY(0);
             opacity: 1;
    }
    to{
           transform: translateY(-30px);
           opacity: 0;
    }
}

</style>
