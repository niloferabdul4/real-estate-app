import styled from "styled-components";
import { mobile } from "../../Responsive";

const BannerContainer=styled.div `  
    background-image:url("/assets/img/hero-img.jpg");  
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;   
    width: 100%;
    height:90vh; 
    padding:35px 0px;
    z-index:1; 
    h1{
        color:white;
    }
    h2{
        color:white;
    }
    ${mobile({ flex:0.2,width:'380px'})}
`

const Form =styled.form`
    background-color: #fff;
    border-radius: 5px;
    margin: 180px;
    padding: 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    z-index:100;
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
  `

  const FilterBox =styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
   
  `

  const Select=styled.select`
    font-size: 16px;
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    border-radius: 5px;
    position:relative;
   
  
  `

  const Input=styled.input`
    font-size: 16px;
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    border-radius: 5px;
    position:relative;
   
  
  `

 const Label=styled.label`
    font-size: 16px;
    margin:10px;
 `

export {BannerContainer,Form,FilterBox,Select,Input,Label}