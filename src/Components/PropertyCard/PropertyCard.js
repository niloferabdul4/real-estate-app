import React, { useContext, useState } from 'react'
import { PropCard,PropImage,PropInfoContainer ,Description,Name,Span,Address,Category,Country} from './style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button,BtnContainer } from '../RecentProperty/style';
import { useNavigate } from 'react-router-dom';
import { PropContext } from '../../Context/PropContextProvider';
const PropertyCard = ({id,name,image,country,price,address,description,category,property}) => {
  const navigate=useNavigate()
  const {state:{properties},dispatch}=useContext(PropContext)

  const saveProp=(id)=>{
    const currentProp=properties.find(item=>item.id===id)
    dispatch({type:'SAVE_PROPERTIES',payload:currentProp})
    navigate('/savedProperties')
  }

  return (
    <>
       <PropCard >                       
        <PropImage src={image} alt='' role='button' onClick={()=>{navigate(`/details/${id}`)}} />      
                <PropInfoContainer> 
                    <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Name>{name}</Name>  
                      <Button id='save'  onClick={()=>saveProp(id)}>Save</Button>
                    </span>                        
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <Category>{category}</Category>
                      <Country><LocationOnIcon fontSize='small'/>{country}</Country>
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

export default PropertyCard
