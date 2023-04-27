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
    //z-index: 99999;
    display:flex;
    flex-direction:row;
    ${mobile({ height:'50px', margin:'0px',width:'100%'})}   
 
`

const LeftWrapper=styled.div`    
    flex:0.3;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left:30px;
    ${mobile({ gap:'2px',marginLeft:'10px',justifyContent:'center'})}
   
`

const Logo=styled.h2`
    text-align: center;
    align-items: center;
    margin-right: 10px;
   // object-fit: contain;
    color:red;
    ${mobile({ fontSize: "14px",marginRight:'5px' })}
`

const Button=styled.button`
    padding: 12px;
    width: 150px;
    height:40px;
    border-radius: 8px;
    font-size: 1rem;
    border: none;
    background-color:blue;
    color:white;
    font-weight:600;
    ${mobile({ height:'30px',fontSize:'0.8rem'})}
`

const RightWrapper=styled.div`
    flex:0.7;
    display:flex;
    margin-right: 10px;
    align-items: center;
    justify-content: space-around;
    color:#6F7378;
    ${mobile({ gap:'1px',justifyContent:'space-around' })}
`
 
const Span=styled.span`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap:2px;
    margin-right:10px;
    ${mobile({ display:'none'})}
    p{
      font-size :16px ;
      margin:0px;
    }
    h4{
        color:orange;
        font-size:16px;
       
    }
`

const Links=styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
    color:#6F7378;
   
    ${mobile({ fontSize:'14px',marginLeft: "20px",gap:'0px' })}
    
    
`

export {HeaderContainer,LeftWrapper,Logo,RightWrapper,Button,Links,Span}