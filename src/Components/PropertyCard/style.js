import styled from "styled-components"
import { mobile } from "../../Responsive"

export const PropCard=styled.div`    
    margin:20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    //border:0.5px solid lightgrey;
    background-color: white;
    z-index: 1;
    height:600px;
    max-height: 700px;
    max-width: 400px;  
    color:rgba(0,0,0,0.7)
    cursor:pointer; 
    position:relative;
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
    &:hover{
        box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
       
    }
    ${mobile({ minHeight:'320px',maxWidth:'180px',margin:'0px',boxShadow:'none'})}
`

export const PropImage=styled.img`
    object-fit: cover;
    width:100%;
    height:100%;   
    ${mobile({ width:'140px',height:'140px',marginBottom:'10px'})}
    `


export const PropInfoContainer=styled.div`
    display:flex;   
    flex-direction:column;   
    margin: 0px 10px;  
    padding:15px;
    ${mobile({ padding:'0px',margin:'8px 10px'})}
   
 
`

export const Name=styled.p`
    font-size:20px;
    font-weight:600;

`
export const Price=styled.div`
    margin:0px;
    ${mobile({ fontSize:'14px',margin:'10px'})}
`
export const Address=styled.p`

display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;   
    text-align:justify;

`
export const Description=styled.div`
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;   
    text-align:justify;
    ${mobile({ fontSize:'14px',margin:'0px'})}  
`


export const Span =styled.div`
    padding: 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    width:50px;
    display: inline-block;
    position:absolute;
    top:0;
    right:10px;
    background-color:green;
    color:white;

`


export const Category=styled.div`
    padding: 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
    position:absolute;
    top:240px;
    left:10px;
    background-color:yellow;
    opacity:0.8;
   

`
