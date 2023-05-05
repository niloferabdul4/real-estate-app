import React,{useContext} from 'react'
import { Agent,AgentName,AgentEmail,ContactNumber,Button,ButtonContainer,Image} from './style'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { PropContext } from '../../Context/PropContextProvider';
import { SubTitle } from '../Banner/style';
import { useNavigate } from 'react-router-dom';


const PropertyAgent = () => {
    const {state:{singlePropertyAgent}}=useContext(PropContext)
    const navigate=useNavigate()

  return (
    <div>
      
                          <SubTitle style={{display:'flex',alignItems:'flex-start',marginBottom:'20px'}}>Agent Details</SubTitle>
                          <Agent>
                         
                         <Image src={singlePropertyAgent[0]?.image} />
                         <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                          <AgentName>{singlePropertyAgent[0]?.name}</AgentName>
                          <AgentEmail>{singlePropertyAgent[0]?.email}</AgentEmail>
                          <ContactNumber>{singlePropertyAgent[0]?.phone}</ContactNumber>
                          </span>
                         </Agent>
                         <ButtonContainer>
                              <Button onClick={()=>navigate('/contact')}>                                
                                <EmailOutlinedIcon />                               
                                Email                                
                            </Button>
                              <Button >
                                <LocalPhoneIcon/>
                                Call
                              </Button>
                         </ButtonContainer>  
                        
    </div>
  )
}

export default PropertyAgent
