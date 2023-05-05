import React from 'react'
import { categories } from '../../data'
import { CategoriesContainer } from './style'
import CategoryCard from './CategoryCard'
import { SubTitle } from '../Banner/style'

const Categories = () => {
  return (
    <>
      <SubTitle>Categories</SubTitle>
      <CategoriesContainer>
        {categories.map(item=>{return <CategoryCard  key={item.category} 
                                                    title={item.title} 
                                                    icon={item.icon} 
                                                    category={item.category}/>})}
      </CategoriesContainer>
    </>
  )
}

export default Categories
