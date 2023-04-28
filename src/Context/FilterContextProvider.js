import React,{createContext, useReducer} from 'react'
import Reducer from './Reducer'
export const FilterContext=createContext()


const FilterContextProvider = ({children}) => {
    const initialState={
        selectedPropType:'',
        selectedPropCategory:''
    }
    const [state,dispatch]=useReducer(Reducer,initialState)
  return (
    <>
    <FilterContext.Provider value={{state,dispatch}}>
       {children}

    </FilterContext.Provider>
    </>
      

  )
}

export default FilterContextProvider
