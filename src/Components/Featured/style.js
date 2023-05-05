import styled from "styled-components";
import { mobile } from "../../Responsive";

export const FeaturedContainer=styled.div`
display:grid;
grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
grid-column-gap:20px;
z-index: 1;      
margin-left: 50px;
margin-right: 50px;  
max-width  :100% ;
padding: 10px;
margin-bottom: 50px;
${mobile({flexDirection:"column",padding:'0px', margin:'20px 4px'})}
`
