import React from 'react'
import { PropCard,PropImage,PropInfoContainer ,Description} from './style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button,BtnContainer } from '../RecentProperty/style';
const PropertyCard = ({name,image,country,price,address,description}) => {
  return (
    <>
       <PropCard >                       
        <PropImage src={image} alt='' />      
                <PropInfoContainer>                         
                    <h3>{name}</h3>
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <p><LocationOnIcon fontSize='small'/>{country}</p>
                      <p> {address}</p>
                      <Description> {description}</Description>
                    </span> 
                </PropInfoContainer>
                <BtnContainer> 
                  <h3>Aed              
                  <Button>{price}/sqft</Button> 
                  </h3>           
                </BtnContainer>
        </PropCard>        
        
    </>
  )
}

export default PropertyCard
