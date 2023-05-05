import styled from "styled-components";
import { mobile } from "../../Responsive";


export const Container=styled.div`
    height:100vh;
    width:100vw;
    display :flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin:15px 0px;

`

export const Wrapper = styled.div`
  width: 480px;
  height:450px;
  background-color:white;
  padding:20px;
  border:0.1px solid lightgrey;
  ${mobile({width:'260px',height:'400px'})} 
  `
  export const Form=styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
`
    export const Input=styled.input`
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    `

    export const Textarea=styled.textarea`
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    `

    export const Label=styled.label`
        margin:15px 0px 10px 0px;
`

   export const Button=styled.button`
    height:50px;
    width:180px;
    border-radius: 6px;
    background-color: green;
    color:white ;
    margin-left:auto;
    margin-right:auto;
    margin-top:25px;
    font-size: 1.1rem;
    border:none;
    cursor: pointer;
    font-weight: 400;
    ${mobile({ width:'120px',height:'40px',fontSize:'0.95rem',marginTop:'15px'})}
   
`