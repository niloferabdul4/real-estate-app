import styled from "styled-components";
import { mobile } from "../../Responsive";

const BannerContainer=styled.div `  
    background-image:url("/assets/img/banner.png");  
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;   
    width: 100%;
    height:90vh; 
    padding:35px 0px;
     
    h1{
        color:white;
    }
    h3{
        color:white;
    }
    ${mobile({ flex:0.2,width:'380px'})}
`

const Form =styled.form`
    background-color: #fff;
    border-radius: 5px;
    margin: 50px;
    padding: 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  `

  const FilterBox =styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
   
  `

  const Input=styled.input`
    font-size: 14px;
    color: black;
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    border-radius: 5px;
    position:relative;
  
  `
 const Span=styled.span`
    font-size: 16px;
    color: grey;
    margin:10px;
 `
 const SearchBox =styled.div`        
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    position:relative;

`
 const SearchButton=styled.button`
    margin-left:0px;
    color:#2874f0;
    background-color:white;
    padding: 8px;
    border:none;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:60px;
    left:210px;
    ${mobile({height:'20px',padding:'6px'})}
`
export {BannerContainer,Form,FilterBox,Input,Span,SearchBox,SearchButton}