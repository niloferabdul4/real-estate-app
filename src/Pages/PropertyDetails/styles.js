import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container=styled.div`
        display: flex;
        //justify-content: center;
        margin-left:auto;
        margin-right: auto;
        padding:60px;
        color:rgba(0,0,0,0.74);
        margin-bottom:50px;
        ${mobile({ flexDirection:'column',padding:'0px',margin:'15px 0px'})}
       
`
export const ImageContainer=styled.div`
        flex:0.5;
        padding:20px;
        max-height: 700px;
        display: flex;
        justify-content: center; 
        ${mobile({ maxHeight:'250px',padding:'10px'})}       
`

export const Image=styled.img`
       width:100%;
       object-fit: cover;    
       ${mobile({ width:'90%'})}
`
export const InfoContainer=styled.div`
        flex:0.5;
        display: flex;
        flex-direction: column;
        padding:20px;
        height:100vh;
            
`
export const Title=styled.h3`
        font-size:32px;
        font-weight: 600;
        margin-bottom: 20px;
        line-height: 34px;
        text-align: justify;
        ${mobile({ fontSize:'18px'})}
        
`
export const Price=styled.div`
        display:flex;
        flex-direction: row;   
        gap:5px;     
        font-size: 24px;
        font-weight:600;
        color:orangered;
        margin-bottom: 20px;
        ${mobile({ fontSize:'20px'})}
`

export const Description=styled.div`        
        line-height: 34px;
        font-size:20px;
        text-align: justify;
        padding:10px 0px; 
        margin-bottom: 50px;
        ${mobile({ fontSize:'16px'})}             
`


export const Address=styled.p`        
       
        font-size:20px;
        text-align: justify;
        margin-bottom: 50px;
        ${mobile({ fontSize:'16px'})}             
`
export const Span=styled.div` 
        width:80%;   
        font-size:18px;
        gap:15px;
        display:flex;
        flex-direction:row;
        align-items:center;
        color:green;
        margin-bottom: 20px;
      p{
        border-right:0.5px solid grey;
        padding-right:20px;
      }
       
        ${mobile({ fontSize:'16px'})}             
`
