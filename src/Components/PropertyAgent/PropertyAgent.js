import React,{useContext} from 'react'
import { Agent,AgentName,ContactNumber,Button,ButtonContainer,Image} from './style'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { PropContext } from '../../Context/PropContextProvider';


const PropertyAgent = () => {
    const {state:{singlePropertyAgent}}=useContext(PropContext)
  
  return (
    <div>
      
                          <h2 style={{display:'flex',alignItems:'flex-start'}}>Agent Details</h2>
                          <Agent>
                         
                         <Image src={singlePropertyAgent[0]?.image} />
                         <span>
                         <AgentName>{singlePropertyAgent[0]?.name}</AgentName>
                          <ContactNumber>{singlePropertyAgent[0]?.phone}</ContactNumber>
                          </span>
                         </Agent>
                         <ButtonContainer>
                              <Button>
                                <EmailOutlinedIcon/>
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
