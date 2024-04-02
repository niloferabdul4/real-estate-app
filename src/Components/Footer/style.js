import styled from "styled-components";
import { mobile } from "../../Responsive";

  const Footr =styled.div`
    background-color: #1d2636;
    padding: 30px ;
    color: #fff;
    ${mobile({ padding:'20px 10px'})}
  `
  const Container=styled.div`
    margin-inline:auto;
    padding-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
   
  h2 {
    font-weight: 500;
    ${mobile({ fontSize:'16px'})}
  }
   p {
    color: grey;
    margin: 20px 0;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 30px;
    ${mobile({ fontSize:'14px'})}
  }
  ul {
    display: block;
  }
   ul li {
    display: block;
    color: grey;
    margin-bottom: 20px;
    ${mobile({ marginBottom:'10px'})}
  }
  `
const Input =styled.input`
    background-color: #fff;
    padding: 17px;
    width: 100%;
    border-radius: 5px;
    ${mobile({ padding:'10px',width:'80%'})}
`

const InputWrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;

`

const Button =styled.button`
    background-color: #fff;
    padding: 15px;
    width: 40%;
    border-radius: 8px;
    margin: 15px;;
    ${mobile({ padding:'8px',width:'30%'})}
`
  export {Footr,Container,Input,InputWrapper,Button}
  