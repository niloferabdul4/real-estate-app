import styled from "styled-components";
import { mobile } from "../../Responsive";


export const Card=styled.div`    
    margin:20px;
    padding-bottom:20px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    //border:0.5px solid lightgrey;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2px;
    background-color: white;
    z-index: 1;
    height:500px;
    max-height: 700px;
    width:320px;
    max-width: 460px;  
    color:rgba(0,0,0,0.7); 
    position:relative;
    transition: 0.3s;
    cursor:pointer;
    &:hover{
        box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
        cursor: pointer;
    }
    ${mobile({ height:'340px',maxWidth:'175px',margin:'0px',boxShadow:'none',padding:'2px'})}
`


export const Image=styled.img`
    object-fit: cover;
    width:100%;
    height:50%; 
    margin-bottom:10px;
    ${mobile({ width:'100%',height:'140px',marginBottom:'10px'})}
    `

export const InfoContainer=styled.div`
    
    display:flex;
    flex-direction:column;  
    margin:0px 20px;
    p{
      margin:10px 0px;
      display: -webkit-box;
      overflow: hidden;
        -webkit-line-clamp: 1;
     -webkit-box-orient: vertical;    
    }
    ${mobile({margin:'0px 10px'})}
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
    opacity:0.8;
   
  `

  export const BtnContainer=styled.div`
  display:flex;
  flex-direction:row;
  margin:20px 15px;
  
  h3{
    font-size:17px;
    
  }
  ${mobile({margin:'6px 2px'})}
  `
export const Button=styled.button`
  border:none;
  opacity:0.8;
  background-color:${props=>props.id==='save' ? '#3b5998': 'orangered'};
  color:white;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  margin-left:10px;
  ${mobile({fontSize:'12px',padding:'6px'})}
`
