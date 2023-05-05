import React, { useContext } from 'react'
import { PropContext } from '../../Context/PropContextProvider'
import { Container } from '../Properties/style'
import Header from '../../Components/Header/Header'
import Card from './Card'
import styled from 'styled-components'
import { SubTitle } from '../../Components/Banner/style'

const SavedProperties = () => {
    const {state:{savedProperties}}=useContext(PropContext)
  return (
    <div>
       <Header/>
    {savedProperties.length>0 ? (<SubTitle>Saved List</SubTitle>): (<h2 style={{color:'#5A5A5A',margin:'300px'}}>No Properties To Show</h2>)}
    <Container>
       { savedProperties?.map(item=>{return <Card key={item.id}                                                           
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

export default SavedProperties
