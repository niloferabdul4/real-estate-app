import React, { useContext,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection,query,where,getDocs, getDoc,doc } from '@firebase/firestore'

import { db } from '../../Firebase/firebase'
import { PropContext } from '../../Context/PropContextProvider'
import { Container,ImageContainer,Image,InfoContainer,Title, Price,Description} from './styles'

const PropertyDetails = () => {
    const {singleProperty,setSingleProperty}=useContext(PropContext)
    const {id}=useParams()
    useEffect(() => {
        id && getSingleProps();
      
      }, [id]);
        
      const getSingleProps = async () => {    
          
           
        const docRef = doc(db, "property", id);
        const propDetail = await getDoc(docRef);
        setSingleProperty(propDetail.data());
        
          
            }
           
  return (
    <>
       <Container  >                 
                <ImageContainer>
                    <Image src={singleProperty?.image} alt='' />                    
                </ImageContainer>

                 <InfoContainer>
                        <Title>{singleProperty?.name}</Title>
                        <hr style={{marginBottom:'10px', marginTop:'0px'}}></hr>
                        <Price>
                            <small>Aed</small>
                            <strong>{singleProperty?.price}</strong>
                        </Price>
                        <Description>{singleProperty?.description}</Description>           
                 </InfoContainer>            
           </Container>
    </>
  )
}

export default PropertyDetails
