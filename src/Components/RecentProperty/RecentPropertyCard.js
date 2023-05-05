import React, { useContext, useState } from 'react'
import { Card,Image,InfoContainer,Span,BtnContainer,Button } from './style'
import { Name } from '../PropertyCard/style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PropContext } from '../../Context/PropContextProvider';

const RecentPropertyCard = ({id,name,image,address,price,country,property,category}) => {
  const {state:{properties},dispatch}=useContext(PropContext)
  const navigate=useNavigate()


  const saveProp=(id)=>{

    const currentProp=properties.find(item=>item.id===id)
    dispatch({type:'SAVE_PROPERTIES',payload:currentProp})
    navigate('/savedProperties')
  }

 
  return (
    <>
       <Card>        
               
              <Image src={image} alt=''  role='button' onClick={()=>{navigate(`/details/${id}`)}}/>      
              <InfoContainer>  
                  <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Name>{name}</Name> 
                      <Button id='save'  onClick={()=>saveProp(id)}>Save</Button>
                    </span>             
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <p><strong>Category: </strong>{category}</p>                       
                    <p><LocationOnIcon fontSize='small'/>{country}</p>
                    <p> {address}</p>
                  </span> 
                  <BtnContainer> 
                <h3>Aed              
                 <Button>{new Intl.NumberFormat('en-US').format(price)}/yr </Button> 
                 </h3>           
                 <Span id={property}>{property}</Span>
                
              </BtnContainer>
              </InfoContainer>
             

    </Card>
    </>
  )
}

export default RecentPropertyCard
