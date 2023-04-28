import React from 'react'
import { PropCard,PropImage,PropInfoContainer ,Description} from './style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button,BtnContainer } from '../RecentProperty/style';
import { useNavigate } from 'react-router-dom';
const PropertyCard = ({id,name,image,country,price,address,description}) => {
  const navigate=useNavigate()
 

  return (
    <>
       <PropCard >                       
        <PropImage src={image} alt='' role='button' onClick={()=>{navigate(`/detail/${id}`)}} />      
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
