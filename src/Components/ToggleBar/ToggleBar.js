import React, { useContext, useState } from 'react'
import { PropBtn } from './style'
import { ToggleContainer,NavList,NavBarLink } from './style'
import { PropContext } from '../../Context/PropContextProvider'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebase'

const ToggleBar = () => {

 const {menuOpen,user,dispatch}=useContext(PropContext)
    const list=[{id:1,title:'Sale', type:'Sale'},{id:2,title:'Rent',type:'Rent'}]
     const navigate=useNavigate() 
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
    <>
      {menuOpen &&<ToggleContainer id='menu'>   
             <NavList>                                           
                    <NavBarLink to='/' >Home</NavBarLink>
                    <NavBarLink to='/savedProperties' >Favourites</NavBarLink>
                    {list.map(item=>{return <PropBtn key={item.id} value={item.type} onClick={handleClick}>{item.title}</PropBtn>})}   
                    {!user?
                    (
                    <>
                    <NavBarLink to='/login'>Login</NavBarLink>
                    <NavBarLink to='/register'>Register</NavBarLink>
                    </>
                    )
                    :
                    (<NavBarLink  to='/login' onClick={logoutFn}>Logout</NavBarLink>)
                   }                                   
                                  
              </NavList>               
            
      </ToggleContainer>
}
    </>
  )
}

export default ToggleBar
