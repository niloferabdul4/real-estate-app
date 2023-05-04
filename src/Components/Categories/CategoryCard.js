import React,{useContext} from 'react'
import { Card,CategoryTitle,Image,InfoContainer,Button } from './style'
import { useNavigate } from 'react-router-dom'
import { PropContext } from '../../Context/PropContextProvider'

const CategoryCard = ({title,icon,category}) => {
const {dispatch}=useContext(PropContext)
  const navigate=useNavigate()

  const handleClick=(category)=>{
    
    console.log(category)
    dispatch({type:'SELECTED_CATEGORY',payload:category})
    navigate(`/category/${category}`)


  }
 
  return (
    <Card role='button' onClick={()=>handleClick(category)} >               
                        <CategoryTitle> {title}</CategoryTitle>
                        <Image src={icon}  alt=''/>                  
                        <InfoContainer>                          
                            <Button>VIEW MORE</Button>
                        </InfoContainer>                              
            </Card>     
  )
}

export default CategoryCard
