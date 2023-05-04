import React, { useContext } from 'react'
import { PropCard,PropImage,PropInfoContainer ,Description,Name,Span,Address,Category} from './style';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button,BtnContainer } from '../RecentProperty/style';
import { useNavigate } from 'react-router-dom';
import { PropContext } from '../../Context/PropContextProvider';
const PropertyCard = ({id,name,image,country,price,address,description,category,property}) => {
  const navigate=useNavigate()
  const {state:{properties,favourites},dispatch}=useContext(PropContext)

  const addToFav=(id)=>{
    const currentProp=properties.find(item=>item.id===id)
    dispatch({type:'ADD_TO_FAVOURITES',payload:currentProp})

  }

  return (
    <>
       <PropCard >                       
        <PropImage src={image} alt='' role='button' onClick={()=>{navigate(`/details/${id}`)}} />      
                <PropInfoContainer> 
                    <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Name>{name}</Name>  
                      <FavoriteBorderOutlined onClick={()=>addToFav(id)}/>
                    </span>                        
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <Category>{category}</Category>
                      <p><LocationOnIcon fontSize='small'/>{country}</p>
                      <Address> {address}</Address>
                      <Description> {description}</Description>
                    </span> 
                </PropInfoContainer>
                <BtnContainer> 
                  <h3>Aed              
                  <Button>{new Intl.NumberFormat('en-US').format(price)}/yr </Button> 
                  </h3>  
                  <Span id={property}>{property}</Span>         
                </BtnContainer>
        </PropCard>        
        
    </>
  )
}

export default PropertyCard
