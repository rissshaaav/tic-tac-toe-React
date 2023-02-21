import React from 'react'
import './PickYourSide.css'
import {Cross, Circle} from '../Marks/Marks';

const PickYourSideScreen = () => {
  return (
    <div className='pickYourSide'>
      <div id='pickYourSide'>
        <h1>Pick Your Side</h1>
          <div className='sides'><Circle/></div>
          <div className='sides'><Cross/></div>
      </div>
    </div>
  )
}

export default PickYourSideScreen
