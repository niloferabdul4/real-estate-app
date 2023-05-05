import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Image=styled.img`
     width:160px;
     height:160px;
     ${mobile({ width:'100px',height:'100px'})}

`

export const ButtonContainer=styled.div`
       width:100%;    
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       padding: 10px;
       gap:20px;
       margin-top:10px;
       ${mobile({ padding:'2px',gap:'4px'})}

`
export const Button=styled.button`
    height:50px;
    width:250px;
    border-radius: 6px;
    background-color: green;
    color:white ;
    font-size: 1.1rem;
    border:none;
    cursor: pointer;
    align-items: center;
    font-weight: 400;
    display:flex; 
    align-items:center;
    justify-content:center;
    gap:6px;
    ${mobile({ width:'120px',height:'40px',fontSize:'0.95rem',margin:'0px 20px'})}

`

export const Agent=styled.div`
      display:flex;
      flex-Direction:row;
      align-items:flex-start;
      

`

export const AgentName=styled.p`
     font-size:22px;
     margin:10px 30px;
     ${mobile({ fontSize:'18px',margin:'10px'})}

`

export const AgentEmail=styled.p`
     font-size:18px;
     margin:10px 30px;
     ${mobile({ fontSize:'15px',margin:'10px'})}

`

export const ContactNumber=styled.p`
     font-size:18px;
     margin:10px 30px;
     color:coral;
     ${mobile({ fontSize:'15px',margin:'10px'})}
`