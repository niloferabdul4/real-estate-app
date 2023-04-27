import React from 'react';
import { BannerContainer,Form,FilterBox,Input,Span,SearchBox, SearchButton} from './style';
import { SearchOutlined } from '@mui/icons-material';
const Banner = () => {
    return (
        <>
        <BannerContainer>   
           
        
          <h1>Search Your Next Home</h1>
          <h3>Find new & featured property located in your local city.</h3> 

          <Form>
            <FilterBox>
              <Span>City/Street</Span>
              <Input type='text' placeholder='Location' />
            </FilterBox>
            <FilterBox>
              <Span>Property Type</Span>
              <Input type='text' placeholder='Property Type' />
            </FilterBox>
            <FilterBox>
              <Span>Price Range</Span>
              <Input type='text' placeholder='Price Range' />
            </FilterBox>
            <SearchBox>
              <Span>Advanced Search</Span>
              <Input type='text' placeholder='Search' />
              <SearchButton>
                    <SearchOutlined size={20} type='button' />
                </SearchButton>     
            </SearchBox>
          </Form>
        
   
           
             
        </BannerContainer>
        </>
    );
}

export default Banner;