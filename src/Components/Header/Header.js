import React, { useContext } from 'react'
import { HeaderContainer,LeftWrapper,Logo,RightWrapper,Links,Span,Button } from './styles'
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { PropContext } from '../../Context/PropContextProvider';
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Header = () => {
  const {user}=useContext(PropContext)
  const navigate=useNavigate()
  
  const logoutFn = () => {
    if(user){
        signOut(auth);
        navigate('/login')
    }
}
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
                    {!user?
                    (
                    <>
                    <Links to='/login'>Login</Links>
                    <Links to='/register'>Register</Links>
                    </>
                    )
                    :
                    (<Links  to='/login' onClick={logoutFn}>Logout</Links>)
                   }                                   
                   
                    <Button>Place Your Ad</Button>                                         
            </RightWrapper> 
        </HeaderContainer>    
    </div>
  )
}

export default Header
