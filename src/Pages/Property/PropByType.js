import React, { useContext, useEffect, useState } from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import { PropContainer } from './style'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import { collection,where,query,getDocs } from '@firebase/firestore'
import { db } from '../../Firebase/firebase'
import { FilterContext } from '../../Context/FilterContextProvider'

const PropByType = () => {

    const {propByType,setPropByType}=useContext(PropContext)
    const {state:{selectedPropType}}=useContext(FilterContext)
    useEffect(()=>{getPropsByType()},[selectedPropType])

      
    const getPropsByType = async () => {
        const propRef=collection(db,'property')
        const queryRef=query(propRef,where("property",'==',selectedPropType))
        const docSnapshot= await getDocs(queryRef)
        const newArr= docSnapshot.docs.map((doc) => ({
            id: doc.id,
            data:doc.data()
          }));
          setPropByType(newArr)
          console.log(propByType)
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
                                                            />})}
    </PropContainer>
    <Footer />
    </>
  )
}

export default PropByType
