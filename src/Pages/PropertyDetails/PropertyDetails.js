import React, { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { collection,onSnapshot,getDoc,doc, getDocs } from '@firebase/firestore'
import { db } from '../../Firebase/firebase'
import { Container,ImageContainer,Image,InfoContainer,Title, Price,Description,Address,Span,Button,ButtonContainer,Agent,AgentName,ContactNumber} from './styles'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import PropertyAgent from '../../Components/PropertyAgent/PropertyAgent'
import { PropContext } from '../../Context/PropContextProvider'

const PropertyDetails = () => {
    const {dispatch}=useContext(PropContext)
    const [singleProperty,setSingleProperty]=useState([])
   

    const {id}=useParams()
    const updatedPrice=new Intl.NumberFormat('en-US').format(singleProperty.price)

     useEffect(() => {
        id && getSingleProps();
       
      }, [id]);
        
      const getSingleProps = async () =>
       {        
        const docRef = doc(db, "property", id);
        const propDetail = await getDoc(docRef);
        setSingleProperty(propDetail.data());
        
      }
        
useEffect(()=>{

  {   

     const unSub=onSnapshot(collection(db,'property',id,'agent'),(snapShot)=>
    {
      const agent=snapShot.docs.map((item)=>(item.data()))
      dispatch({type:'SET_SINGLE_PROPERTY_AGENT',payload:agent})
    })
    
    return () => {
      unSub();
    };
    
 }


},[id])
     
     

  return (
    <> 
    <Header/>
       <Container  >                 
                <ImageContainer>
                    <Image src={singleProperty.image} alt='' />                    
                </ImageContainer>

                 <InfoContainer>
                        <Title>{singleProperty?.name}</Title>
                   
                        <Price>
                            <small>Aed</small>
                            <strong>{updatedPrice} / yr</strong>   
                                   
                        </Price>
                     
                       
                        <Address> 
                          {singleProperty?.address}   
                               
                        </Address>
                        <Span >
                          <p>Category: {singleProperty.category}</p>
                     
                          <p>Bedrooms: {singleProperty?.bedrooms}</p>
                       
                          <p>Bathrooms: {singleProperty?.bathrooms}</p>
                        </Span>
                        <Description>{singleProperty?.description}</Description>    
                        <PropertyAgent />                    
                 </InfoContainer> 
                         
           </Container>
           <Footer />
    </>
  )
}

export default PropertyDetails
