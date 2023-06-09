import React,{useContext, useState} from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import PropertyCard from '../PropertyCard/PropertyCard'
import { FeaturedContainer } from './style'
import settings from './Settings';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentPropertyCard from '../RecentProperty/RecentPropertyCard';
import { SubTitle } from '../Banner/style';
const Featured = () => {
 const {state:{properties}}=useContext(PropContext)

  return (
    <>
    <SubTitle>Our Recent Properties</SubTitle>
    <FeaturedContainer>
     
     <Slider {...settings} >        
        {properties?.map(item=>{return <RecentPropertyCard key={item.id}
                                                            id={item.id}
                                                            name={item.data.name} 
                                                            image={item.data.image}
                                                            address={item.data.address}
                                                            price={item.data.price} 
                                                            country={item.data.country}
                                                            category={item.data.category}
                                                            property={item.data.property}
                                                            bedrooms={item.data.bedrooms}
                                                            bathrooms={item.data.bathrooms}
                                                           
                                                           />})}
     </Slider>
    </FeaturedContainer>
    </>
  )
}

export default Featured