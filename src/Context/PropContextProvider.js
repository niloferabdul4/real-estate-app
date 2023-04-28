import React, { useState,useEffect,createContext,useReducer} from 'react'
import { onSnapshot,collection } from '@firebase/firestore'
import { db } from '../Firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import Reducer from './Reducer'
export const PropContext=createContext()

const PropContextProvider = ({children}) => {
    const [property,setProperty]=useState([])
    const [propByCategory,setPropByCategory]=useState([])
    const [selectedPropType,setSelectedPropType]=useState('')
    const [propByType,setPropByType]=useState([])
    const [singleProperty,setSingleProperty]=useState({})
    const [agents,setAgents]=useState([])
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

    useEffect(()=>{
      
        const unSub=onSnapshot(collection(db,'property'),(snapshot)=>{
          const newItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            data:doc.data()
          }));
          setProperty(newItems); 
       
        })
        return () => {
          unSub();
        };
      },[])

     
     
     
  return (
   
    <>
      <PropContext.Provider value={{property,
                                    propByCategory,
                                    setPropByCategory,
                                    propByType,
                                    setPropByType,
                                    selectedPropType,
                                    setSelectedPropType,
                                    singleProperty,
                                    setSingleProperty,
                                    user,setUser,
                                    agents,setAgents}} >
        {children}
      </PropContext.Provider>
    </>
  )
}

export default PropContextProvider
