import styled from "styled-components";
import { mobile } from "../../Responsive";

export const PropContainer=styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(360px, 1fr) );
    grid-column-gap:20px;
    z-index: 1;      
    margin: 30px 30px;
    max-width  :100% ;
    padding: 10px;
    margin-bottom: 20px;
    cursor:pointer;
    height:calc(100vh-70px);
    ${mobile({display:'flex',flexDirection:'column',maxWidth:'500px' , margin:'0px',padding:'6px'})}
   
`