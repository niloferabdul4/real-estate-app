import React, { useContext,useEffect } from 'react'
import { db } from '../../Firebase/firebase'
import { collection,where,query,getDocs } from '@firebase/firestore'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import { PropContainer } from './style'
import { PropContext } from '../../Context/PropContextProvider'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


const PropByCategory = () => {
    const {state:{propByCategory,selectedPropCategory},dispatch}=useContext(PropContext)
  
  
    useEffect(() => {
      getPropsByCategory();    
    
    }, [selectedPropCategory]);
      
    const getPropsByCategory = async () => {
          const propRef=collection(db,'property')
          const queryRef=query(propRef,where("category",'==',selectedPropCategory))
          const docSnapshot= await getDocs(queryRef)
          const newArr= docSnapshot.docs.map((doc) => ({
              id: doc.id,
              data:doc.data()
            }));
             dispatch({type:'SET_PROPERTIES_BY_CATEGORY',payload:newArr})       
          }
    
 
      
  return (
  <>
   <Header/>
    <PropContainer>
      {propByCategory?.map(item=>{return <PropertyCard key={item.id}
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

export default PropByCategory
