import styled from "styled-components";
import { mobile } from "../../Responsive";


export const Card=styled.div`    
    margin:20px;
    padding:0px 20px;
    padding-bottom:20px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    //border:0.5px solid lightgrey;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2px;
    background-color: white;
    z-index: 1;
    height:460px;
   // max-height: 560px;
    max-width: 320px;  
    color:rgba(0,0,0,0.7); 
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
    position:relative;
    ${mobile({ minHeight:'320px',maxWidth:'180px',margin:'0px',boxShadow:'none'})}
`


export const Image=styled.img`
    object-fit: cover;
    width:100%;
    height:100%; 
   
    ${mobile({ width:'140px',height:'140px',marginBottom:'10px'})}
    `

export const InfoContainer=styled.div`
    
display:flex;
flex-direction:column;  
    p{
      display: -webkit-box;
      overflow: hidden;
        -webkit-line-clamp: 1;
     -webkit-box-orient: vertical;   

    }
`
   
  
  export const Span =styled.div`
    padding: 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
    position:absolute;
    top:0;
    right:10px;
    background-color:green;
    color:white;
  
  `

  export const BtnContainer=styled.div`
  display:flex;
  flex-direction:row;
  padding:0px 15px;
  
  h3{
    font-size:16px;
    
  }

  `
export const Button=styled.button`
border:none;
background-color:orangered;
color:white;
padding: 8px;
border-radius: 4px;
font-size: 16px;
margin-left:10px;
`
