import React, { useContext,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc,doc } from '@firebase/firestore'
import { db } from '../../Firebase/firebase'
import { PropContext } from '../../Context/PropContextProvider'
import { Container,ImageContainer,Image,InfoContainer,Title, Price,Description,Category,Address,Rooms} from './styles'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

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
    <Header/>
       <Container  >                 
                <ImageContainer>
                    <Image src={singleProperty.image} alt='' />                    
                </ImageContainer>

                 <InfoContainer>
                        <Title>{singleProperty?.name}</Title>
                        <hr style={{marginBottom:'10px', marginTop:'0px'}}></hr>
                        <Price>
                            <small>Aed</small>
                            <strong>{singleProperty?.price} / yr</strong>                       
                        </Price>
                        <Category>Category: {singleProperty.category}</Category>
                        <Address> {singleProperty?.address}</Address>
                        <Rooms >
                          <p>Bedrooms: {singleProperty?.bedrooms}</p>
                          <p>Bathrooms: {singleProperty?.bathrooms}</p>
                        </Rooms>
                        <Description>{singleProperty?.description}</Description>           
                 </InfoContainer>            
           </Container>
           <Footer />
    </>
  )
}

export default PropertyDetails
