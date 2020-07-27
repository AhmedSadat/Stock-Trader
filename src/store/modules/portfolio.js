const state = {
    funds : 1000  , 
    stocks : [] ,
}

const mutations = {

    'BUY_STOCK'(state , { stockID  , stockPrice , stockQuantity }){
        console.log(stockID + " " + stockPrice + " " + stockQuantity );
        const record =   state.stocks.find(element=> element.id === stockID) ;
        if(record){
            
            record.quantity += stockQuantity ;
           
            
        }else{
           
            state.stocks.push({id:stockID , quantity: stockQuantity , price:stockPrice});
          
        }

        state.funds -= stockPrice * stockQuantity ;
    },

    'SELL_STOCK'(state,{ stockID , quantity , stockPrice }){
        const record =   state.stocks.find(element=> element.id === stockID) ;
           if(record.quantity > quantity){
              record.quantity -= quantity ;
           }else{
              state.stocks.splice(state.stocks.indexOf(record, 1)) ;
           }

           state.funds += stockPrice * quantity
    }
}

const actions = {

    buyStock:({commit}, order)=>{
         commit('BUY_STOCK' , order);
         console.log("from action " + order);
    },

    sellStock:({commit},order)=>{
         commit('SELL_STOCK',order);
    }


}

const getters = {

    portfolioStock:(state , getters)=>{    
        return state.stocks.map(stock=>{
           const record = getters.stocks.find(element=> element.id === stock.id) 
            return {
                      id :  stock.id,
                      quantity: stock.quantity, 
                      name : record.name , 
                      price : record.price
            }
        }) ;

    },

     funds:(state)=>{
         return state.funds
     }
}

export default {

    mutations , 
    state , 
    getters,
    actions
}