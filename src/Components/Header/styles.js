import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const HeaderContainer=styled.div`
    height:90px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top:0;
    z-index: 100;
    background-color:#f1c40f;
    ${mobile({ height:'50px', margin:'0px',width:'100%'})}   
 
`

const LeftWrapper=styled.div`
    flex:0.5;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left:30px;
    ${mobile({ gap:'2px',marginLeft:'10px',justifyContent:'center'})}
   
`

const Logo=styled.h2`
    text-align: center;
    align-items: center;
    margin-right: 30px;
    object-fit: contain;
    color:red;
    ${mobile({ fontSize: "14px",marginRight:'5px' })}
`

const SearchBox=styled.div`
    display: flex;
    font-size: 16px;
    align-items: center;
    border:0.3px solid lightgrey;
    ${mobile({ fontSize: "14px"})}
     
   
`

const SearchButton=styled.button`
    margin-left:0px;
    color:#2874f0;
    background-color:white;
    padding: 8px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    ${mobile({height:'20px',padding:'6px'})}
`
const Form=styled.form`
    display: flex;
    align-items: center;
     
`
const Input=styled.input`
    height:30px;
    width:300px;
    border-radius: 1px;
    border:none;
    padding:10px;
    ${mobile({width:'60px',height:'15px'})}
`

const Button=styled.button`
    padding: 10px;
    width: 150px;
    height:40px;
    border-radius: 8px;
    font-size: 1rem;
    border: none;
    background-color:red;
    color:white;
    font-weight:600;
    ${mobile({ height:'30px',fontSize:'0.8rem'})}
`

const RightWrapper=styled.div`
    flex:0.5;
    display:flex;
    margin-right: 50px;
    align-items: center;
    justify-content: space-around;
    color:#6F7378;
    ${mobile({ flex:2,gap:'1px',justifyContent:'space-around' })}
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

export {HeaderContainer,LeftWrapper,Logo,RightWrapper,Button,Links,Span,Form,Input,SearchBox,SearchButton}