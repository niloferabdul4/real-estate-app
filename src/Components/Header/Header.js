import React, { useContext } from 'react'
import { HeaderContainer,LeftWrapper,Logo,RightWrapper,Links,Span,Button } from './styles'
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { PropContext } from '../../Context/PropContextProvider';
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { FilterContext } from '../../Context/FilterContextProvider';

const Header = () => {
  const {user}=useContext(PropContext)
  const {state:{setSelectedPropType,selectedPropType},dispatch}=useContext(FilterContext)
  const navigate=useNavigate()

  const list=[{id:1,title:'Property For Sale', type:'Sale'},{id:2,title:'Property For Rent',type:'Rent'}]
const handleClick=(event)=>
{
 
  dispatch({type:'SELECT_BY_TYPE',payload:event.target.value})
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
          
                    <Span>
                        <FavoriteBorderOutlined/>                    
                         <p>Favourites </p>                                             
                    </Span> 
                    {list.map(item=>{return <Button key={item.id} value={item.type} onClick={handleClick}>{item.title}</Button>})}
                   
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
