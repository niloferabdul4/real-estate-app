import React from 'react'
import { Card,CategoryTitle,Image,InfoContainer,Button } from './style'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({category}) => {

  const navigate=useNavigate()
 
  return (
    <Card role='button' onClick={()=>{navigate(`/category/${category.category}`)}} >               
                        <CategoryTitle> {category.title}</CategoryTitle>
                        <Image src={category.icon}  alt=''/>                  
                        <InfoContainer>                          
                            <Button>VIEW MORE</Button>
                        </InfoContainer>                              
            </Card>     
  )
}

export default CategoryCard
