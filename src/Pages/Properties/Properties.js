import React,{useContext,useEffect} from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentPropertyCard from '../../Components/RecentProperty/RecentPropertyCard';
import { db } from '../../Firebase/firebase';
import { query,where,getDocs,collection } from '@firebase/firestore';
import { Container } from './style';
import Header from '../../Components/Header/Header';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import { SubTitle } from '../../Components/Banner/style';



const Properties= () => {
 const {state:{filteredProperties}}=useContext(PropContext)

  return (
    <>
    <Header/>
    {filteredProperties.length>0 ? (<SubTitle>Properties List</SubTitle>): (<h2 style={{color:'#5A5A5A',margin:'300px'}}>No Properties To Show</h2>)}
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