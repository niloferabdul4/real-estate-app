import React, { useState,useEffect,createContext,useReducer} from 'react'
import { onSnapshot,collection } from '@firebase/firestore'
import { db } from '../Firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import Reducer from './Reducer'

export const PropContext=createContext()

const PropContextProvider = ({children}) => {


  useEffect(()=>{
      
    const unSub=onSnapshot(collection(db,'property'),(snapshot)=>{
      const newItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        data:doc.data()
      }));
      dispatch({type:'SET_PROPERTIES',payload:newItems}); 
   
    })
    return () => {
      unSub();
    };
  },[])

 
 
  const initialState={properties:[],
                      agents:[],
                      singlePropertyAgent:[],
                      propByType:[],
                      propByCategory:[],
                      currentLocation:'',
                      selectedPropType:'',
                      selectedPropCategory:'',
                      maxPrice:0,
                      filteredProperties:[],
                      favourites:[]
                     
                    }
  const [state,dispatch]=useReducer(Reducer,initialState)
    const [user,setUser]=useState('')


    useEffect(()=>{
      const unSub=onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        setUser({email:user.email,displayName:user.displayName})
      }
      else
      {
        setUser(null)
      }
  
      })
      return ()=>unSub
    },[])  
     
  return (
   
    <>
      <PropContext.Provider value={{state,dispatch,
                                    user,setUser,
                                    }} >
        {children}
      </PropContext.Provider>
    </>
  )
}

export default PropContextProvider
