import React from 'react'
import './SquareStyle.css'

const Square = (props) => {
  return (
    <div className={`square ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Square
