import React from 'react'
import { categories } from '../../../api/db.json'

import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(category => <Item key={category}><Category {...category} /></Item>)
      }
    </List>
  )
}
