import React from 'react'
import { HeaderContainer,LeftWrapper,Logo,RightWrapper,Links,Span,Button,SearchBox,SearchButton,Form,Input } from './styles'
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { SearchOutlined } from '@mui/icons-material';
const Header = () => {
  return (
    <div>
       <HeaderContainer>
            <LeftWrapper>
              <Logo>Real ESTATE </Logo>   
              <SearchBox > 
                    <Form >             
                      <Input type='search' />
                <SearchButton>
                    <SearchOutlined size={20} type='button' />
                </SearchButton>                            
                 </Form>
                    </SearchBox>              
            </LeftWrapper>
            <RightWrapper>
                    
                    <Span>
                        <FavoriteBorderOutlined/>                    
                         <p>Favourites </p>                                             
                    </Span>
                                                           
                    <Links to='register' >Register</Links>
                    <Links to ='login'  >Login</Links>
                    <Button>Place Your Ad</Button>                                         
            </RightWrapper> 
        </HeaderContainer>    
    </div>
  )
}

export default Header
