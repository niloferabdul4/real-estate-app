import React from 'react'
import { Card,Image,InfoContainer,Span,BtnContainer,Button } from './style'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const RecentPropertyCard = ({name,image,address,price,country,property}) => {

  return (
    <>
       <Card>        
               
              <Image src={image} alt='' />      
              <InfoContainer>                         
                  <h3>{name}</h3>
                  <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <p><LocationOnIcon fontSize='small'/>{country}</p>
                    <p> {address}</p>
                  </span> 
              </InfoContainer>
              <BtnContainer> 
                <h3>Aed              
                 <Button>{price}/sqft</Button> 
                 </h3>           
                 <Span id={property}>{property}</Span>
              </BtnContainer>

    </Card>
    </>
  )
}

export default RecentPropertyCard
