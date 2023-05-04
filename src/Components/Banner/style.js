import styled from "styled-components";
import { mobile } from "../../Responsive";

const BannerContainer=styled.div `  
    background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
    url("/assets/img/hero-img.jpg")
          center;
    //background-image:url("/assets/img/hero-img.jpg");  
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

const Form=styled.form`
    background-color: #fff;
    border-radius: 5px;
    margin: 180px;
    padding: 20px;
    display:flex;
    flex-direction:column;
    gap:5px;
    z-index:100;
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
  `

  const FilterBox =styled.div`    
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:8px;
  `

  const Select=styled.select`
    font-size: 16px;
    padding: 10px;
    width: 100%;
    border:none;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    border-radius: 5px;
   background-color:#fff;
   cursor:pointer;
   box-shadow:0px 2px 4px rgba(0,0,0,0.2)
   transition:all 0.2s ease-in-out;
 &:focus{
  outline:none;
  box-shadow:0px 2px 4px rgba(0,0,0,0.3)
 }
  
  `
const FilterOption=styled.option`
 marging:18px;
 padding:18px;
 height:100px;


`
  const Input=styled.input`
    font-size: 16px;
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    border-radius: 5px;
    position:relative;
   
  
  `

 const Label=styled.label`
    font-size: 16px;
    margin:10px;
 `


 
 const PriceRange=styled.input`
  flex:0.4;

`

const Button=styled.button`
    height:50px;
    width:140px;
    font-size:1.1rem;
    border:none;
    border-radius:8px;
    background-color:  #2874f0;
    color:white;
    cursor:pointer;

`
export {BannerContainer,Form,FilterBox,FilterOption,Select,Input,Label,PriceRange,Button}