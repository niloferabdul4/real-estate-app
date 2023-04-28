import React,{useContext, useState} from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import PropertyCard from '../PropertyCard/PropertyCard'
import { FeaturedContainer } from './style'
import settings from './Settings';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentPropertyCard from '../RecentProperty/RecentPropertyCard';
const Featured = () => {
 const {property}=useContext(PropContext)

  return (
    <>
    <h2>Recent Properties</h2>
    <FeaturedContainer>
     
     <Slider {...settings} >        
        {property?.map(item=>{return <RecentPropertyCard key={item.id}
                                                            id={item.id}
                                                            name={item.data.name} 
                                                            image={item.data.image}
                                                            address={item.data.address}
                                                            price={item.data.price} 
                                                            country={item.data.country}
                                                            property={item.data.property}/>})}
     </Slider>
    </FeaturedContainer>
    </>
  )
}

export default Featured