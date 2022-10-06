import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CategoriesStyled } from './CategoriesStyled'

export const Categories = ({ value, onClickCategory }) => {
  const categories = [
    'Все',
    'Designers',
    'Analysts',
    'Managers',
    'iOS',
    'Android',
  ]

  return (
    <CategoriesStyled>
      {categories.map((categoryName, i) => (
        <li key={i}>
          <a onClick={() => onClickCategory(i)}>{categoryName}</a>
        </li>
      ))}
    </CategoriesStyled>
  )
}
