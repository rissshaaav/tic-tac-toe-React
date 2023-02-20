import React from 'react'
import './PickYourSide.css'
import {Cross, Circle} from '../Marks/Marks';

const PickYourSide = () => {
  return (
    <div className='pickYourSide'>
      <h2>Pick Your Side</h2>
      <div><Circle/></div>
      <div><Cross/></div>
    </div>
  )
}

export default PickYourSide
