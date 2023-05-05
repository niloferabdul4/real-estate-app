import React,{useContext,useEffect} from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from './style';
import Header from '../../Components/Header/Header';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import { SubTitle } from '../../Components/Banner/style';
import ToggleBar from '../../Components/ToggleBar/ToggleBar';



const Properties= () => {
 const {state:{filteredProperties},setMenuOpen}=useContext(PropContext)

  return (
    <>
    <Header/>
    <ToggleBar/>
    {filteredProperties.length>0 ? (<SubTitle>Properties List</SubTitle>): (<h2 style={{color:'#5A5A5A',margin:'30px'}}>No Properties To Show</h2>)}
    <Container>
            
    

       { filteredProperties?.map(item=>{return <PropertyCard key={item.id}                                                           
                                                            name={item.data.name} 
                                                            image={item.data.image}
                                                            address={item.data.address}
                                                            price={item.data.price} 
                                                            country={item.data.country}
                                                            category={item.data.category}
                                                            property={item.data.property}
                                                            description={item.data.description}/>})
                                                            
                                                            
       }
        
    </Container>
  
    </>
  )
}

export default Properties