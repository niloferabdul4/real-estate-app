import React from 'react'
import { Card,CategoryTitle,Image,InfoContainer,Button } from './style'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({category}) => {

  const navigate=useNavigate()
  
  const handleCategory=()=>{  
   navigate(`/${category.category}`)
   
  }
  
  return (
    <Card role='button' onClick={handleCategory} >               
                        <CategoryTitle> {category.title}</CategoryTitle>
                        <Image src={category.icon}  alt=''/>                  
                        <InfoContainer>                          
                            <Button>VIEW MORE</Button>
                        </InfoContainer>                              
            </Card>     
  )
}

export default CategoryCard
