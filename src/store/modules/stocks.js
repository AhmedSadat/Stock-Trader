
import data from '../../data/stocks.js' ;


const state = {

    stocks:[]
}


const mutations = {

    'SET_STOCKS'(state , stocks){
        state.stocks = stocks ;
    },

    'RND_STOCKS'(state){
               
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
