import React from 'react'
import { categories } from '../../data'
import { CategoriesContainer } from './style'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <>
      <h2 style={{color:'#5A5A5A'}}>Categories</h2>
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
