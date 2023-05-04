import styled from "styled-components";
import { mobile } from "../../Responsive";

export const PropContainer=styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
    grid-column-gap:20px;
    z-index: 1;      
    margin: 30px 30px;
    max-width  :100% ;
    padding: 10px;
    margin-bottom: 20px;
    cursor:pointer;
    ${mobile({display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'0px',margin:'0px',padding:'0px'})}
   
`