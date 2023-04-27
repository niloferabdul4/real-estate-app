import React, { useContext,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../Firebase/firebase'
import { collection,where,query,getDocs } from '@firebase/firestore'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import { PropContainer } from './style'
import { PropContext } from '../../Context/PropContextProvider'
const PropByCategory = () => {
    const {setPropByCategory,propByCategory}=useContext(PropContext)
    const { category } = useParams();
  
  useEffect(() => {
    getCategoryProps();
  
  }, []);
    
  const getCategoryProps = async () => {
        const propRef=collection(db,'property')
        const queryRef=query(propRef,where("category",'==',category))
        const docSnapshot= await getDocs(queryRef)
       const newArr= docSnapshot.docs.map((doc) => ({
            id: doc.id,
            data:doc.data()
          }));
          setPropByCategory(newArr)
         
        }
  
      
  return (
  <>
    <PropContainer>
      {propByCategory?.map(item=>{return <PropertyCard key={item.id}
                                                            name={item.data.name} 
                                                            image={item.data.image}
                                                            address={item.data.address}
                                                            price={item.data.price} 
                                                            country={item.data.country}
                                                            description={item.data.description}
                                                            property={item.data.property}/>})}
    </PropContainer>
    </>
  )
}

export default PropByCategory
