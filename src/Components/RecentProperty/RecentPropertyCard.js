import React, { useContext } from 'react'
import { Card,Image,InfoContainer,Span,BtnContainer,Button } from './style'
import { Name } from '../PropertyCard/style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const RecentPropertyCard = ({id,name,image,address,price,country,property,category}) => {
  const navigate=useNavigate()
 
  return (
    <>
       <Card>        
               
              <Image src={image} alt=''  role='button' onClick={()=>{navigate(`/details/${id}`)}}/>      
              <InfoContainer>  
                  <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Name>{name}</Name> 
                      <FavoriteBorderOutlined/>
                    </span>             
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <p><strong>Category: </strong>{category}</p>                       
                    <p><LocationOnIcon fontSize='small'/>{country}</p>
                    <p> {address}</p>
                  </span> 
              </InfoContainer>
              <BtnContainer> 
                <h3>Aed              
                 <Button>{new Intl.NumberFormat('en-US').format(price)}/yr </Button> 
                 </h3>           
                 <Span id={property}>{property}</Span>
                
              </BtnContainer>

    </Card>
    </>
  )
}

export default RecentPropertyCard
