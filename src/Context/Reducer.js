const Reducer=(state,action)=>{
    switch(action.type){

      case 'SET_PROPERTIES':
        return {
          ...state,properties:action.payload
        }
        case 'SET_AGENTS':
          return {
            ...state,agents:action.payload
          }
          case 'SET_SINGLE_PROPERTY_AGENT':
            return {
              ...state,singlePropertyAgent:action.payload
            }
      case 'SET_PROPERTIES_BY_CATEGORY':
           return{
            ...state,propByCategory:action.payload
           }   
           
      case 'SET_PROPERTIES_BY_TYPE':
            return{
             ...state,propByType:action.payload
            }  
      case 'LOAD_FILTERED_PROPERTIES':
          return{
            ...state,filteredProperties:action.payload
          }
        case 'ADD_LOCATION':
         
          return{
            ...state,
            currentLocation:action.payload
          }
       
        case 'SELECTED_CATEGORY':   
       
        return {

          ...state,
          selectedPropCategory:action.payload
                      
        }
        case 'SELECTED_TYPE':
          return {

            ...state,
            selectedPropType:action.payload
                        
          }
          case 'SELECTED_PRICE_RANGE':  
              return {
  
            ...state,
            maxPrice:action.payload
                        
          }
         case 'ADD_TO_FAVOURITES':
         
         if(!state.favourites.find(item=>item.id===action.payload.id))         
         {                
             state.favourites.push({                                             
               ...action.payload,
        
           })
         }
         
     return {
           ...state,
           favourites:[...state.favourites]                               
                                           
       }
       
        default:
          return {...state}
    }
}
export default Reducer;