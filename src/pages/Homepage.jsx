import React from 'react'
import Breakfast from '../components/Breakfast'
import Lunch from '../components/Lunch'
import './Products.css'

export default function Products() {
  return (
    <div className='products'>
        <Breakfast/>
        <Lunch/>
    </div>
  )
 }