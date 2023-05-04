import React, { useContext, useEffect, useState } from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import { PropContainer } from './style'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import { collection,where,query,getDocs } from '@firebase/firestore'
import { db } from '../../Firebase/firebase'

const PropByType = () => {

    const {state:{propByType,selectedPropType},dispatch}=useContext(PropContext)

    useEffect(()=>{getPropsByType()},[selectedPropType])

      
    const getPropsByType = async () => {
        const propRef=collection(db,'property')
        const queryRef=query(propRef,where("property",'==',selectedPropType))
        const docSnapshot= await getDocs(queryRef)
        const newArr= docSnapshot.docs.map((doc) => ({
            id: doc.id,
            data:doc.data()
          }));
          dispatch({type:'SET_PROPERTIES_BY_TYPE',payload:newArr})       
         
        }
      
  return (
    <>
       <Header/>
    <PropContainer>
      {propByType?.map(item=>{return <PropertyCard key={item.id}
                                                            id={item.id}
                                                            name={item.data.name} 
                                                            image={item.data.image}
                                                            address={item.data.address}
                                                            price={item.data.price} 
                                                            country={item.data.country}
                                                            description={item.data.description}
                                                            property={item.data.property}
                                                            category={item.data.category}
                                                            bedrooms={item.data.bedrooms}
                                                            bathrooms={item.data.bathrooms}
                                                            
                                                            />})}
    </PropContainer>
    <Footer />
    </>
  )
}

export default PropByType
