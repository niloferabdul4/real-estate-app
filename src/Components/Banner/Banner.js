import React from 'react';
import { BannerContainer,Form,Select,FilterBox,Input,Label} from './style';
import { SearchOutlined } from '@mui/icons-material';
const Banner = () => {
    return (
        <>
        <BannerContainer>             
        
          <h1>Find The Perfect Place</h1>
          <h2>Find new & featured property located in your local city.</h2> 
          <Form>
            <FilterBox>
              <Label>City/Street</Label>
              <Input type='text' placeholder='Location' />
            </FilterBox>
            <FilterBox>
              <Label>Property Sale/Rent</Label>
              <Select>
                <option>For Sale</option>
                <option>For Rent</option>
              </Select>
            </FilterBox>
            <FilterBox>
              <Label>Property Type</Label>
              <Select>
                <option>House</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Office</option>
              </Select>
            </FilterBox>
            <FilterBox>
              <Label>Price Range</Label>
              <Select>
                <option>Below Aed 10000 </option>
                <option>Aed 10000-Aed 20000</option>
                <option>Above Aed 20000 </option>
              </Select>
            </FilterBox>
           
          </Form>               
        </BannerContainer>
        </>
    );
}

export default Banner;