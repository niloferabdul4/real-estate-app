const Reducer=(state,action)=>{
    switch(action.type){
        case 'SELECT_CATEGORY':   
        return {

          ...state,
          selectedCategory:action.payload,
                      
        };
        case 'LOAD_PROPERTIES':
            return{...state,propByCategory:action.payload}

        case 'default':
          return {...state}
    }
}
export default Reducer;