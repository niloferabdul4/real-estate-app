import React,{useContext} from 'react';
import { BannerContainer,Title,SubTitle,Form,Top,Bottom,Select,FilterBox,FilterOption,Input,Label,PriceRange,Button} from './style';
import { Link, useNavigate } from 'react-router-dom';
import { PropContext } from '../../Context/PropContextProvider';


const Banner = () => {

  const {state:{properties,selectedPropCategory,selectedPropType,currentLocation,maxPrice},dispatch}=useContext(PropContext)
 
  const catg=[{id:1,title:'all'},{id:2,title:'house'},{id:3,title:'villa'},{id:4,title:'apartment'},{id:5,title:'office'}]
  const navigate=useNavigate()

    

const applyFilters=async(event)=>
{
  event.preventDefault();
  const filteredItems=properties?.filter(item=>(item.data.property===selectedPropType && item.data.category===selectedPropCategory && Number(item.data.price)<=maxPrice ) && item.data.address.includes(currentLocation))
  dispatch({type:'LOAD_FILTERED_PROPERTIES',payload:filteredItems}); 
  navigate('/properties')
}
  

    return (
        <>
        <BannerContainer>            
          <Title>Find The Perfect Place</Title>
          <SubTitle>Find new & featured property located in your local city.</SubTitle> 
          <Form onSubmit={applyFilters}>
            <Top>
            <FilterBox>
              <Label>City/Street</Label>
              <Input type='text' placeholder='Location' onChange={(event)=>dispatch({type:'ADD_LOCATION',payload:event.target.value})}/>
            </FilterBox>
            <FilterBox>
              <Label>Property Sale/Rent</Label>
              <Select onChange={(event)=>dispatch({type:'SELECTED_TYPE',payload:event.target.value})} >
                <FilterOption value='Select'>Select</FilterOption>
              <FilterOption value='Rent'>Rent</FilterOption>
              <FilterOption value='Sale'>Sale</FilterOption>
             
              </Select>
            </FilterBox>
            <FilterBox>
              <Label>Property Category</Label>
              <Select onChange={(event)=>dispatch({type:'SELECTED_CATEGORY',payload:event.target.value})}>
                {catg.map(item=>{return <FilterOption  key={item.id}value={item.title}>{item.title}</FilterOption>})}                
              </Select>
            </FilterBox>
            <FilterBox>
              <Label>Price Range</Label>
              <PriceRange type='range' min={1} max={50000} value={maxPrice} onChange={(event)=>{dispatch({type:'SELECTED_PRICE_RANGE',payload:event.target.value})}}/> 
              <p style={{marginLeft:'100px'}}>{new Intl.NumberFormat('en-US').format(maxPrice)} Aed </p>
            </FilterBox>
            </Top> 
            <Bottom>
           <Button type='submit'>Apply Filters</Button>
           </Bottom>
          </Form>               
        </BannerContainer>
        </>
    );
}

export default Banner;