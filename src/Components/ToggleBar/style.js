import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../../Responsive";

const ToggleContainer=styled.div`
        flex-flow: column nowrap;
        background-color: dimgrey;
        border:none;
        position: fixed;
        top: 70px;
        right: ${props=>props.id==='menu'? '0px':'-170px'};
        width: 170px;
        z-index: 2;
        transition: all 0.6s ease;
      
        ${mobile({margin:'0px',top:'50px'})}
           
`

/*
const NavButton=styled.div`    
        visibility:hidden;
        display:flex;
        padding:10px;
        justify-content:center;
        align-items:center;
        font-size:20px;
        margin:10px;
        color:#404040;
        ${mobile({visibility:'visible'})}

`
*/
const NavList=styled.ul`
        margin: 0;
        padding: 10px;
        list-style: none;    
        font-weight: 300;   
        display:flex;
        flex-direction: column;
        align-items:flex-start;
        gap:10px;
       
        
`

const NavBarLink=styled(NavLink)`
        font-size: 17px;
        text-decoration: none;
        padding:15px;
        color:white;
 
        &:hover{
                transform:scale(1.1);
                transition: transform  ease 0.5s; 
                cursor: pointer;
                
        }
        ${mobile({fontSize:'15px',padding:'6px'})}
     
`

const PropBtn=styled.button`
        font-size: 17px;
        text-decoration: none;
        padding:15px;
        border:none;
        cursor:pointer;
        background:transparent;
        color:white;
        
        &:hover{
                
                transform:scale(1.1);
                transition: transform  ease 0.5s; 
                cursor: pointer;
                
        }
        ${mobile({fontSize:'15px',padding:'6px'})}
    
`
export {ToggleContainer,NavList,NavBarLink,PropBtn}