import styled from "styled-components";
import { mobile } from "../../Responsive";
export const Wrapper=styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(260px, 1fr) );
    grid-column-gap:15px;
    z-index: 1;      
   margin:0px 100px 50px 100px; 
    padding: 10px;
    ${mobile({margin:'0px',gridTemplateColumns:'repeat(2,1fr)',padding:'0px'})}
   
`


export const Box=styled.div`
    width:260px;
    height:300px;
    margin:20px;
    background-color:white;
    border-radius: 6px;
    border: 1px solid rgb(62 28 131 / 10%);
    padding: 1rem;
    transition: 0.5s;
    &:hover{
        box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
        cursor: pointer;
    }
    ${mobile({margin:'10px',width:'160px',height:'250px',padding:'0.40rem'})}

  `
  
 
  export const InfoContainer=styled.div`
    text-align: center;
  
  `
  export const ImageContainer=styled.div`
    width: 140px;
    height: 140px;
    margin: auto;
    position: relative;
    ${mobile({width:'100px',height:'100px'})}
  `
  export const Image=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `
  
  export const Label=styled.label`
    margin:10px 0px;
    display: flex;
    flex-direction:column;
    gap:10px;
  `
  
  export const ButtonContainer=styled.div`
   margin:15px 0px;
   width:100%;
   display:flex;
   justify-content:space-around;
  `
  export const Button=styled.button`
    height:45px;
    width:100px;
    background-color:green;
    border:none;
    color:white;
    border-radius:6px;
    font-size:1.0rem;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    cursor:pointer;
    ${mobile({gap:'8px',width:'70px',height:'30px',fontSize:'0.90rem'})}
  `