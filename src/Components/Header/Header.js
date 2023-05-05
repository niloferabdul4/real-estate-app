import React, { useContext } from 'react'
import { HeaderContainer,LeftWrapper,Logo,RightWrapper,Links,Span,PropBtn } from './styles'
import { PropContext } from '../../Context/PropContextProvider';
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const {user,setMenuOpen,dispatch}=useContext(PropContext)
  const navigate=useNavigate()

  const list=[{id:1,title:'Sale', type:'Sale'},{id:2,title:'Rent',type:'Rent'}]

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
              <Logo>Property Finder </Logo>   
                    
            </LeftWrapper>
            <RightWrapper>   
                    <Links to='/'>Home</Links>                                 
                    <Links to='/savedProperties'>Saved Properties</Links>                                             
                    
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
                   
                <MenuIcon style={{cursor:'pointer'}} onClick={()=>setMenuOpen(menuOpen=>!menuOpen)}/> 
                                                  
            </RightWrapper> 
        </HeaderContainer>    
    </div>
  )
}

export default Header
