import React from 'react'
import styled from 'styled-components'
import { categories } from '../product'
import { CategoryItem } from './CategoryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content:center;

`

export const Categories = () => {
  return (
    <Container>
      {categories.map((item,index)=>(
        <CategoryItem key={index} item={item}/>
      ))}
    </Container>
  )
}
