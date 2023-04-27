import styled from "styled-components";
import { mobile } from "../../Responsive";

export const FeaturedContainer=styled.div`
display:grid;
grid-template-columns: repeat( auto-fit, minmax(280px, 1fr) );
grid-column-gap:20px;
z-index: 1;      
margin-left: 50px;
margin-right: 50px;  
max-width  :100% ;
padding: 10px;
margin-bottom: 20px;
${mobile({flexDirection:"column",padding:' 10px', margin:'20px 15px 12px 15px'})}
`
