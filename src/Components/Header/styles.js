import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const HeaderContainer=styled.div`
    background-color: #fff;
    height: 70px;
    box-shadow: 0 5px 30px rgb(0 22 84 / 10%);
    padding: 6px 0;
    position: sticky;
    top: 0;
    display:flex;
    flex-direction:row;
    padding:0px 20px;
    ${mobile({ height:'50px', margin:'0px',width:'100%'})}   
 
`

const LeftWrapper=styled.div`    
    flex:0.3;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left:30px;
    ${mobile({flex:'0.6',marginLeft:'2px'})}
   
`

const Logo=styled.h2`
    text-align: center;
    align-items: center;
    margin-right: 10px;
   // object-fit: contain;
    color:red;
    ${mobile({ fontSize: "16px",marginRight:'5px' })}
`

const RightWrapper=styled.div`
    flex:0.7;
    display:flex;
    margin-right: 10px;
    align-items: center;
    justify-content: space-around;
    color:#6F7378;
    ${mobile({ marginRight:'2px',justifyContent:'flex-end'})}
`

const PropBtn=styled.button`
    font-size: 18px;
    color:#6F7378;
    background:transparent;
    border:none;
    cursor:pointer;
    &:hover{
        transform:scale(1.1);
        transition: transform  ease 0.5s; 
       
    }
    ${mobile({ display:'none'})}
    
    
`

const Links=styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
    color:#6F7378;
    cursor:pointer;
    ${mobile({ display:'none'})}
    &:hover{
        transform:scale(1.1);
        transition: transform  ease 0.5s; 
       
    }
    
`

export {HeaderContainer,LeftWrapper,Logo,RightWrapper,PropBtn,Links}