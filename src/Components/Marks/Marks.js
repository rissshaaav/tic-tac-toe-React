import React from 'react'
import './Marks.css'

export const Circle = () => {
  return (
    <div className='circle'>
      <div className='outerCircle'>
        <div className='innerCircle'></div>
      </div>
      {/* <div className='blurOfCircle'></div> */}
    </div>
  )
}

export const Cross = () => {
  return (
    <div className='cross'>
        <div id='cross'></div>
      {/* <div className='blurOfCross'></div> */}
    </div>
  )
}
