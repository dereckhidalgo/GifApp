import React, { useState } from 'react'
import { AddCategory, ShowCategory } from './components'

export const GifApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {

    if (nameValidator(newCategory)) return;
    setCategories([newCategory,...categories])

  }

  const nameValidator = (newCategory) => {

    return categories.includes(newCategory);

  }


  return (
    <>
      <h1>GifApp</h1>

      <AddCategory 
        onNewCategory={onAddCategory} 
      />

      {categories.map((category) => (

        <ShowCategory
          key={category}
          category={category}
        />

      )
      )}
    </>
  )
}
