const Reducer=(state,action)=>{
    switch(action.type){
        case 'SELECT_BY_CATEGORY':   
        return {

          ...state,
          selectedPropCategory:action.payload
                      
        };
        case 'SELECT_BY_TYPE':
          return {

            ...state,
            selectedPropType:action.payload
                        
          };

        case 'default':
          return {...state}
    }
}
export default Reducer;