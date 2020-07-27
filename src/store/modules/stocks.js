
import data from '../../data/stocks.js' ;


const state = {

    stocks:[]
}


const mutations = {

    'SET_STOCKS'(state , stocks){
        state.stocks = stocks ;
    },

    'RND_STOCKS'(state){
               state.stocks.forEach(element => {
                   element.price = Math.round(element.price * (1 + Math.random() -0.5  ) );
               });
    } ,

   
}

 const actions = { 
     
    // buyStock: ({commit} , order)=>{

    //        commit()
    //                  } , 
                     
        setStock :({commit})=>{
             commit('SET_STOCKS' , data)
        }  ,
        
        randomizeStock: ({commit})=>{
            commit('RND_STOCKS');
            console.log("from randomize");
        }
}

const getters = {
    stocks : state =>{
        return state.stocks ;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
