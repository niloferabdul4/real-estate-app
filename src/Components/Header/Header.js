import React from 'react'
import { HeaderContainer,LeftWrapper,Logo,RightWrapper,Links,Span,Button } from './styles'
import { FavoriteBorderOutlined } from '@mui/icons-material';

const Header = () => {
  return (
    <div>
       <HeaderContainer>
            <LeftWrapper>
              <Logo>Real ESTATE </Logo>   
                        
            </LeftWrapper>
            <RightWrapper>
                    
                    <Span>
                        <FavoriteBorderOutlined/>                    
                         <p>Favourites </p>                                             
                    </Span> 
                    <Links to='For Sale' >Property For Sale</Links>
                    <Links to ='For Rent'>Property For Rent</Links>                                    
                    <Links to='register' >Register</Links>
                    <Links to ='login'  >Login</Links>
                    <Button>Place Your Ad</Button>                                         
            </RightWrapper> 
        </HeaderContainer>    
    </div>
  )
}

export default Header
