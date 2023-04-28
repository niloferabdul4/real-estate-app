import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container=styled.div`
        display: flex;
        justify-content: center;
        margin-left:auto;
        margin-right: auto;
        width:100%;
        padding:60px;
        color:rgba(0,0,0,0.74);
        background-color: white;
        ${mobile({ flexDirection:'column',padding:'0px',margin:'0px'})}
       
`
export const ImageContainer=styled.div`
        flex:0.4;
        padding:20px;
        max-height: 500px;
        display: flex;
        justify-content: center; 
        ${mobile({ maxHeight:'250px'})}       
`

export const Image=styled.img`
       width:100%;
       object-fit: contain;      
       ${mobile({ width:'80%'})}
`
export const InfoContainer=styled.div`
        flex:0.55;
        display: flex;
        flex-direction: column;
        padding:20px;
        max-height: 1000px; 
            
`
export const Title=styled.h3`
        font-size:30px;
        font-weight: 400;
        margin-bottom: 20px;
        line-height: 36px;
        text-align: justify;
        ${mobile({ fontSize:'17px'})}
        
`
export const Price=styled.div`
        display:flex;
        flex-direction: row;        
        font-size: 24px;
        font-weight:600;
        ${mobile({ fontSize:'20px'})}
`

export const Description=styled.div`        
        line-height: 30px;
        font-size:18px;
        text-align: justify;
        padding:10px 0px; 
        ${mobile({ fontSize:'16px'})}             
`
