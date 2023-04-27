import styled from "styled-components";

  const Footr =styled.div`
    background-color: #1d2636;
    padding: 30px ;
    color: #fff;
  `
  const Container=styled.div`
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 1fr;
    grid-gap: 20px;
  

  h2 {
    font-weight: 500;
  }
   p {
    color: grey;
    margin: 20px 0;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 30px;
  }
  ul {
    display: block;
  }
   ul li {
    display: block;
    color: grey;
    margin-bottom: 20px;
  }
  `
const Input =styled.input`
    background-color: #fff;
    padding: 17px;
    width: 100%;
    border-radius: 5px;
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
`
  export {Footr,Container,Input,InputWrapper,Button}
  