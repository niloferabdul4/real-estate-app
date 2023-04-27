import React from 'react'
import { categories } from '../../data'
import { CategoriesContainer } from './style'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <>
      <h2>Categories</h2>
      <CategoriesContainer>
        {categories.map(item=>{return <CategoryCard  key={item.category} category={item}/>})}
      </CategoriesContainer>
    </>
  )
}

export default Categories
