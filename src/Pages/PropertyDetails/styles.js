import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container=styled.div`
        display: flex;
        //justify-content: center;
        margin-left:auto;
        margin-right: auto;
        padding:60px;
        color:rgba(0,0,0,0.74);
        background-color: white;
        ${mobile({ flexDirection:'column',padding:'0px',margin:'0px'})}
       
`
export const ImageContainer=styled.div`
        flex:0.5;
        padding:20px;
        max-height: 500px;
        display: flex;
        justify-content: center; 
        ${mobile({ maxHeight:'250px'})}       
`

export const Image=styled.img`
       width:100%;
       object-fit: cover;    
       ${mobile({ width:'80%'})}
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
        font-weight: 400;
        margin-bottom: 20px;
        line-height: 34px;
        text-align: justify;
        ${mobile({ fontSize:'17px'})}
        
`
export const Price=styled.div`
        display:flex;
        flex-direction: row;   
        gap:5px;     
        font-size: 22px;
        font-weight:600;
        color:red;
        ${mobile({ fontSize:'20px'})}
`

export const Description=styled.div`        
        line-height: 34px;
        font-size:20px;
        text-align: justify;
        padding:10px 0px; 
        ${mobile({ fontSize:'16px'})}             
`


export const Category=styled.p`        
       
        font-size:20px;
        text-align: justify;
        ${mobile({ fontSize:'16px'})}             
`

export const Address=styled.p`        
       
        font-size:20px;
        text-align: justify;
        ${mobile({ fontSize:'16px'})}             
`
export const Rooms=styled.div` 
width:40%;   
        font-size:18px;
        text-align: justify;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        color:green;
        ${mobile({ fontSize:'16px'})}             
`