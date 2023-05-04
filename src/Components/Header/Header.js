import React, { useContext } from 'react'
import { HeaderContainer,LeftWrapper,Logo,RightWrapper,Links,Span,PropBtn } from './styles'
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { PropContext } from '../../Context/PropContextProvider';
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const Header = () => {
  const {user,dispatch}=useContext(PropContext)
  const navigate=useNavigate()

  const list=[{id:1,title:'Property For Sale', type:'Sale'},{id:2,title:'Property For Rent',type:'Rent'}]
const handleClick=(event)=>
{
 
  dispatch({type:'SELECTED_TYPE',payload:event.target.value})
  navigate(`/property/${event.target.value}`)
}

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
                    <Links to='/favourites'>Favourites</Links>                                             
                    
                    {list.map(item=>{return <PropBtn key={item.id} value={item.type} onClick={handleClick}>{item.title}</PropBtn>})}
                   
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
                   
                                                         
            </RightWrapper> 
        </HeaderContainer>    
    </div>
  )
}

export default Header
