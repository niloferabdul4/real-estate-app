import React, { useContext } from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import { Container } from '../Properties/style'
import Header from '../../Components/Header/Header'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

const Favourites = () => {
    const {state:{favourites}}=useContext(PropContext)
  return (
    <div>
       <Header/>
    {favourites.length>0 ? (<h2 style={{color:'#5A5A5A' }}>Favourites List</h2>): (<h2 style={{color:'#5A5A5A',margin:'300px'}}>No Properties To Show</h2>)}
    <Container>
       { favourites?.map(item=>{return <PropertyCard key={item.id}                                                           
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
  
    </div>
  )
}

export default Favourites
