import styled from "styled-components";
export const Wrapper=styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    grid-column-gap:15px;
    z-index: 1;      
    margin-left: 100px;
    margin-right: 100px;  
    padding: 10px;
    margin-bottom: 20px;
    
`


export const Box=styled.div`
    width:280px;
    height:340px;
    margin:30px;
    background-color:white;
    border-radius: 6px;
    border: 1px solid rgb(62 28 131 / 10%);
    padding: 1rem;
    transition: 0.5s;
    &:hover{
        box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
        cursor: pointer;
    }
  `
  
 
  export const InfoContainer=styled.div`
    text-align: center;
  
  `
  export const ImageContainer=styled.div`
    width: 140px;
    height: 140px;
    margin: auto;
    position: relative;
  `
  export const Image=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `
  
  export const Label=styled.label`
    display: inline-block;
   
  `
  
  export const ButtonContainer=styled.div`
   
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
  `