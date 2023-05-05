import React from 'react'
import { PropCard,PropImage,PropInfoContainer ,Description,Name,Span,Address,Category} from '../../Components/PropertyCard/style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button,BtnContainer } from '../../Components/RecentProperty/style';
import { useNavigate } from 'react-router-dom';



const Card = ({id,name,image,country,price,address,description,category,property}) => {
  const navigate=useNavigate()

  return (
    <>
       <PropCard >                       
        <PropImage src={image} alt='' role='button' onClick={()=>{navigate(`/details/${id}`)}} />      
                <PropInfoContainer> 
                    <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Name>{name}</Name>                       
                    </span>                        
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <Category>{category}</Category>
                      <p><LocationOnIcon fontSize='small'/>{country}</p>
                      <Address> {address}</Address>
                      <Description> {description}</Description>
                    </span> 
                    <BtnContainer> 
                  <h3>Aed              
                  <Button>{new Intl.NumberFormat('en-US').format(price)}/yr </Button> 
                  </h3>  
                  <Span id={property}>{property}</Span>         
                </BtnContainer>
                </PropInfoContainer>
               
        </PropCard>        
        
    </>
  )
}

export default Card
