<template>
    <div>
       <app-stock v-for="(stock , index) in stocks" :stock="stock" v-bind:key="index"></app-stock>
    </div>
</template>
<script>

import Stock from './stock.vue' ;
import {mapGetters} from 'vuex' ;

export default {
    components: {
        'app-stock': Stock
    },

    computed: {

        ...mapGetters({
            stocks : 'portfolioStock'
        }) , 

    }
}
</script>