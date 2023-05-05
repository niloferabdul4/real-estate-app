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
    width:360px;
    max-width: 450px;  
    color:rgba(0,0,0,0.7)
    cursor:pointer; 
    position:relative;
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
    &:hover{
        box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
       
    }
    ${mobile({ flexDirection:'row',maxHeight:'260px',maxWidth:'360px',margin:'0px',marginBottom:'10px',boxShadow:'none',padding:'0px'})}
`

export const PropImage=styled.img`
    object-fit: cover;
    width:100%;
    height:50%;   
    ${mobile({ width:'140px',height:'180px',marginBottom:'10px'})}
    `


export const PropInfoContainer=styled.div`
    display:flex;   
    flex-direction:column;   
    margin: 0px 10px;  
    padding:10px;
    gap:10px;
    ${mobile({ padding:'0px',margin:'8px 10px'})}
   
 
`

export const Name=styled.p`
    font-size:22px;
    font-weight:600;
    margin:15px 0px;
    ${mobile({margin:'0px',fontSize:'15px'})}

`
export const Price=styled.div`
    font-size:18px;
    margin:15px 0px;
    ${mobile({ fontSize:'14px',margin:'10px'})}
`
export const Address=styled.p`
    font-size:17px;
    margin:10px 0px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;   
    ${mobile({fontSize:'14px'})}

`
export const Description=styled.div`
    font-size:17px;
    margin:20px 0px;
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
    ${mobile({ left:'10px',fontSize:'12px',top:'50px',padding:'5px'})}

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
    ${mobile({ display:'none'})}


`
 export const Country=styled.p`
    font-size:18px;
 ${mobile({fontSize:'14px'})}
 
 `