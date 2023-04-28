import React from 'react'
import { PropCard,PropImage,PropInfoContainer ,Description,Name} from './style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button,BtnContainer } from '../RecentProperty/style';
import { useNavigate } from 'react-router-dom';
const PropertyCard = ({id,name,image,country,price,address,description,category}) => {
  const navigate=useNavigate()
 

  return (
    <>
       <PropCard >                       
        <PropImage src={image} alt='' role='button' onClick={()=>{navigate(`/details/${id}`)}} />      
                <PropInfoContainer>                         
                    <Name>{name}</Name>                    
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <p><strong>Category: </strong>{category}</p>
                      <p><LocationOnIcon fontSize='small'/>{country}</p>
                      <p> {address}</p>
                      <Description> {description}</Description>
                    </span> 
                </PropInfoContainer>
                <BtnContainer> 
                  <h3>Aed              
                  <Button>{price} /yr </Button> 
                  </h3>           
                </BtnContainer>
        </PropCard>        
        
    </>
  )
}

export default PropertyCard
