import React,{useContext,useEffect} from 'react'
import { onSnapshot,collection } from '@firebase/firestore'
import { db } from '../../Firebase/firebase'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { PropContext } from '../../Context/PropContextProvider'
import { Wrapper,Box,InfoContainer,ImageContainer,Image,Label,Button, ButtonContainer } from './style'
import { SubTitle } from '../Banner/style';

const Agents = () => {
  const {state:{agents},dispatch}=useContext(PropContext)
    useEffect(()=>{
      
        const unSub=onSnapshot(collection(db,'agents'),(snapshot)=>{
          const newItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            data:doc.data()
          }));
          dispatch({type:'SET_AGENTS',payload:newItems}); 
       
        })
        return () => {
          unSub();
        };
      },[])

  return ( 
       
    <>
       
          <SubTitle>Our Featured Agents </SubTitle>
             <Wrapper>
              {agents?.map(item =>{return <>
            
                 <Box key={item.id} >
                  <ImageContainer key={item.id}>
                    <Image src={item.data.image} alt='' />                      
                  </ImageContainer>
                 <InfoContainer>
                  <Label>
                  <h3>{item.data.name} </h3>
                  <p>{item.data.listings} Listings</p>

                  </Label>
                 
                  </InfoContainer>
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
                </Box>
                </>
              })}
         </Wrapper>
           
       </>   
           
        
        
    
  )
}

export default Agents

