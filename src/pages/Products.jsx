import React from 'react'
import Breakfast from '../Components/Breakfast'
import Lunch from '../Components/Lunch'
import './Products.css'

export default function Products() {
  return (
    <div className='products'>
        <Breakfast/>
        <Lunch/>
    </div>
  )
}
